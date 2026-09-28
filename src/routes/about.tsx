import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/Pages";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Life Coach PR | The Wisdom Bharat" },
    { name: "description", content: "Meet Life Coach PR and discover the philosophy behind The Wisdom Bharat." },
    { property: "og:title", content: "About Life Coach PR | The Wisdom Bharat" },
    { property: "og:description", content: "Meet Life Coach PR and discover the philosophy behind The Wisdom Bharat." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});
