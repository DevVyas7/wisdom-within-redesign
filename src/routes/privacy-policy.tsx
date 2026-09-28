import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/Pages";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [
    { title: "Privacy Policy | The Wisdom Bharat" },
    { name: "description", content: "Read The Wisdom Bharat privacy policy." },
    { property: "og:title", content: "Privacy Policy | The Wisdom Bharat" },
    { property: "og:description", content: "Read The Wisdom Bharat privacy policy." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: PrivacyPage,
});
