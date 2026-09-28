import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/Pages";

export const Route = createFileRoute("/services/reiki")({
  head: () => ({ meta: [
    { title: "Reiki | The Wisdom Bharat" },
    { name: "description", content: "Explore Reiki healing and training at The Wisdom Bharat." },
    { property: "og:title", content: "Reiki | The Wisdom Bharat" },
    { property: "og:description", content: "Explore Reiki healing and training at The Wisdom Bharat." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ServicePage index={1} />,
});
