import { clsx } from "clsx/lite";
import type { ComponentProps, ReactNode } from "react";
import { Link } from "react-router";
import { Section } from "../elements/section";

export function FeatureThreeColumnWithDemos({
  demo,
  headline,
  subheadline,
  href,
  className,
  ...props
}: {
  demo: ReactNode;
  headline: ReactNode;
  subheadline: ReactNode;
  href?: string;
} & ComponentProps<"div">) {
  const baseClasses = clsx(
    "block rounded-lg bg-olive-950/2.5 p-2 dark:bg-white/5 transition-colors",
    href && "hover:bg-olive-950/6 dark:hover:bg-white/10",
    className
  );
  const content = (
    <>
      <div className="relative overflow-hidden rounded-sm dark:after:absolute dark:after:inset-0 dark:after:rounded-sm dark:after:outline-1 dark:after:-outline-offset-1 dark:after:outline-white/10">
        {demo}
      </div>
      <div className="p-6 sm:p-10 lg:p-6">
        <h3 className="text-base/8 font-medium text-olive-950 dark:text-white">{headline}</h3>
        <div className="mt-2 flex flex-col gap-4 text-sm/7 text-olive-700 dark:text-olive-400">{subheadline}</div>
      </div>
    </>
  );
  if (href) {
    return <Link to={href} className={baseClasses}>{content}</Link>;
  }
  return (
    <div className={baseClasses} {...props}>
      {content}
    </div>
  );
}

export function Features({
  features,
  ...props
}: { features: ReactNode } & Omit<ComponentProps<typeof Section>, "children">) {
  return (
    <Section {...props}>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">{features}</div>
    </Section>
  );
}
