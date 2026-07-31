export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  status: string;
  summary: string;
  focus: string[];
  overview: string;
  focusIntro: string;
  approachTitle: string;
  approachBody: string;
  role: string;
  scope: string;
  stage: string;
};

export const projects: Project[] = [
  {
    slug: "ai-email-organizer",
    number: "01",
    name: "AI Email Organizer",
    category: "AI-assisted productivity product",
    status: "In active development",
    summary:
      "A privacy-conscious Gmail workspace that synchronizes mailbox metadata, renders threads safely, and is being developed toward explainable AI-assisted triage.",
    focus: [
      "Secure Gmail connection and synchronization",
      "Safe thread reading and permission upgrades",
      "Explainable triage and human review",
    ],
    overview:
      "AI Email Organizer is a Gmail-connected workspace designed to reduce inbox overload without hiding important decisions behind opaque automation. The current product foundation includes secure account connection, reliable metadata synchronization, provider-backed thread reading, and guarded permission upgrades for write actions.",
    focusIntro:
      "The current milestone is strengthening the product foundation before introducing autonomous behavior. Work is concentrated on reliability, safe content handling, clear permission boundaries, and AI features that remain understandable and reviewable.",
    approachTitle: "Trust before automation",
    approachBody:
      "The system treats Gmail as the source of truth, separates read access from write access, and avoids presenting AI output as certainty. New capabilities are added in stages so synchronization, rendering, permissions, and recovery behavior can be validated before more advanced triage is introduced.",
    role: "Product direction, architecture, frontend, and implementation",
    scope: "Gmail integration, synchronization, secure reading, and AI interaction design",
    stage: "Core connection and reading flows implemented; triage remains in development",
  },
  {
    slug: "wong-studio",
    number: "02",
    name: "Wong Studio",
    category: "Independent product practice",
    status: "Evolving foundation",
    summary:
      "The identity and digital home for an independent practice focused on practical AI tools, thoughtful product systems, and clear communication.",
    focus: [
      "Positioning and information architecture",
      "Visual and verbal identity",
      "Portfolio and product foundation",
    ],
    overview:
      "Wong Studio is the umbrella for my independent product work. It brings together product thinking, applied AI, full-stack development, and design-system research under one clear point of view: useful technology should make complex work easier to understand and control.",
    focusIntro:
      "The current work is defining how the studio presents itself, how projects are documented, and how future products can share a recognizable standard without becoming visually or conceptually repetitive.",
    approachTitle: "A focused practice, not a broad agency",
    approachBody:
      "Wong Studio is being built around a small number of self-directed products and research efforts. The goal is not to appear larger than the work itself, but to create a clear home for projects, decisions, and lessons as the practice develops.",
    role: "Founder, product designer, and developer",
    scope: "Positioning, portfolio architecture, brand system, and project communication",
    stage: "Identity and portfolio foundation established; practice still evolving",
  },
  {
    slug: "wong-design-system",
    number: "03",
    name: "Wong Design System",
    category: "Design system research",
    status: "Research and development",
    summary:
      "A developing design language for creating calm, consistent, and trustworthy product experiences across Wong Studio projects.",
    focus: [
      "Design principles and tokens",
      "Reusable component and interaction patterns",
      "Accessibility and trust standards",
    ],
    overview:
      "Wong Design System is a research initiative for defining how Wong Studio products should look, behave, and communicate. It is intended to reduce inconsistency across future interfaces while preserving clarity, warmth, accessibility, and a strong sense of human control.",
    focusIntro:
      "The current phase is focused on principles rather than a large component library. Work includes visual foundations, interaction expectations, content tone, accessibility requirements, and criteria for deciding when a pattern should become reusable.",
    approachTitle: "Consistency with room for context",
    approachBody:
      "The system is not intended to force every product into the same surface treatment. It provides shared foundations and decision rules while allowing each product to respond to its users, risks, and workflow. Components will be formalized only after recurring patterns are observed and validated.",
    role: "Design-system direction, UX principles, and frontend review",
    scope: "Tokens, components, interaction patterns, accessibility, and product language",
    stage: "Principles and foundations in research; implementation is still emerging",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
