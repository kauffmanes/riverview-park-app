import type { Route } from "./+types/home";
import { ButtonLink, PlainButtonLink, SoftButtonLink } from "../components/elements/button";
import { Link } from "../components/elements/link";
import { Screenshot } from "../components/elements/screenshot";
import { ArrowNarrowRightIcon } from "../components/icons/arrow-narrow-right-icon";
import { ChevronIcon } from "../components/icons/chevron-icon";
import { CallToActionSimple } from "../components/sections/call-to-action-simple";
import { FAQsTwoColumnAccordion, Faq } from "../components/sections/faqs-two-column-accordion";
import { FeatureThreeColumnWithDemos, Features } from "../components/sections/features-three-column-with-demos";
import { HeroWithDemoOnBackground } from "../components/sections/hero-with-demo-on-background";
import { Plan, PricingMultiTier } from "../components/sections/pricing-multi-tier";
import { TestimonialLargeQuote } from "../components/sections/testimonial-with-large-quote";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Riverview Park App" },
    { name: "description", content: "Customer support that feels like a conversation." },
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
          <p>
            A local's guide to Pittsburgh's most overlooked park.
          </p>
        }
        demo={
          <>
            <img
              className="bg-white/75 md:hidden dark:hidden"
              src="https://assets.tailwindplus.com/screenshots/1.webp?top=900"
              alt=""
              width="3440"
              height="1500"
            />
            <img
              className="bg-black/75 not-dark:hidden md:hidden"
              src="https://assets.tailwindplus.com/screenshots/1.webp?top=900&color=olive"
              alt=""
              width="3440"
              height="1500"
            />
            <img
              className="bg-white/75 max-md:hidden lg:hidden dark:hidden"
              src="https://assets.tailwindplus.com/screenshots/1.webp?top=1200"
              alt=""
              width="3440"
              height="1500"
            />
            <img
              className="bg-black/75 not-dark:hidden max-md:hidden lg:hidden"
              src="https://assets.tailwindplus.com/screenshots/1.webp?top=1200&color=olive"
              alt=""
              width="3440"
              height="1500"
            />
            <img
              className="bg-white/75 max-lg:hidden dark:hidden"
              src="https://assets.tailwindplus.com/screenshots/1.webp?top=1500"
              alt=""
              width="3440"
              height="1500"
            />
            <img
              className="bg-black/75 not-dark:hidden max-lg:hidden"
              src="https://assets.tailwindplus.com/screenshots/1.webp?top=1500&color=olive"
              alt=""
              width="3440"
              height="1500"
            />
          </>
        }
      />

      {/* Features */}
      <Features
        id="features"
        headline="Everything you need to deliver personal, organized, and delightful support."
        subheadline={
          <p>
            Work smarter, reply faster, and keep every customer conversation right where it belongs — in one simple
            inbox, where you can ignore it.
          </p>
        }
        cta={
          <Link href="#">
            See how it works <ArrowNarrowRightIcon />
          </Link>
        }
        features={
          <>
            <FeatureThreeColumnWithDemos
              demo={
                <Screenshot wallpaper="blue" placement="bottom-right">
                  <img
                    src="https://assets.tailwindplus.com/screenshots/1.webp?left=1200&top=736"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1200}
                    height={736}
                  />
                  <img
                    src="https://assets.tailwindplus.com/screenshots/1.webp?left=1200&top=736&color=olive"
                    alt=""
                    width={1200}
                    height={736}
                    className="bg-black/75 not-dark:hidden sm:hidden"
                  />
                  <img
                    src="https://assets.tailwindplus.com/screenshots/1.webp?left=1800&top=736"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={736}
                  />
                  <img
                    src="https://assets.tailwindplus.com/screenshots/1.webp?left=1800&top=736&color=olive"
                    alt=""
                    width={1800}
                    height={736}
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                  />
                  <img
                    src="https://assets.tailwindplus.com/screenshots/1.webp?left=1200&top=736"
                    alt=""
                    className="bg-white/75 max-lg:hidden dark:hidden"
                    width={1200}
                    height={736}
                  />
                  <img
                    src="https://assets.tailwindplus.com/screenshots/1.webp?left=1200&top=736&color=olive"
                    alt=""
                    width={1200}
                    height={736}
                    className="bg-black/75 not-dark:hidden max-lg:hidden"
                  />
                </Screenshot>
              }
              headline="Shared Inbox"
              subheadline={<p>Manage support emails together in real time — no more support email hot potato.</p>}
            />
            <FeatureThreeColumnWithDemos
              demo={
                <Screenshot wallpaper="purple" placement="top-left">
                  <img
                    src="https://assets.tailwindplus.com/screenshots/1.webp?right=1200&bottom=736"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1200}
                    height={736}
                  />
                  <img
                    src="https://assets.tailwindplus.com/screenshots/1.webp?right=1200&bottom=736&color=olive"
                    alt=""
                    width={1200}
                    height={736}
                    className="bg-black/75 not-dark:hidden sm:hidden"
                  />
                  <img
                    src="https://assets.tailwindplus.com/screenshots/1.webp?right=1800&bottom=736"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={736}
                  />
                  <img
                    src="https://assets.tailwindplus.com/screenshots/1.webp?right=1800&bottom=736&color=olive"
                    alt=""
                    width={1800}
                    height={736}
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                  />
                  <img
                    src="https://assets.tailwindplus.com/screenshots/1.webp?right=1200&bottom=736"
                    alt=""
                    className="bg-white/75 max-lg:hidden dark:hidden"
                    width={1200}
                    height={736}
                  />
                  <img
                    src="https://assets.tailwindplus.com/screenshots/1.webp?right=1200&bottom=736&color=olive"
                    alt=""
                    width={1200}
                    height={736}
                    className="bg-black/75 not-dark:hidden max-lg:hidden"
                  />
                </Screenshot>
              }
              headline="Collision Detection"
              subheadline={<p>See when a teammate is replying before you hit send. Goodbye duplicate replies.</p>}
            />
            <FeatureThreeColumnWithDemos
              demo={
                <Screenshot wallpaper="brown" placement="bottom-left">
                  <img
                    src="https://assets.tailwindplus.com/screenshots/1.webp?right=1200&top=736"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1200}
                    height={736}
                  />
                  <img
                    src="https://assets.tailwindplus.com/screenshots/1.webp?right=1200&top=736&color=olive"
                    alt=""
                    width={1200}
                    height={736}
                    className="bg-black/75 not-dark:hidden sm:hidden"
                  />
                  <img
                    src="https://assets.tailwindplus.com/screenshots/1.webp?right=1800&top=736"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={736}
                  />
                  <img
                    src="https://assets.tailwindplus.com/screenshots/1.webp?right=1800&top=736&color=olive"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={736}
                  />
                  <img
                    src="https://assets.tailwindplus.com/screenshots/1.webp?right=1200&top=736"
                    alt=""
                    className="bg-white/75 max-lg:hidden dark:hidden"
                    width={1200}
                    height={736}
                  />
                  <img
                    src="https://assets.tailwindplus.com/screenshots/1.webp?right=1200&top=736&color=olive"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-lg:hidden"
                    width={1200}
                    height={736}
                  />
                </Screenshot>
              }
              headline="Inbox Agent"
              subheadline={<p>Get valuable context without having to read through your customer's angry emails.</p>}
            />
          </>
        }
      />

      {/* Testimonial */}
      <TestimonialLargeQuote
        id="testimonial"
        quote={
          <p>
            Oatmeal has completely transformed our customer support operations. The blend of AI efficiency and human
            empathy has allowed us to provide exceptional service while significantly reducing costs.
          </p>
        }
        img={
          <img
            src="https://assets.tailwindplus.com/avatars/10.webp?size=160"
            alt=""
            className="not-dark:bg-white/75 dark:bg-black/75"
            width={160}
            height={160}
          />
        }
        name="Jordan Rogers"
        byline="Founder at Anomaly"
      />

      {/* FAQs */}
      <FAQsTwoColumnAccordion id="faqs" headline="Questions & Answers">
        <Faq
          id="faq-1"
          question="Do I need a credit card to start the free trial?"
          answer="Yes, but don't worry, you won't be charged until the trial period is over. We won't send you an email reminding you when this happens because we are really hoping you'll forget and we can keep charging you until your cards expires"
        />
        <Faq
          id="faq-2"
          question="Can my whole team use the same inbox?"
          answer="Yes, the more the merrier! Oatmeal works best when your entire company has access. We will charge you per additional seat, but we won't tell you about this until you get your invoice."
        />
        <Faq
          id="faq-3"
          question="Is the AI agent actually a bunch of people in India?"
          answer="Not just India! We have people in lots of countries around the world pretending to be an AI, including some that are currently under sanctions, so we can't legally mention them here."
        />
        <Faq
          id="faq-4"
          question="Does Oatmeal replace my email client?"
          answer="Absolutely. The idea is that we transition you away from email entirely, so you become completely dependent on our service. Like a parasite living off a host."
        />
      </FAQsTwoColumnAccordion>

      {/* Pricing */}
      <PricingMultiTier
        id="pricing"
        headline="Pricing to fit your business needs."
        plans={
          <>
            <Plan
              name="Starter"
              price="$12"
              period="/mo"
              subheadline={<p>Small teams getting started with shared inboxes</p>}
              features={[
                "Shared inbox for up to 2 mailboxes",
                "Tagging & assignment",
                "Private notes",
                "Automatic replies",
                "Email support",
              ]}
              cta={
                <SoftButtonLink href="#" size="lg">
                  Start free trial
                </SoftButtonLink>
              }
            />
            <Plan
              name="Growth"
              price="$49"
              period="/mo"
              subheadline={<p>Growing teams needing collaboration and insights</p>}
              badge="Most popular"
              features={[
                "Everything in Starter",
                "Inbox Agent",
                "Unlimited mailboxes",
                "Collision detection",
                "Snippets and templates",
                "Reporting dashboard",
                "Slack integration",
              ]}
              cta={
                <ButtonLink href="#" size="lg">
                  Start free trial
                </ButtonLink>
              }
            />
            <Plan
              name="Pro"
              price="$299"
              period="/mo"
              subheadline={<p>Support-focused organizations and larger teams</p>}
              features={[
                "Everything in Growth",
                "Custom roles & permissions",
                "Automation engine",
                "API access",
                "SLA tracking",
                "SSO support",
                "SOC 2 compliance",
              ]}
              cta={
                <SoftButtonLink href="#" size="lg">
                  Start free trial
                </SoftButtonLink>
              }
            />
          </>
        }
      />

      {/* Call To Action */}
      <CallToActionSimple
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
      />
    </>
  );
}
