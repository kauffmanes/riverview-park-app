import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { Main } from "./components/elements/main";
import { ContactForm } from "./components/sections/contact-form";
import {
  FooterCategory,
  FooterLink,
  FooterWithLinkCategories,
} from "./components/sections/footer-with-link-categories";
import {
  NavbarLogo,
  NavbarWithLogoActionsAndCenteredLinks,
} from "./components/sections/navbar-with-logo-actions-and-centered-links";
import { NavbarLink } from "./components/sections/navbar-with-links-actions-and-centered-logo";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NavbarWithLogoActionsAndCenteredLinks
          id="navbar"
          links={
            <>
              <NavbarLink href="/plan-your-visit">Plan Your Visit</NavbarLink>
              <NavbarLink href="/nature">Nature</NavbarLink>
              <NavbarLink href="/community">Community</NavbarLink>
            </>
          }
          logo={
            <NavbarLogo href="/">
              <strong>Riverview Park</strong>
            </NavbarLogo>
          }
          actions={<></>}
        />

        <Main>{children}</Main>

        <FooterWithLinkCategories
          id="footer"
          links={
            <>
              <FooterCategory title="Explore">
                <FooterLink href="/plan-your-visit">Plan Your Visit</FooterLink>
                <FooterLink href="/nature">Nature</FooterLink>
                <FooterLink href="/community">Community</FooterLink>
              </FooterCategory>
            </>
          }
          aside={<ContactForm />}
          fineprint={`© ${new Date().getFullYear()} Emily Kauffman`}
        />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
