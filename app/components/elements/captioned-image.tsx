import { clsx } from "clsx/lite";
import type { ComponentProps, ReactNode } from "react";

export function CaptionedImage({
  caption,
  children,
  className,
  ...props
}: {
  caption: ReactNode;
} & ComponentProps<"figure">) {
  return (
    <figure className={clsx("relative", className)} {...props}>
      {children}
      <figcaption className="absolute bottom-0 right-0 bg-black/50 px-2 py-1 text-xs text-white/80">
        {caption}
      </figcaption>
    </figure>
  );
}
