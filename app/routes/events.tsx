import type { Route } from "./+types/events";
import { Section } from "../components/elements/section";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Arts, Community & Events — Riverview Park App" },
    { name: "description", content: "Events and community at Riverview Park." },
  ];
}

export default function Events() {
  return (
    <Section id="events" headline="Arts, Community, and Events">
      <p className="text-olive-700 dark:text-olive-400">Content coming soon.</p>
    </Section>
  );
}
