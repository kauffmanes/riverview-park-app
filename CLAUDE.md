# riverview-park-app

A full-stack React application built with React Router v7 (SSR), TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework**: React Router v7 (`react-router` 7.12.0) with SSR enabled
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` Vite plugin)
- **Build tool**: Vite 7
- **Runtime**: Node 20
- **Package manager**: npm

## Commands

```bash
npm run dev        # Start dev server with HMR at http://localhost:5173
npm run build      # Production build
npm run start      # Serve production build (after build)
npm run typecheck  # Run react-router typegen + tsc
```

## Project Structure

```
app/
  root.tsx          # App shell, global layout
  app.css           # Global styles (Tailwind entry point)
  routes.ts         # Route config (file-based via @react-router/dev/routes)
  routes/
    home.tsx        # Index route
  welcome/
    welcome.tsx     # Welcome component
    logo-dark.svg
    logo-light.svg
react-router.config.ts   # SSR config
vite.config.ts           # Vite + Tailwind + tsconfig paths
Dockerfile               # Multi-stage Docker build
```

## Routing

Routes are defined in `app/routes.ts` using the `RouteConfig` API. SSR is enabled by default (`ssr: true` in `react-router.config.ts`).

## Styling

Tailwind CSS v4 is configured as a Vite plugin — there is no `tailwind.config.js`. Import `app/app.css` in `root.tsx` to apply styles globally.

## Docker

Multi-stage build producing a minimal production image:

```bash
docker build -t riverview-park-app .
docker run -p 3000:3000 riverview-park-app
```

## TypeScript

Path aliases are resolved via `vite-tsconfig-paths`. React Router generates route types automatically — run `npm run typecheck` to regenerate after adding routes.
