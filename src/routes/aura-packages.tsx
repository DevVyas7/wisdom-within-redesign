import { createFileRoute } from "@tanstack/react-router";
import { AuraPackagesPage } from "@/components/Pages";

export const Route = createFileRoute("/aura-packages")({
  head: () => ({
    meta: [
      { title: "AURA – Healing & Transformation Packages | The Wisdom Bharat" },
      {
        name: "description",
        content:
          "Explore the complete AURA Healing & Transformation Packages by The Wisdom Bharat. Basic Healing, Deep Healing, Pro Healing, and Introductory AURA Session.",
      },
      {
        property: "og:title",
        content: "AURA – Healing & Transformation Packages | The Wisdom Bharat",
      },
      {
        property: "og:description",
        content:
          "Explore the complete AURA Healing & Transformation Packages by The Wisdom Bharat. Basic Healing, Deep Healing, Pro Healing, and Introductory AURA Session.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuraPackagesPage,
});
