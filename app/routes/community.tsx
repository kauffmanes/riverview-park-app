import type { Route } from "./+types/community";
import { StoryMapEmbed } from "../components/elements/storymap-embed";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Community — Riverview Park" },
    { name: "description", content: "Events and community at Riverview Park." },
  ];
}

export default function Community() {
  return (
    <div className="container mx-auto">
      <StoryMapEmbed storyId="8d5b644ac7f74bf188cadaa51ea694e4" />
    </div>
  );
}
