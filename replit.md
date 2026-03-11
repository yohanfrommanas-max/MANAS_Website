# Manas Marketing Website

## Overview
A premium marketing website for Manas, a mental wellness app that helps users build sustainable habits across four core pillars: Focus (brain training), Calm (breathwork), Sleep, and Journal.

## Tech Stack
- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion (animations)
- Wouter (routing)
- React Hook Form + Zod (form validation)
- Lucide React + React Icons (icons)

## Architecture
This is a **marketing-only** frontend website. No database, no authentication, no backend APIs.
The existing Express server serves the frontend via Vite.

## Pages
- `/` — Home page (hero with app mockup, pillars, benefits with app screenshot, how it works, testimonials, CTA)
- `/features` — Features hero with app screenshot, detailed feature breakdown, FAQ and Premium section
- `/about` — Mission, vision, story (with logo-with-name image), values, team
- `/contact` — Contact form, waitlist signup, social links

## Brand Assets
All images imported via `@assets/` alias (Vite), NOT from `attached_assets/` paths.
- `@assets/manas_logo_1773184806883.jpg` — Logo icon (navbar, footer, about hero, home CTA)
- `@assets/Manas_Logo_with_name_1773184806884.jpg` — Logo with brand name text (about "Our Story")
- `@assets/Manas_app_1773184806880.jpg` — App on iPhone mockup (home hero)
- `@assets/app_manas_1773184806887.jpg` — App screenshot with UI (home "Why Manas", features hero)

## Brand Colors (from PRD)
- Primary Background: `#0D0F14` / `#12151C` (midnight navy)
- Lavender: `#A78BFA` (brain training, primary accent)
- Sage Green: `#6EE7B7` (breathwork, calm)
- Deep Indigo: `#4338CA` (sleep) — named `manas-indigo` to avoid Tailwind conflict
- Dusty Rose: `#F9A8D4` (journal) — named `manas-rose` to avoid Tailwind conflict
- Off-White: `#F1F0EB` (primary text)
- Misty Gray: `#6B7280` (secondary text)

## Typography
- Headers: SF Pro / Apple system font stack (via font-serif class)
- Body: Inter (sans-serif)

## User Preferences
- No em dashes (long dashes) in content — use commas, periods, or colons instead

## Key Files
- `client/src/App.tsx` — Router with all pages
- `client/src/components/navbar.tsx` — Fixed navbar with logo + mobile menu
- `client/src/components/footer.tsx` — Site footer with logo
- `client/src/components/section-heading.tsx` — Reusable section heading (supports left/center align)
- `client/src/components/seo-head.tsx` — Per-page SEO meta tags
- `client/src/pages/home.tsx` — Home page
- `client/src/pages/features.tsx` — Features page
- `client/src/pages/about.tsx` — About page
- `client/src/pages/contact.tsx` — Contact page
- `client/src/pages/not-found.tsx` — 404 page

## Running
`npm run dev` starts Express + Vite dev server.
