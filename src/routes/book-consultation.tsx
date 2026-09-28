import { createFileRoute } from "@tanstack/react-router";
import { BookingPage } from "@/components/Pages";

export const Route = createFileRoute("/book-consultation")({
  head: () => ({ meta: [
    { title: "Book a Consultation | The Wisdom Bharat" },
    { name: "description", content: "Book a consultation with The Wisdom Bharat through its appointment calendar." },
    { property: "og:title", content: "Book a Consultation | The Wisdom Bharat" },
    { property: "og:description", content: "Book a consultation with The Wisdom Bharat through its appointment calendar." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: BookingPage,
});
