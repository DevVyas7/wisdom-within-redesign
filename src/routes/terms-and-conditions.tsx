import { createFileRoute } from "@tanstack/react-router";
import { TermsPage } from "@/components/Pages";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({ meta: [
    { title: "Terms & Conditions | The Wisdom Bharat" },
    { name: "description", content: "Read The Wisdom Bharat terms and conditions." },
    { property: "og:title", content: "Terms & Conditions | The Wisdom Bharat" },
    { property: "og:description", content: "Read The Wisdom Bharat terms and conditions." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: TermsPage,
});
