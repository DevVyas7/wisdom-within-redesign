import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/Pages";

export const Route = createFileRoute("/services/nlp")({
  head: () => ({ meta: [
    { title: "NLP Guided Meditation | The Wisdom Bharat" },
    { name: "description", content: "Explore NLP Guided Meditation sessions and mindset work at The Wisdom Bharat." },
    { property: "og:title", content: "NLP Guided Meditation | The Wisdom Bharat" },
    { property: "og:description", content: "Explore NLP Guided Meditation sessions and mindset work at The Wisdom Bharat." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ServicePage index={0} />,
});
