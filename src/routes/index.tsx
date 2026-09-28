import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/Pages";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "The Wisdom Bharat | Awaken The Wisdom Within" },
    { name: "description", content: "Explore NLP, Reiki, Garbhsanskar and life coaching with The Wisdom Bharat in Bhubaneswar." },
    { property: "og:title", content: "The Wisdom Bharat | Awaken The Wisdom Within" },
    { property: "og:description", content: "Explore NLP, Reiki, Garbhsanskar and life coaching with The Wisdom Bharat in Bhubaneswar." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});
