# vite-react-supabase-starter

Opinionated starter template for building apps with Vite, React, and Supabase.

## Tech Stack

| Category | Tech |
|---|---|
| **Framework** | React 19 + TypeScript |
| **Build** | Vite 6 (SWC) |
| **Styling** | Tailwind CSS v4 |
| **Components** | shadcn/ui (New York style) |
| **Icons** | Lucide React |
| **Routing** | React Router v7 |
| **Data Fetching** | TanStack React Query v5 |
| **Forms** | React Hook Form + Zod v4 |
| **Backend** | Supabase (Auth, Postgres, RLS) |
| **Toasts** | Sonner |

## What's Included

- Supabase client with env validation
- Auth context with proper `User` typing (no `any`)
- Protected route wrapper
- Login page with shadcn/ui components (email/password + register)
- React Query provider
- Path aliases (`@/` -> `src/`)
- ESLint with `no-explicit-any` set to error
- Base shadcn/ui components: Button, Input, Label, Card, Sonner

## Getting Started

```bash
# clone
git clone https://github.com/thatmike1/vite-react-supabase-starter.git my-app
cd my-app

# install
npm install

# configure supabase
cp .env.sample .env
# edit .env with your Supabase project URL and anon key

# run
npm run dev
```

## Project Structure

```
src/
  components/ui/     # shadcn/ui components
  context/           # auth context
  hooks/             # use-auth, use-sign-out
  lib/               # query client, utils (cn)
  pages/             # login, layout
  protected-route.tsx
  supabase-client.ts
  App.tsx
  main.tsx
```

## Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

## Conventions

- Kebab-case file names (`use-auth.ts`, not `useAuth.ts`)
- `.ts` for hooks/utils, `.tsx` only when returning JSX
- No `any` types (eslint will error)

## License

MIT
