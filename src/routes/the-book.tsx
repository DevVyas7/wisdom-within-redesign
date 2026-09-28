import { createFileRoute } from "@tanstack/react-router";
import { BookPage } from "@/components/Pages";

export const Route = createFileRoute("/the-book")({
  head: () => ({ meta: [
    { title: "The Book | The Wisdom Bharat" },
    { name: "description", content: "Discover Awaken Your Ultimate High-Performance System by Life Coach PR." },
    { property: "og:title", content: "The Book | The Wisdom Bharat" },
    { property: "og:description", content: "Discover Awaken Your Ultimate High-Performance System by Life Coach PR." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: BookPage,
});
