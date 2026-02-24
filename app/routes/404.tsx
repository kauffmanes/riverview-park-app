import { Link } from "../components/elements/link";
import { ArrowNarrowRightIcon } from "../components/icons/arrow-narrow-right-icon";
import { HeroSimpleCentered } from "../components/sections/hero-simple-centered";

export function meta() {
  return [
    { title: "Page not found — Riverview Park App" },
    { name: "description", content: "Sorry, the page you were looking for could not be found." },
  ];
}

export default function NotFound() {
  return (
    <>
      <HeroSimpleCentered
        headline="Page not found"
        subheadline={<p>Sorry, but the page you were looking for could not be found.</p>}
        cta={
          <Link href="/">
            Go back home <ArrowNarrowRightIcon />
          </Link>
        }
      />
    </>
  );
}
