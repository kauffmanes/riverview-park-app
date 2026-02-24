import type { Route } from "./+types/facilities";
import { Section } from "../components/elements/section";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Facilities — Riverview Park App" },
    { name: "description", content: "Park facilities, playground, picnic areas, and dog park." },
  ];
}

export default function Facilities() {
  return (
    <Section id="facilities" headline="Facilities">
      <p className="text-olive-700 dark:text-olive-400">Content coming soon.</p>
    </Section>
  );
}
