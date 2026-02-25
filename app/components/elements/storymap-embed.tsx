import { useEffect, useId } from "react";
import { clsx } from "clsx/lite";

declare global {
  interface Window {
    storyMapsEmbedConfig?: {
      storyId: string;
      rootNode: string;
    };
  }
}

export function StoryMapEmbed({
  storyId,
  className,
}: {
  storyId: string;
  className?: string;
}) {
  const id = useId();
  const rootClass = `storymaps-root-${id.replace(/:/g, "")}`;

  useEffect(() => {
    window.storyMapsEmbedConfig = {
      storyId,
      rootNode: `.${rootClass}`,
    };

    const script = document.createElement("script");
    script.src = "https://storymaps.arcgis.com/embed/view";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      delete window.storyMapsEmbedConfig;
    };
  }, [storyId, rootClass]);

  return (
    <div
      className={clsx(rootClass, "min-h-screen w-full", className)}
    />
  );
}
