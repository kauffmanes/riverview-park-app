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
import { ButtonLink, PlainButtonLink } from "./components/elements/button";

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
              <NavbarLink href="/nature">Nature</NavbarLink>
              <NavbarLink href="/arts">Arts</NavbarLink>
              <NavbarLink href="/facilities">Facilities</NavbarLink>
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
          links={<></>
            //   <>
            //     <FooterCategory title="Product">
            //       <FooterLink href="#">Features</FooterLink>
            //       <FooterLink href="#">Integrations</FooterLink>
            //     </FooterCategory>
            //     <FooterCategory title="Company">
            //       <FooterLink href="/about">About</FooterLink>
            //       <FooterLink href="#">Careers</FooterLink>
            //       <FooterLink href="#">Blog</FooterLink>
            //       <FooterLink href="#">Press Kit</FooterLink>
            //     </FooterCategory>
            //     <FooterCategory title="Resources">
            //       <FooterLink href="#">Help Center</FooterLink>
            //       <FooterLink href="#">API Docs</FooterLink>
            //       <FooterLink href="#">Status</FooterLink>
            //       <FooterLink href="#">Contact</FooterLink>
            //     </FooterCategory>
            //     <FooterCategory title="Legal">
            //       <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            //       <FooterLink href="#">Terms of Service</FooterLink>
            //       <FooterLink href="#">Security</FooterLink>
            //     </FooterCategory>
            //     <FooterCategory title="Connect">
            //       <FooterLink href="https://x.com">X</FooterLink>
            //       <FooterLink href="https://github.com">GitHub</FooterLink>
            //       <FooterLink href="https://www.youtube.com">YouTube</FooterLink>
            //     </FooterCategory>
            //   </>
          }
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
