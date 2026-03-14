import { Form, useActionData, useNavigation } from "react-router";
import type { Route } from "./+types/contact";
import { Container } from "../components/elements/container";
import { Subheading } from "../components/elements/subheading";
import { Text } from "../components/elements/text";
import { Button } from "../components/elements/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact — Riverview Park" },
    {
      name: "description",
      content: "Get in touch with us about Riverview Park.",
    },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Name is required.";
  if (!email) errors.email = "Email is required.";
  if (!message) errors.message = "Message is required.";

  if (Object.keys(errors).length > 0) {
    return { success: false as const, errors };
  }

  const sheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!sheetUrl) {
    console.error("GOOGLE_SHEET_WEBHOOK_URL is not configured");
    return {
      success: false as const,
      errors: { form: "Contact form is not configured. Please try again later." },
    };
  }

  const payload = {
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  };

  console.log("[contact] Submitting to Google Sheet:", JSON.stringify(payload));
  console.log("[contact] Webhook URL:", sheetUrl.slice(0, 60) + "...");

  try {
    const response = await fetch(sheetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const responseText = await response.text();
    console.log("[contact] Response status:", response.status);
    console.log("[contact] Response body:", responseText);

    if (!response.ok) {
      console.error("[contact] Google Sheet returned non-OK status:", response.status);
      return {
        success: false as const,
        errors: { form: "Failed to submit. Please try again later." },
      };
    }
  } catch (error) {
    console.error("[contact] Failed to submit contact form:", error);
    return {
      success: false as const,
      errors: { form: "Something went wrong. Please try again later." },
    };
  }

  console.log("[contact] Submission successful");
  return { success: true as const, errors: {} };
}

const inputStyles =
  "w-full rounded-lg border border-olive-300 bg-white px-4 py-2.5 text-base text-olive-950 placeholder:text-olive-400 focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-500/20 dark:border-olive-700 dark:bg-olive-900 dark:text-white dark:placeholder:text-olive-500 dark:focus:border-olive-400 dark:focus:ring-olive-400/20";

const labelStyles =
  "block text-sm font-medium text-olive-950 dark:text-white";

export default function Contact() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <section className="py-16">
      <Container className="flex flex-col gap-10 sm:gap-16">
        <div className="flex max-w-2xl flex-col gap-6">
          <Subheading>Contact Us</Subheading>
          <Text className="text-pretty">
            <p>
              Have a question or want to share something about Riverview Park?
              Fill out the form below and we'll get back to you.
            </p>
          </Text>
        </div>

        <div className="max-w-xl">
          {actionData?.success ? (
            <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
              <p className="text-base font-medium text-green-800 dark:text-green-200">
                Thanks for reaching out! We'll get back to you soon.
              </p>
            </div>
          ) : (
            <Form method="post" className="flex flex-col gap-6">
              {actionData?.errors?.form && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
                  <p className="text-sm text-red-700 dark:text-red-300">
                    {actionData.errors.form}
                  </p>
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className={labelStyles}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className={inputStyles}
                />
                {actionData?.errors?.name && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {actionData.errors.name}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className={labelStyles}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className={inputStyles}
                />
                {actionData?.errors?.email && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {actionData.errors.email}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className={labelStyles}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                  className={inputStyles}
                />
                {actionData?.errors?.message && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {actionData.errors.message}
                  </p>
                )}
              </div>

              <div>
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </Form>
          )}
        </div>
      </Container>
    </section>
  );
}
