import type { Route } from "./+types/nature";
import { StoryMapEmbed } from "../components/elements/storymap-embed";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Immerse in Nature — Riverview Park" },
    {
      name: "description",
      content: "Riverview Park wildlife, trails, and natural beauty.",
    },
  ];
}

export default function Nature() {
  return (
    <div className="container mx-auto">
      <StoryMapEmbed storyId="4daee479ad1b44c682ec6a36b71a7718" />
    </div>
  );
}
