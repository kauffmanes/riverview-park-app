import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("nature", "routes/nature.tsx"),
  route("community", "routes/community.tsx"),
  route("facilities", "routes/facilities.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
  route("*", "routes/404.tsx"),
] satisfies RouteConfig;
