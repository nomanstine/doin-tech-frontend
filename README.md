This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Architecture
```
src/
├── app/            routes only: wire content to sections
│   ├── (landing)/  header + footer chrome: / (Home)
│   ├── (auth)/       bare blue layout: /login, /register
│   └── not-found.tsx 404 page (uses SiteShell for the same header/footer)
├── styles/         tokens.css = design tokens (colors, spacing, radius, shadow, layout)
├── components/
│   ├── ui/         primitives: Typography, Button, Chip, Container, SectionHeading, Stat, CheckList,
│   │               FloatingCard, ProgressBar, Rating, AvatarStack, AssetImage, StageLayer, Ornament
│   ├── layout/     SiteShell (header + footer), Header, Footer, Logo, NavLink
│   ├── forms/      SearchBar, NewsletterForm, TextField
│   ├── auth/       AuthPage (Login + Register), AuthForm, AuthShowcase, SocialLogin
│   ├── cards/      CourseCard, CategoryCard, TestimonialCard, MetricCard,
│   │               ProgressCard, StudentsCard, CategoryStatsCard
│   └── sections/   Hero, PartnersSection, FeaturedCoursesSection, CategoriesSection,
│                   ProgramFeaturesSection, CreatorCtaSection, TestimonialsSection, NotFoundSection
├── content/        copy + data (no JSX): home/*.ts, navigation.ts, footer.ts
├── assets/         images.ts registry of asset paths
├── types/          shared interfaces
└── lib/            cx() class joiner, cssVars() typed custom properties
```

## Conventions
- Every component = folder with `Name.tsx`, `Name.module.css`, `index.ts`. No Tailwind, no `@apply`, no inline style except CSS custom properties for dynamic values.
- Colors, spacing, radius and shadows come from `tokens.css` variables. Never hardcode them in a module.
- Text styles live once in `Typography.module.css`; other modules reuse them with `composes`.
- Placement of a component is its parent's job (passed via `className`), so components stay reusable.
- Sections receive content through props from `src/content`.

## Fonts
Poppins comes from `next/font/google`. Satoshi and Clash Display load from Fontshare in `layout.tsx`
(swap to `next/font/local` if you want to self-host).

## Responsive notes
The Figma file has desktop frames only. Below 900px the 3D ornaments hide, below 768px two of the three
hero floating cards hide and the centre nav is hidden (a mobile menu still needs a design).
The two program-feature photo compositions are fixed-size and stack under the text below 1280px,
shrinking with `zoom` on phones.

## Placeholders to replace
- Link targets in `content/navigation.ts`, `content/footer.ts`, tab and category hrefs are inferred from labels.
- The newsletter form posts to `/newsletter`, which does not exist yet.
- Auth forms post to `/api/auth/login` and `/api/auth/register`, and the social buttons link to `/auth/facebook` and `/auth/google`; none exist yet.
- Partner logos are the design's "Logoipsum" placeholders.