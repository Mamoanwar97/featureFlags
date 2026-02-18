# Feature Flags Dashboard

A React-based UI for viewing and managing feature flags across environments.

## Features

- **Overview cards** — at-a-glance counts of total, enabled, and disabled flags, plus a breakdown by environment
- **Feature flags table** — sortable table listing all flags with their name, environment, status, and creation date
- **Filtering** — filter flags by status (enabled / disabled) and by environment (development, staging, production)
- **Toggle flags** — enable or disable any flag directly from the table

## Tech Stack

| Layer | Library |
|---|---|
| UI framework | React 19 + TypeScript |
| Build tool | Vite |
| Data fetching | TanStack Query v5 |
| Table | TanStack Table v8 |
| Styling | Tailwind CSS v4 |
| Components | Radix UI / shadcn |
| Toasts | Sonner |
| API mocking | MSW v2 |

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start the dev server (with MSW mock API)
npm run dev
```

The app will be available at `http://localhost:5173`.

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── apis/            # Fetch functions (list flags, toggle flag)
├── featuresTable/   # Table component, column definitions, filters, cells
├── mocks/           # MSW handlers and fixture data
├── queries/         # TanStack Query hooks
├── types/           # Shared TypeScript types
├── components/ui/   # Reusable UI primitives (shadcn)
├── overview-cards   # Summary stat cards
└── App.tsx          # Root component
```

## Mock API

The app uses [MSW](https://mswjs.io/) to intercept API calls during development — no backend needed.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/feature-flags` | List all feature flags |
| PUT | `/api/feature-flags/:id` | Toggle a flag's status |

Fixture data lives in `src/mocks/fixtures.ts` and can be edited to add or change flags.
