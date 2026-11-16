import { createFileRoute } from "@tanstack/react-router";
import { GarbhaSanskarPage } from "@/components/Pages";

export const Route = createFileRoute("/services/garbhsanskar")({
  head: () => ({ meta: [
    { title: "Garbha Sanskar | The Wisdom Bharat" },
    { name: "description", content: "Garbha Sanskar is a holistic prenatal nurturing program designed to support expecting parents in creating a positive, peaceful and nurturing environment during pregnancy." },
    { property: "og:title", content: "Garbha Sanskar | The Wisdom Bharat" },
    { property: "og:description", content: "Garbha Sanskar is a holistic prenatal nurturing program designed to support expecting parents in creating a positive, peaceful and nurturing environment during pregnancy." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: GarbhaSanskarPage,
});
