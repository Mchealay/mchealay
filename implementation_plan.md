# Software Engineer Portfolio — Next.js 15 Implementation Plan

## Overview

Build a modern, dark-mode-first, highly interactive Software Engineer Portfolio using **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4**, **TypeScript**, and **Framer Motion**. The portfolio will be production-ready, fully responsive, and leverage glassmorphism + gradient glow aesthetics.

---

## Proposed Changes

### Project Bootstrap & Config

#### [NEW] Project root (Next.js 15 via `create-next-app`)
- Bootstrap with `npx create-next-app@latest` using TypeScript, Tailwind CSS, App Router, ESLint, and src/ directory options.
- Install additional dependencies: `framer-motion`, `lucide-react`, `@tailwindcss/forms`.

---

### App Shell

#### [MODIFY] `src/app/layout.tsx`
- Set `<html>` to dark class.
- Add Google Fonts (Inter) via `next/font`.
- Set global SEO metadata (title, description, OG tags).

#### [MODIFY] `src/app/page.tsx`
- Import and compose all section components in order.
- Wrap with a `<main>` semantic element.

#### [MODIFY] `src/app/globals.css`
- Custom CSS variables for theme colors.
- Glassmorphism utility classes.
- Custom scrollbar styling.
- Gradient text utilities.

---

### Components

#### [NEW] `src/components/Navbar.tsx`
- Fixed top nav with blur backdrop.
- Logo / name on the left, nav links on the right.
- Hamburger menu for mobile.
- Active link highlighting on scroll (IntersectionObserver).

#### [NEW] `src/components/sections/Hero.tsx`
- Animated name & title with Framer Motion entrance.
- Live availability badge (pulsing green dot).
- CTA buttons: "View Projects", "Contact Me", "Download Resume".
- Social links: GitHub, LinkedIn, Twitter/X, Email icons.
- Animated background: subtle grid pattern + floating gradient orbs.

#### [NEW] `src/components/sections/Stats.tsx`
- Animated counter grid (count-up animation on scroll).
- Three stat cards: Uptime, Latency Reduction, DAU.

#### [NEW] `src/components/sections/Projects.tsx`
- Project cards with glassmorphism design.
- Each card: Title, tagline, problem/solution, tech badges, metrics, action buttons.
- Filter tabs or hover-reveal details.

#### [NEW] `src/components/sections/Playground.tsx`
- Interactive terminal/CLI widget.
- Simulated commands: `help`, `about`, `projects`, `contact`, `skills`.
- Animated typing effect for output.
- Command history navigation (up/down arrow keys).

#### [NEW] `src/components/sections/Skills.tsx`
- Tabbed interface: Languages, Frontend, Backend/DB, DevOps/Cloud.
- Animated skill cards with icons and proficiency indicators.

#### [NEW] `src/components/sections/Experience.tsx`
- Vertical timeline with connecting line.
- Each entry: Company, role, dates, bullet accomplishments.
- Scroll-triggered entrance animations.

#### [NEW] `src/components/sections/Contact.tsx`
- Contact form (name, email, message) with validation.
- "Copy Email" button with clipboard feedback.
- Direct email link.

#### [NEW] `src/components/Footer.tsx`
- Copyright, quick nav links, "Back to Top" button.

#### [NEW] `src/components/ui/Badge.tsx` — tech stack badge component
#### [NEW] `src/components/ui/Button.tsx` — reusable button variants
#### [NEW] `src/components/ui/Card.tsx` — glassmorphism card wrapper
#### [NEW] `src/components/ui/Terminal.tsx` — CLI widget implementation

---

## Verification Plan

### Manual Verification
1. Run `npm run dev` and confirm all sections render correctly.
2. Verify responsive layout on mobile/tablet/desktop.
3. Test terminal playground with simulated commands.
4. Test "Copy Email" clipboard functionality.
5. Verify all animations trigger correctly on scroll.
6. Check Framer Motion entrance effects for each section.
