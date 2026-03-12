import type { Route } from "./+types/home";
import {
  ButtonLink,
  PlainButtonLink,
  SoftButtonLink,
} from "../components/elements/button";
import { Link } from "../components/elements/link";
import { Screenshot } from "../components/elements/screenshot";
import { ArrowNarrowRightIcon } from "../components/icons/arrow-narrow-right-icon";
import { ChevronIcon } from "../components/icons/chevron-icon";
import { CallToActionSimple } from "../components/sections/call-to-action-simple";
import {
  FAQsTwoColumnAccordion,
  Faq,
} from "../components/sections/faqs-two-column-accordion";
import {
  FeatureThreeColumnWithDemos,
  Features,
} from "../components/sections/features-three-column-with-demos";
import { HeroWithDemoOnBackground } from "../components/sections/hero-with-demo-on-background";
import {
  Plan,
  PricingMultiTier,
} from "../components/sections/pricing-multi-tier";
import { TestimonialLargeQuote } from "../components/sections/testimonial-with-large-quote";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Riverview Park App" },
    {
      name: "description",
      content: "Customer support that feels like a conversation.",
    },
  ];
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroWithDemoOnBackground
        id="hero"
        headline="Riverview Park"
        subheadline={
          <p>A local's guide to Pittsburgh's most overlooked park.</p>
        }
        demo={
          <img
            src="https://images.squarespace-cdn.com/content/v1/64d182ccdbe1c3217d5eaa4d/5355838a-51d0-4b19-b8d7-41c802d99912/Facebook+observatory.jpg"
            alt="Allegheny Observatory at Riverview Park"
            className="size-full object-cover"
            width={1920}
            height={1080}
          />
        }
      />

      {/* Features */}
      <Features
        id="features"
        headline="Come experience the natural beauty of southwestern Pennsylvania."
        subheadline={
          <p>
            Riverview Park consists of 259 acres of sprawling forested hills,
            hiking trails, interesting geology, and community spaces. Whether it
            be catching a public lecture at the Allegheny Observatory, spreading
            out a blanket to watch a movie during Movie in the Park, or tackling
            the grueling park loop run, there’s a little something for everyone.
          </p>
        }
        // cta={
        //   <Link href="#">
        //     See how it works <ArrowNarrowRightIcon />
        //   </Link>
        // }
        features={
          <>
            <FeatureThreeColumnWithDemos
              href="/plan-your-visit"
              demo={
                <Screenshot wallpaper="brown" placement="bottom-left">
                  <img
                    src="https://images.unsplash.com/photo-1701457916764-7cc7c990b37a?q=80&w=1750&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Plan Your Visit at Riverview Park"
                    className="size-full object-cover"
                    width={1750}
                    height={1167}
                  />
                </Screenshot>
              }
              headline="Plan Your Visit"
              subheadline={
                <p>
                  The park has a variety of facilities, including a playground,
                  a picnic area, and a dog park.
                </p>
              }
            />
            <FeatureThreeColumnWithDemos
              href="/nature"
              demo={
                <Screenshot wallpaper="green" placement="bottom-right">
                  <img
                    src="https://images.unsplash.com/photo-1542202229-7d93c33f5d07?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Nature at Riverview Park"
                    className="size-full object-cover"
                    width={1740}
                    height={1160}
                  />
                </Screenshot>
              }
              headline="Immerse in nature"
              subheadline={
                <p>
                  Riverview Park is home to a variety of wildlife, including
                  deer, squirrels, and birds.
                </p>
              }
            />
            <FeatureThreeColumnWithDemos
              href="/community"
              demo={
                <Screenshot wallpaper="purple" placement="top-left">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1681885032909-8d645ac23be4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Arts and community at Riverview Park"
                    className="size-full object-cover"
                    width={1740}
                    height={1160}
                  />
                </Screenshot>
              }
              headline="Arts, Community, and Events"
              subheadline={
                <p>
                  The park hosts a variety of events, including public lectures
                  at the Allegheny Observatory, Movie in the Park, and the
                  annual Riverview Park Run.
                </p>
              }
            />
          </>
        }
      />

      {/* FAQs */}
      <FAQsTwoColumnAccordion id="faqs" headline="Questions & Answers">
        <Faq
          id="faq-1"
          question="Can I bring my dog?"
          answer="Yes, but they must be on a leash. There are two dog parks behind the Observatory, one for large dogs and one for small dogs."
        />
      </FAQsTwoColumnAccordion>

      {/* Call To Action */}
      {/* <CallToActionSimple
        id="call-to-action"
        headline="Ready to make customer support feel simple again?"
        subheadline={
          <p>
            Join hundreds of teams using Oatmeal to deliver faster, friendlier email support — using a massive network
            of low wage workers stationed around the globe
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#" size="lg">
              Start free trial
            </ButtonLink>

            <PlainButtonLink href="#" size="lg">
              Book a demo <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      /> */}
    </>
  );
}
