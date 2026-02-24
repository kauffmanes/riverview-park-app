// Augment React's JSX types to support the Invoker Commands API
// used by @tailwindplus/elements (command / commandfor attributes on buttons)
import "react";

declare module "react" {
  interface ButtonHTMLAttributes<T> {
    command?: string;
    commandfor?: string;
  }
}
