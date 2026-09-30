import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/Pages";

export const Route = createFileRoute("/services/")({
  head: () => ({ meta: [
    { title: "Services | The Wisdom Bharat" },
    { name: "description", content: "Explore NLP, Reiki, Garbhsanskar and life and high performance coaching." },
    { property: "og:title", content: "Services | The Wisdom Bharat" },
    { property: "og:description", content: "Explore NLP, Reiki, Garbhsanskar and life and high performance coaching." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ServicesPage,
});
