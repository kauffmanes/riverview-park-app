import type { Route } from "./+types/community";
import { StoryMapEmbed } from "../components/elements/storymap-embed";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Community — Riverview Park" },
    { name: "description", content: "Events and community at Riverview Park." },
  ];
}

export default function Community() {
  return <StoryMapEmbed storyId="468b6d61ad6a4bfa8e1a14674f18f414" />;
}
