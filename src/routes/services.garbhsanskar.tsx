import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/Pages";

export const Route = createFileRoute("/services/garbhsanskar")({
  head: () => ({ meta: [
    { title: "Garbhsanskar | The Wisdom Bharat" },
    { name: "description", content: "Explore conscious pregnancy guidance for parents at The Wisdom Bharat." },
    { property: "og:title", content: "Garbhsanskar | The Wisdom Bharat" },
    { property: "og:description", content: "Explore conscious pregnancy guidance for parents at The Wisdom Bharat." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ServicePage index={2} />,
});
