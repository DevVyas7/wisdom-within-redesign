import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { googleReviewScreenshots } from "./lib/site";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// In-memory rate limiting map for API endpoints (per-worker edge instance)
interface RateLimitRecord {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 60; // 60 req/min

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Periodic cleanup if map grows too large (> 5000 IPs)
  if (rateLimitMap.size > 5000) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (val.resetAt < now) rateLimitMap.delete(key);
    }
  }

  if (!record || record.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count += 1;
  return true;
}

// CORS origin validation for trusted domains
function getCorsOrigin(request: Request): string | null {
  const origin = request.headers.get("origin");
  if (!origin) return null;
  const allowed = [
    "https://thewisdombharat.com",
    "https://www.thewisdombharat.com",
    "https://brand.thewisdombharat.com",
  ];
  if (origin.startsWith("http://localhost:") || origin.startsWith("http://127.0.0.1:")) {
    return origin;
  }
  return allowed.includes(origin) ? origin : null;
}

// Centralized Security Headers Policy
function applySecurityHeaders(response: Response): Response {
  const headers = new Headers(response.headers);

  // Defense-in-depth: HSTS (Strict-Transport-Security)
  headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");

  // MIME type sniffing prevention
  headers.set("X-Content-Type-Options", "nosniff");

  // Anti-clickjacking
  headers.set("X-Frame-Options", "DENY");

  // Referrer policy
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Device permissions policy
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=()");

  // Cross-domain policy
  headers.set("X-Permitted-Cross-Domain-Policies", "none");

  // Comprehensive Content Security Policy tailored to The Wisdom Bharat's external assets
  headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https://*.googleusercontent.com https://*.googleapis.com https://brand.thewisdombharat.com https://images.unsplash.com https://img1.wsimg.com",
      "media-src 'self' data: blob:",
      "connect-src 'self' https://places.googleapis.com https://maps.googleapis.com https://brand.thewisdombharat.com https://*.cloudflareinsights.com",
      "frame-src 'self' https://brand.thewisdombharat.com https://www.google.com https://maps.google.com",
      "frame-ancestors 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' mailto:",
      "upgrade-insecure-requests",
    ].join("; ")
  );

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return applySecurityHeaders(response);
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return applySecurityHeaders(response);

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return applySecurityHeaders(response);

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return applySecurityHeaders(
    new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    })
  );
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      // 1. Block dangerous or probing HTTP methods
      const method = request.method.toUpperCase();
      if (["TRACE", "TRACK", "CONNECT"].includes(method)) {
        return applySecurityHeaders(
          new Response("Method Not Allowed", {
            status: 405,
            headers: { "Content-Type": "text/plain", Allow: "GET, HEAD, POST, OPTIONS" },
          })
        );
      }

      // 2. Reject excessively large payloads (defense against request-flooding DoS)
      const contentLength = request.headers.get("content-length");
      if (contentLength && parseInt(contentLength, 10) > 65536) {
        return applySecurityHeaders(
          new Response(JSON.stringify({ error: "Payload Too Large" }), {
            status: 413,
            headers: { "Content-Type": "application/json" },
          })
        );
      }

      const url = new URL(request.url);

      // 3. Dedicated serverless route for Google Reviews data with rate limiting, method restriction & CORS
      if (url.pathname === "/api/reviews") {
        const corsOrigin = getCorsOrigin(request);

        if (method === "OPTIONS") {
          return applySecurityHeaders(
            new Response(null, {
              status: 204,
              headers: {
                ...(corsOrigin ? { "Access-Control-Allow-Origin": corsOrigin } : {}),
                "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Accept",
                "Access-Control-Max-Age": "86400",
                Vary: "Origin",
              },
            })
          );
        }

        if (method !== "GET" && method !== "HEAD") {
          return applySecurityHeaders(
            new Response(JSON.stringify({ error: "Method not allowed" }), {
              status: 405,
              headers: {
                "Content-Type": "application/json",
                Allow: "GET, HEAD, OPTIONS",
                ...(corsOrigin ? { "Access-Control-Allow-Origin": corsOrigin } : {}),
                Vary: "Origin",
              },
            })
          );
        }

        // Client IP extraction (supports Cloudflare, forward proxies, or fallback)
        const clientIp =
          request.headers.get("cf-connecting-ip") ||
          request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
          "anonymous-client";

        if (!checkRateLimit(clientIp)) {
          return applySecurityHeaders(
            new Response(
              JSON.stringify({
                status: "error",
                message: "Too many requests. Please try again later.",
              }),
              {
                status: 429,
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  "Retry-After": "60",
                  ...(corsOrigin ? { "Access-Control-Allow-Origin": corsOrigin } : {}),
                  Vary: "Origin",
                },
              }
            )
          );
        }

        return applySecurityHeaders(
          new Response(
            JSON.stringify({
              status: "success",
              source: "authentic-screenshots",
              reviews: googleReviewScreenshots,
            }),
            {
              status: 200,
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
                ...(corsOrigin ? { "Access-Control-Allow-Origin": corsOrigin } : {}),
                Vary: "Origin",
              },
            }
          )
        );
      }

      // 4. SSR Handler execution
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error("[SSR Fatal Error]", error);
      return applySecurityHeaders(
        new Response(renderErrorPage(), {
          status: 500,
          headers: { "content-type": "text/html; charset=utf-8" },
        })
      );
    }
  },
};
