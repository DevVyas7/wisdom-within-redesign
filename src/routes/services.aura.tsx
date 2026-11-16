import { createFileRoute } from "@tanstack/react-router";
import { AuraPage } from "@/components/Pages";

export const Route = createFileRoute("/services/aura")({
  head: () => ({ meta: [
    { title: "AURA Energy Scanning | The Wisdom Bharat" },
    { name: "description", content: "AURA Energy Scanning is a holistic wellness and personal-transformation program by The Wisdom Bharat, designed to help individuals explore their inner potential, develop positive mental patterns, cultivate spiritual awareness and build a mindful lifestyle." },
    { property: "og:title", content: "AURA Energy Scanning | The Wisdom Bharat" },
    { property: "og:description", content: "AURA Energy Scanning is a holistic wellness and personal-transformation program by The Wisdom Bharat, designed to help individuals explore their inner potential, develop positive mental patterns, cultivate spiritual awareness and build a mindful lifestyle." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AuraPage,
});

