import { clsx } from "clsx/lite";
import { type ComponentProps, type ReactNode, useState } from "react";
import { Container } from "../elements/container";
import { Subheading } from "../elements/subheading";
import { Text } from "../elements/text";

type CitationEntry = {
  id: string;
  label: string;
  url?: string;
};

export function CreditsAndCitations({
  headline = "Credits and Citations",
  description,
  contentCitations,
  attributionCitations,
  className,
  ...props
}: {
  headline?: ReactNode;
  description?: ReactNode;
  contentCitations?: CitationEntry[];
  attributionCitations?: CitationEntry[];
} & ComponentProps<"section">) {
  const [activeTab, setActiveTab] = useState<"content" | "attribution">(
    "content",
  );

  const activeCitations =
    activeTab === "content" ? contentCitations : attributionCitations;

  return (
    <section
      className={clsx(
        "bg-olive-200/50 py-16 dark:bg-olive-900/50",
        className,
      )}
      {...props}
    >
      <Container>
        <div className="flex flex-col gap-6">
          <Subheading>{headline}</Subheading>
          {description && (
            <Text className="max-w-3xl text-pretty">{description}</Text>
          )}
        </div>

        <div className="mt-10">
          {/* Tabs */}
          <div className="flex items-center gap-6 border-b border-olive-950/10 dark:border-white/10">
            <button
              type="button"
              onClick={() => setActiveTab("content")}
              className={clsx(
                "pb-3 text-sm font-medium transition-colors",
                activeTab === "content"
                  ? "border-b-2 border-olive-950 text-olive-950 dark:border-white dark:text-white"
                  : "text-olive-500 hover:text-olive-700 dark:text-olive-400 dark:hover:text-olive-200",
              )}
            >
              Content
            </button>
            <span className="text-olive-300 dark:text-olive-600">|</span>
            <button
              type="button"
              onClick={() => setActiveTab("attribution")}
              className={clsx(
                "pb-3 text-sm font-medium transition-colors",
                activeTab === "attribution"
                  ? "border-b-2 border-olive-950 text-olive-950 dark:border-white dark:text-white"
                  : "text-olive-500 hover:text-olive-700 dark:text-olive-400 dark:hover:text-olive-200",
              )}
            >
              Attribution
            </button>
          </div>

          {/* Citation list */}
          <div className="mt-4">
            {activeCitations && activeCitations.length > 0 ? (
              <ol className="list-decimal space-y-2 pl-6 text-sm/7 text-olive-700 marker:text-olive-400 dark:text-olive-400 dark:marker:text-olive-600">
                {activeCitations.map((citation) => (
                  <li key={citation.id}>
                    {citation.url ? (
                      <a
                        href={citation.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-olive-300 underline-offset-2 transition-colors hover:text-olive-950 hover:decoration-olive-500 dark:decoration-olive-600 dark:hover:text-white dark:hover:decoration-olive-400"
                      >
                        {citation.label}
                      </a>
                    ) : (
                      citation.label
                    )}
                  </li>
                ))}
              </ol>
            ) : (
              <Text className="text-sm italic">No citations yet.</Text>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
