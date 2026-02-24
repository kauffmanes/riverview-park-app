import type { Route } from "./+types/nature";
import { Section } from "../components/elements/section";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Immerse in nature — Riverview Park App" },
    { name: "description", content: "Riverview Park wildlife, trails, and natural beauty." },
  ];
}

export default function Nature() {
  return (
    <Section id="nature" headline="Immerse in nature">
      <p className="text-olive-700 dark:text-olive-400">Content coming soon.</p>
    </Section>
  );
}
