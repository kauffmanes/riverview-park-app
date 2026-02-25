import type { Route } from "./+types/facilities";
import { StoryMapEmbed } from "../components/elements/storymap-embed";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Facilities — Riverview Park" },
    { name: "description", content: "Park facilities, playground, picnic areas, and dog park." },
  ];
}

export default function Facilities() {
  return (
    <StoryMapEmbed storyId="PLACEHOLDER_FACILITIES_STORY_ID" />
  );
}
