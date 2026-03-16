import type { Route } from "./+types/about";
import { HeroLeftAlignedWithPhoto } from "../components/sections/hero-left-aligned-with-photo";
import { CallToActionSimple } from "../components/sections/call-to-action-simple";
import { ButtonLink } from "../components/elements/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About — Riverview Park" },
    {
      name: "description",
      content:
        "Learn how the Riverview Park app was built and the story behind the project.",
    },
  ];
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <HeroLeftAlignedWithPhoto
        id="hero"
        headline="About This Project"
        subheadline={
          <p>
            The Riverview Park app is a community-driven guide to one of
            Pittsburgh's most beloved green spaces. Learn about the tools,
            technologies, and motivations behind the project.
          </p>
        }
        photo={
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Code on a laptop screen"
            className="size-full object-cover"
            width={1740}
            height={1160}
          />
        }
      />

      {/* How It Was Built */}
      <section id="how-it-was-built" className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            How It Was Built
          </h2>
          <div className="mt-6 space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Tech Stack
          </h2>
          <div className="mt-6 space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <p>
              This application was built with React Router v7 (with server-side
              rendering), TypeScript, and Tailwind CSS v4. The build tooling is
              powered by Vite, and the app is containerized with Docker for
              deployment.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet.
            </p>
          </div>
        </div>
      </section>

      {/* Why Riverview Park */}
      <section id="why-riverview" className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Why Riverview Park?
          </h2>
          <div className="mt-6 space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero
              eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti quos dolores et
              quas molestias excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga.
            </p>
            <p>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptas assumenda est, omnis dolor repellendus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
