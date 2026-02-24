import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
  route("*", "routes/404.tsx"),
] satisfies RouteConfig;
