import type { Route } from "./+types/facilities";
import { StoryMapEmbed } from "../components/elements/storymap-embed";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Plan Your Visit — Riverview Park" },
    {
      name: "description",
      content:
        "Plan your visit to Riverview Park with our interactive story map.",
    },
  ];
}

export default function PlanYourVisit() {
  return <StoryMapEmbed storyId="468b6d61ad6a4bfa8e1a14674f18f414" />;
}
