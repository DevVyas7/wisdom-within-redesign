import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/Pages";

export const Route = createFileRoute("/services/life-coaching")({
  head: () => ({ meta: [
    { title: "Life & High Performance Coaching | The Wisdom Bharat" },
    { name: "description", content: "Explore one to one life and high performance coaching." },
    { property: "og:title", content: "Life & High Performance Coaching | The Wisdom Bharat" },
    { property: "og:description", content: "Explore one to one life and high performance coaching." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ServicePage index={3} />,
});
