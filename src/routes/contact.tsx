import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/Pages";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact | The Wisdom Bharat" },
    { name: "description", content: "Contact The Wisdom Bharat in Bhubaneswar by email, phone or WhatsApp." },
    { property: "og:title", content: "Contact | The Wisdom Bharat" },
    { property: "og:description", content: "Contact The Wisdom Bharat in Bhubaneswar by email, phone or WhatsApp." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ContactPage,
});
