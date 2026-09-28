import { createFileRoute } from "@tanstack/react-router";
import { ProgramsPage } from "@/components/Pages";

export const Route = createFileRoute("/programs")({
  head: () => ({ meta: [
    { title: "Programs | The Wisdom Bharat" },
    { name: "description", content: "Explore NLP coaching, Reiki training, Garbhsanskar guidance and the 10-week program." },
    { property: "og:title", content: "Programs | The Wisdom Bharat" },
    { property: "og:description", content: "Explore NLP coaching, Reiki training, Garbhsanskar guidance and the 10-week program." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ProgramsPage,
});
