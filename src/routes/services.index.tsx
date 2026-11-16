import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/Pages";

export const Route = createFileRoute("/services/")({
  head: () => ({ meta: [
    { title: "Services | The Wisdom Bharat" },
    { name: "description", content: "Explore NLP Guided Meditation, Reiki Healing, Garbhsanskar, Lifestyle & Conscious Living Practices and AURA Energy Scanning." },
    { property: "og:title", content: "Services | The Wisdom Bharat" },
    { property: "og:description", content: "Explore NLP Guided Meditation, Reiki Healing, Garbhsanskar, Lifestyle & Conscious Living Practices and AURA Energy Scanning." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ServicesPage,
});
