import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/Pages";

export const Route = createFileRoute("/services/life-coaching")({
  head: () => ({ meta: [
    { title: "Lifestyle & Conscious Living Practices | The Wisdom Bharat" },
    { name: "description", content: "Explore one to one Lifestyle & Conscious Living Practices." },
    { property: "og:title", content: "Lifestyle & Conscious Living Practices | The Wisdom Bharat" },
    { property: "og:description", content: "Explore one to one Lifestyle & Conscious Living Practices." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ServicePage index={3} />,
});
