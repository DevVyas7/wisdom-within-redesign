import { createFileRoute } from "@tanstack/react-router";
import { TestimonialsPage } from "@/components/Pages";

export const Route = createFileRoute("/testimonials")({
  head: () => ({ meta: [
    { title: "Testimonials | The Wisdom Bharat" },
    { name: "description", content: "Read about the status of verified client stories at The Wisdom Bharat." },
    { property: "og:title", content: "Testimonials | The Wisdom Bharat" },
    { property: "og:description", content: "Read about the status of verified client stories at The Wisdom Bharat." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: TestimonialsPage,
});
