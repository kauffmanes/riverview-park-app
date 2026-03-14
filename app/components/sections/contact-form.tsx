import { useFetcher } from "react-router";
import { Button } from "../elements/button";

const inputStyles =
  "w-full rounded-lg border border-olive-300 bg-white px-4 py-2.5 text-base text-olive-950 placeholder:text-olive-400 focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-500/20 dark:border-olive-700 dark:bg-olive-900 dark:text-white dark:placeholder:text-olive-500 dark:focus:border-olive-400 dark:focus:ring-olive-400/20";

const labelStyles = "block text-sm font-medium text-olive-950 dark:text-white";

export function ContactForm() {
  const fetcher = useFetcher<{
    success: boolean;
    errors: Record<string, string>;
  }>();
  const isSubmitting = fetcher.state === "submitting";
  const data = fetcher.data;

  if (data?.success) {
    return (
      <div className="flex flex-col gap-4">
        <h3 className="font-display text-lg font-semibold">Get in Touch</h3>
        <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
          <p className="text-base font-medium text-green-800 dark:text-green-200">
            Thanks for reaching out! We'll get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <fetcher.Form method="post" action="/contact" className="flex flex-col gap-4">
      <h3 className="font-display text-lg font-semibold">Get in Touch</h3>
      {data?.errors?.form && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm dark:border-red-800 dark:bg-red-950">
          <p className="text-sm text-red-700 dark:text-red-300">
            {data.errors.form}
          </p>
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-name" className={labelStyles}>
          Name
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          placeholder="Your name"
          className={inputStyles}
        />
        {data?.errors?.name && (
          <p className="text-sm text-red-600 dark:text-red-400">
            {data.errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-email" className={labelStyles}>
          Email
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          placeholder="you@example.com"
          className={inputStyles}
        />
        {data?.errors?.email && (
          <p className="text-sm text-red-600 dark:text-red-400">
            {data.errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className={labelStyles}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="How can we help?"
          className={inputStyles}
        />
        {data?.errors?.message && (
          <p className="text-sm text-red-600 dark:text-red-400">
            {data.errors.message}
          </p>
        )}
      </div>

      <div>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </fetcher.Form>
  );
}
