/**
 * Google Places API (New) Integration & Author Attribution Architecture
 *
 * Confirmed Place ID for The Wisdom Bharat:
 * Hex CID: 0x3a1e2f9d85d7b5bf:0x51c5874ea3d0dd3e
 * Place ID: ChIJv7XXhZ0vHjoP3t3Qo06HxVE
 * Google Maps URL: https://maps.app.goo.gl/EWznU1UXJmdHHJtPA
 */

import { createServerFn } from "@tanstack/react-start";
import { type GoogleReview, testimonials } from "./site";

export const WISDOM_BHARAT_PLACE_ID = "ChIJv7XXhZ0vHjoP3t3Qo06HxVE";

export interface GooglePlaceAuthorAttribution {
  displayName: string;
  uri?: string;
  photoURI?: string;
  photoUri?: string;
}

export interface GooglePlaceReviewRaw {
  rating?: number;
  text?: { text: string; languageCode?: string };
  originalText?: { text: string; languageCode?: string };
  relativePublishTimeDescription?: string;
  publishTime?: string;
  googleMapsUri?: string;
  authorAttribution?: GooglePlaceAuthorAttribution;
}

export interface GooglePlacesResponse {
  reviews?: GooglePlaceReviewRaw[];
}

/**
 * Server-side fetcher for Google Places API (New) - Place Details.
 * Requests only the required field mask:
 * - reviews.authorAttribution
 * - reviews.rating
 * - reviews.text
 * - reviews.originalText
 * - reviews.relativePublishTimeDescription
 * - reviews.publishTime
 * - reviews.googleMapsUri
 *
 * Never exposes the Google API key to the client bundle.
 */
export async function fetchLiveGoogleReviews(
  apiKeyOverride?: string
): Promise<GoogleReview[] | null> {
  const apiKey =
    apiKeyOverride ||
    (typeof process !== "undefined" ? process.env?.GOOGLE_PLACES_API_KEY : undefined);

  if (!apiKey) {
    if (typeof process !== "undefined" && process.env?.NODE_ENV !== "production") {
      console.info(
        "[Google Places API] No GOOGLE_PLACES_API_KEY configured in environment. Using verified static reviews fallback."
      );
    }
    return null;
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${WISDOM_BHARAT_PLACE_ID}`;
    const fieldMask = [
      "reviews.authorAttribution",
      "reviews.rating",
      "reviews.text",
      "reviews.originalText",
      "reviews.relativePublishTimeDescription",
      "reviews.publishTime",
      "reviews.googleMapsUri",
    ].join(",");

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": fieldMask,
      },
    });

    if (!response.ok) {
      const errText = await response.text().catch(() => "");
      console.error(
        `[Google Places API] Error fetching place reviews: HTTP ${response.status} ${response.statusText}`,
        errText
      );
      return null;
    }

    const data = (await response.json()) as GooglePlacesResponse;
    const rawReviews = data.reviews;

    if (!Array.isArray(rawReviews) || rawReviews.length === 0) {
      console.warn(
        "[Google Places API] No reviews returned for Place ID:",
        WISDOM_BHARAT_PLACE_ID
      );
      return null;
    }

    // Map raw Google Place Details (New) reviews into GoogleReview format
    return rawReviews.map((raw) => {
      const author = raw.authorAttribution;
      const displayName = author?.displayName || "Google Reviewer";
      const photoURI = author?.photoURI || author?.photoUri || undefined;
      const profileUri = author?.uri || undefined;
      const reviewText =
        raw.text?.text ||
        raw.originalText?.text ||
        (typeof raw.text === "string" ? raw.text : "") ||
        "";
      const publishDate =
        raw.relativePublishTimeDescription ||
        (raw.publishTime ? new Date(raw.publishTime).toLocaleDateString() : "");

      const initials =
        displayName
          .split(" ")
          .filter(Boolean)
          .map((part) => part[0])
          .join("")
          .toUpperCase()
          .slice(0, 2) || "GR";

      return {
        name: displayName,
        profile: "Google Review",
        service: publishDate,
        review: reviewText,
        rating: typeof raw.rating === "number" ? raw.rating : 5,
        initials,
        avatarUrl: photoURI,
        googleMapsUri:
          raw.googleMapsUri || profileUri || "https://maps.app.goo.gl/EWznU1UXJmdHHJtPA",
        authorAttribution: {
          displayName,
          uri: profileUri,
          photoURI,
        },
      };
    });
  } catch (error) {
    console.error("[Google Places API] Network or server error fetching reviews:", error);
    return null;
  }
}

/**
 * TanStack Start Server Function.
 * Executes on the server, safely accessing server-side environment variables
 * and proxying the Google Places API (New) response without exposing keys.
 */
export const getLiveGoogleReviews = createServerFn({ method: "GET" }).handler(async () => {
  const reviews = await fetchLiveGoogleReviews();
  return reviews;
});
