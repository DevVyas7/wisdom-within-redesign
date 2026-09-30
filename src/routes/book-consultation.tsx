import { createFileRoute } from "@tanstack/react-router";
import { BookingPage } from "@/components/Pages";

export const Route = createFileRoute("/book-consultation")({
  head: () => ({ meta: [
    { title: "Book a Consultation with Dr. Priya Ranjan Sahu | The Wisdom Bharat" },
    { name: "description", content: "Schedule your private consultation with Dr. Priya Ranjan Sahu through the appointment calendar." },
    { property: "og:title", content: "Book a Consultation with Dr. Priya Ranjan Sahu | The Wisdom Bharat" },
    { property: "og:description", content: "Schedule your private consultation with Dr. Priya Ranjan Sahu through the appointment calendar." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: BookingPage,
});
