import type { Route } from "./+types/events";
import { StoryMapEmbed } from "../components/elements/storymap-embed";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Arts, Community & Events — Riverview Park" },
    { name: "description", content: "Events and community at Riverview Park." },
  ];
}

export default function Events() {
  return (
    <StoryMapEmbed storyId="PLACEHOLDER_EVENTS_STORY_ID" />
  );
}
