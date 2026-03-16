import type { Route } from "./+types/home";
import { CaptionedImage } from "../components/elements/captioned-image";
import { Screenshot } from "../components/elements/screenshot";
import {
  FAQsTwoColumnAccordion,
  Faq,
} from "../components/sections/faqs-two-column-accordion";
import {
  FeatureThreeColumnWithDemos,
  Features,
} from "../components/sections/features-three-column-with-demos";
import { HeroWithDemoOnBackground } from "../components/sections/hero-with-demo-on-background";

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
          <CaptionedImage caption="Photo: Friends of the Observatory">
            <img
              src="https://images.squarespace-cdn.com/content/v1/64d182ccdbe1c3217d5eaa4d/5355838a-51d0-4b19-b8d7-41c802d99912/Facebook+observatory.jpg"
              alt="Allegheny Observatory at Riverview Park"
              className="size-full object-cover"
              width={1920}
              height={1080}
            />
          </CaptionedImage>
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
                  <CaptionedImage caption="Photo via Unsplash">
                    <img
                      src="https://images.unsplash.com/photo-1701457916764-7cc7c990b37a?q=80&w=1750&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Plan Your Visit at Riverview Park"
                      className="size-full object-cover"
                      width={1750}
                      height={1167}
                    />
                  </CaptionedImage>
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
                  <CaptionedImage caption="Photo via Unsplash">
                    <img
                      src="https://images.unsplash.com/photo-1542202229-7d93c33f5d07?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Nature at Riverview Park"
                      className="size-full object-cover"
                      width={1740}
                      height={1160}
                    />
                  </CaptionedImage>
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
            {/* <FeatureThreeColumnWithDemos
              href="/community"
              demo={
                <Screenshot wallpaper="purple" placement="top-left">
                  <CaptionedImage caption="Photo via Unsplash">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1681885032909-8d645ac23be4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Arts and community at Riverview Park"
                      className="size-full object-cover"
                      width={1740}
                      height={1160}
                    />
                  </CaptionedImage>
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
            /> */}
            <FeatureThreeColumnWithDemos
              href="/about"
              demo={
                <Screenshot wallpaper="purple" placement="top-left">
                  <CaptionedImage caption="Photo via Unsplash">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1681885032909-8d645ac23be4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="About the Riverview Park app"
                      className="size-full object-cover"
                      width={1740}
                      height={1160}
                    />
                  </CaptionedImage>
                </Screenshot>
              }
              headline="About the project"
              subheadline={
                <p>
                  Read about how this map was created, the tools and
                  technologies used, and the story behind the project.
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
        <Faq
          id="faq-2"
          question="What are the park hours?"
          answer="Riverview Park is open daily from dawn to dusk. The pool and activity building have their own seasonal hours."
        />
        <Faq
          id="faq-3"
          question="Is there parking available?"
          answer="Yes, there are free parking lots near the swimming pool and the Allegheny Observatory. Street parking is also available along many of the park roads."
        />
        <Faq
          id="faq-4"
          question="Are the trails accessible?"
          answer="The paved park roads and some paths near the playground and picnic areas are accessible. However, many of the hiking trails are unpaved with steep and uneven terrain."
        />
        <Faq
          id="faq-5"
          question="Can I reserve a picnic shelter?"
          answer="Yes, picnic shelters can be reserved through the City of Pittsburgh Parks and Recreation department. Reservations are recommended for weekends and holidays."
        />
        <Faq
          id="faq-6"
          question="Is there a restroom?"
          answer="Yes, restrooms are available near the swimming pool and the activity building. They are typically open during park operating hours in the warmer months."
        />
        <Faq
          id="faq-7"
          question="Can I bike in the park?"
          answer="Biking is allowed on the paved park roads and on the trails. No dirtbikes are allowed, but e-bikes are permitted, as long as they are classified as Class 1 or Class 2."
        />
        <Faq
          id="faq-8"
          question="How do I get to the Allegheny Observatory?"
          answer="The Observatory is located at 159 Riverview Avenue. Follow the main park road past the Visitor' Center and continue uphill. Free parking is available in the lot next to the building."
        />
      </FAQsTwoColumnAccordion>
    </>
  );
}
