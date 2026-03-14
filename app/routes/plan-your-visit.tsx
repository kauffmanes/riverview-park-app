import type { Route } from "./+types/plan-your-visit";
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
  return (
    <div className="container mx-auto">
      <StoryMapEmbed storyId="468b6d61ad6a4bfa8e1a14674f18f414" />
    </div>
  );
}
