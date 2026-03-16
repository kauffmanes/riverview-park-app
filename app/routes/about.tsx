import type { Route } from "./+types/about";
import { HeroLeftAlignedWithPhoto } from "../components/sections/hero-left-aligned-with-photo";
import { CallToActionSimple } from "../components/sections/call-to-action-simple";
import { ButtonLink } from "../components/elements/button";
import { Link } from "~/components/elements/link";

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
            I did my project on my local park, Riverview Park in Pittsburgh,
            Pennsylvania. I intended to show off the coolest aspects of the park
            and convince others to visit it. The intended audience consists of
            locals, aged 13+, with access to the internet, and an interest in
            outdoor recreation. I wanted to have a simple interface, be succinct
            with the content, have clear navigation, and be accessible.
          </p>
        }
        photo={
          <img
            src="/img/photos/deer.jpg"
            alt="A deer in the woods looking directly at the camera"
            className="size-full object-cover"
            width={1740}
            height={1160}
          />
        }
      />

      {/* How It Was Built */}
      <section id="how-it-was-built" className="py-8">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            How It Was Built
          </h2>
          <div className="mt-6 space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <p>
              I had a design in my head about how I wanted it to look, and when
              I started putting it together in StoryMap, it did not support the
              web building features that I wanted. So, instead of just building
              my project with StoryMap, I built a basic web application and used
              the{" "}
              <Link
                href="https://doc.esri.com/en/arcgis-storymaps/latest/reference/advanced-embedding.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                advanced embedding feature
              </Link>{" "}
              that lets you add a Storymap easily to HTML. This let me build a
              nice landing page with the design I wanted, and then link out to
              smaller Storymaps. This worked out nicely because I could tweak
              the content on the Storymaps without re-deploying my application
              over and over again.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="py-8">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Tech Stack
          </h2>
          <div className="mt-6 space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <p>
              The application uses a Tailwind template called{" "}
              <Link
                href="https://tailwindcss.com/plus/kits/oatmeal"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oatmeal
              </Link>{" "}
              that let me skip much of the component design portion. The
              template was built with Next.js but I wanted to use React Router
              v7, so I initialized my React Router project and converted the
              components from the Next.js download. I embedded my two Storymaps
              into the project and deployed the application using{" "}
              <Link
                href="https://fly.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                fly.io
              </Link>
              , which is one of my favorite hosting services. I then hooked it
              up to my new domain, <strong>riverviewparkpgh.com</strong>, which
              is where you are now! The home page is built with React, but if
              you click on the{" "}
              <Link href="/plan-your-visit">Plan Your Visit</Link> or{" "}
              <Link href="/nature">Nature</Link> links, you'll be able to find
              my embedded Storymap pages.
            </p>
          </div>
        </div>
      </section>
      <section id="plan-your-visit" className="py-8">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Plan Your Visit Storymap
          </h2>
          <div className="mt-6 space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <p>
              This page consists of general park info such as the hours,
              facilities, and places to recreate. You can check out the original
              Storymap in ArcGIS{" "}
              <Link
                href="https://storymaps.arcgis.com/stories/468b6d61ad6a4bfa8e1a14674f18f414"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </Link>
              . I used Survey123 to design a form that I could use to bike
              around the park and record features. I collected a feature name, a
              category, and a pre-populated list of categories.{" "}
              <Link
                href="https://survey123.arcgis.com/surveys/5b3fd8bae1c84651badb9c75f0844ec5/overview"
                target="_blank"
                rel="noopener noreferrer"
              >
                Here's the survey link.
              </Link>
            </p>
            <p>
              This allowed me to build a custom map in MapViewer, with different
              layers filtered by the category, which you can view{" "}
              <Link
                href="https://pennstate.maps.arcgis.com/apps/mapviewer/index.html?webmap=491f2337d2c946168c6b851cc8d6d950"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </Link>
              . One of my favorite layers on this map was all of the
              neighborhood dogs that I recorded. After I had the map ready, I
              could access this via my Storymap.
            </p>
          </div>
        </div>
      </section>

      <section id="nature" className="py-8">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Nature Storymap
          </h2>
          <div className="mt-6 space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <p>
              For my{" "}
              <Link
                href="https://storymaps.arcgis.com/stories/4daee479ad1b44c682ec6a36b71a7718"
                target="_blank"
                rel="noopener noreferrer"
              >
                second Storymap
              </Link>
              , I wanted to show off Riverview's natural areas. For the trails
              section, I found the 3 most popular trails for the park using
              AllTrails, downloaded them as KMZs, and added them as layers to my
              MapViewer map. I overlaid a layer of trailheads that I had
              recorded with Survey123.
            </p>
            <p>
              I used the iNaturalist Web Map explorer as a layer to show all of
              the different plants, animals, insects, etc. that are in the park.
              This made me want to download that and start recording myself!
            </p>
          </div>
        </div>
      </section>

      <section id="conclusion" className="py-8">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Nature Storymap
          </h2>
          <div className="mt-6 space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <p>
              In conclusion, I got really into this project and wish to continue
              it. I reached out to my local groups and neighbors and many people
              wanted to add to it! Someone has a friend who wrote a scientific
              paper on the geology, so I eventually want to add a "Rocks of
              Riverview" section. I want to log more neighborhood dogs on the
              dog map.
            </p>
            <p>
              I added a contact form to the footer that submits a row to a
              Google Sheet so I can track requests to the project and I'm hoping
              this can be a community event. I will be sharing it with my local
              Facebook group and sending it to the Park Conservancy with the
              hope that they can use it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
