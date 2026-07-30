# Rameses Jay Wong — Personal Portfolio

A case-study-led portfolio documenting the products, systems, and experiments being developed through **Wong Studio**.

## Live Portfolio

Visit the deployed portfolio:

[Visit Wong Studio Portfolio](https://wongstudio.vercel.app/)

The portfolio focuses on real work at its current stage of development. Projects that are still being built or researched are labeled clearly rather than presented as finished products.

## Featured projects

### AI Email Organizer

**Status:** In active development

A privacy-conscious Gmail workspace designed to help users understand, prioritize, search, summarize, and act on email while remaining in control of consequential actions.

### Wong Studio

**Status:** Evolving foundation

The independent product and engineering studio behind a growing collection of thoughtful, human-controlled software systems.

### Wong Design System

**Status:** Research and development

An emerging shared product language for creating clear, accessible, consistent, and recognizably human Wong Studio products.

### What’s Next at Wong Studio

**Status:** Future concepts

Early research directions around support intelligence, document operations, and workflow automation. These concepts are exploratory and are not presented as completed products or promised releases.

## Design direction

The portfolio uses an **Editorial Product Builder** direction with calm technical details:

* Large editorial typography
* Clear case-study storytelling
* Warm neutral colors
* Muted moss accents
* Realistic concept visuals
* Restrained motion
* Transparent project-status labels
* Accessible interaction and focus states

The temporary portfolio styling should not be treated as the completed Wong Design System.

## Technology

* Next.js 15
* React 19
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React
* Radix UI

## Project structure

```text
app/
├── page.tsx
└── work/
    └── [slug]/
        └── page.tsx

components/
├── project-visual.tsx
├── reveal.tsx
├── site-footer.tsx
├── site-header.tsx
└── ui/

data/
├── profile.ts
└── projects.ts

public/
└── projects/
    ├── ai-email-organizer.png
    ├── wong-studio.png
    ├── wong-design-system.png
    └── wong-studio-future.png
```

## Running locally

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local address shown in the terminal, usually:

```text
http://localhost:3000
```

## Production validation

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Updating profile information

Personal and contact information is stored in:

```text
data/profile.ts
```

## Updating projects

Project names, statuses, summaries, case-study content, and links are stored in:

```text
data/projects.ts
```

Project concept visuals are stored in:

```text
public/projects/
```

The concept visuals communicate project direction and should not be described as screenshots of completed products.

## Current development status

This portfolio is actively evolving alongside Wong Studio and its projects.

Some sections, visuals, technical details, and project narratives may change as the underlying products are implemented, tested, and documented.

## Author

**Rameses Jay Wong**
Bacolod City, Philippines · Remote

- Portfolio: [wongstudio.vercel.app](https://wongstudio.vercel.app/)
- GitHub: [RampleStealth](https://github.com/RampleStealth)
- LinkedIn: [Rameses Jay Wong](https://www.linkedin.com/in/ramesesjaywong200211)
