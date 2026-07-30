export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  status: string;
  summary: string;
  impact: string;
  accent: string;
  role: string;
  deliverable: string;
  focus: string;
  problem: string;
  solution: string;
  architecture: string[];
  workflow: string[];
  database: string;
  apis: string[];
  challenges: string[];
  lessons: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "ai-email-organizer",
    number: "01",
    name: "AI Email Organizer",
    category: "AI Productivity Product",
    status: "In active development",
    accent: "#C8D9CE",
    summary:
      "A privacy-conscious Gmail workspace designed to help people understand, prioritize, search, and act on email without giving up control.",
    impact: "Flagship Wong Studio product · Work in progress",
    role: "Product · Design · Full-stack engineering",
    deliverable: "Working product under active development",
    focus: "Trustworthy email intelligence",
    problem:
      "Important messages, decisions, and follow-ups are easily buried in crowded inboxes. Existing automation can save time, but it often hides its reasoning or acts before the user is ready.",
    solution:
      "AI Email Organizer is being built as a reviewable workspace around Gmail. It combines mailbox synchronization, structured search, prioritization, and assisted drafting while preserving clear approval points before consequential actions.",
    architecture: [
      "Next.js product interface",
      "Secure Gmail authentication and synchronization",
      "Structured email and thread processing",
      "Human-reviewed AI assistance",
    ],
    workflow: [
      "Connect a Gmail account securely",
      "Synchronize permitted mailbox data",
      "Organize messages by context and priority",
      "Generate explainable summaries or draft actions",
      "Require user review before consequential changes",
    ],
    database:
      "The evolving data layer is designed to store synchronized message metadata, user-defined organization rules, processing state, and review decisions without obscuring the original source.",
    apis: ["Gmail API", "Google OAuth", "AI model integration — planned"],
    challenges: [
      "Handling sensitive communication responsibly",
      "Keeping synchronization reliable and understandable",
      "Making assistance useful without over-automating user decisions",
    ],
    lessons: [
      "Trust must be designed into the workflow, not added afterward",
      "Email organization depends on context, not only classification",
      "Unfinished capabilities should be communicated honestly",
    ],
    githubUrl: "https://github.com/RampleStealth",
  },
  {
    slug: "wong-studio",
    number: "02",
    name: "Wong Studio",
    category: "Independent Product Studio",
    status: "Evolving foundation",
    accent: "#E7D6B6",
    summary:
      "The product and engineering studio behind a growing family of thoughtful, human-controlled software systems.",
    impact: "Studio foundation · Still taking shape",
    role: "Founder · Product strategy · Engineering",
    deliverable: "Studio principles and operating foundation",
    focus: "Evidence-first product development",
    problem:
      "Independent software projects can easily become disconnected experiments without shared standards for quality, trust, decision-making, and long-term direction.",
    solution:
      "Wong Studio provides a coherent home for the work: a clear set of product principles, engineering expectations, documentation practices, and a roadmap that connects current products with future systems.",
    architecture: [
      "Studio identity and product principles",
      "Constitutional repository and decision records",
      "Reusable product-development standards",
      "Portfolio of connected product initiatives",
    ],
    workflow: [
      "Identify a meaningful operational problem",
      "Study the real human workflow",
      "Define boundaries and evidence requirements",
      "Build and test the smallest useful system",
      "Document decisions and carry lessons forward",
    ],
    database:
      "Wong Studio is currently an organizational and product foundation rather than a single application database. Its records live across repositories, specifications, design documents, and project histories.",
    apis: ["GitHub", "Google Workspace", "Product-specific integrations"],
    challenges: [
      "Building credibility without exaggerating maturity",
      "Keeping multiple initiatives connected but independently useful",
      "Turning principles into repeatable day-to-day practice",
    ],
    lessons: [
      "A studio identity should clarify the work, not decorate it",
      "Standards become valuable when tested against real products",
      "A transparent work in progress can be stronger than a fictional finished company",
    ],
    githubUrl: "https://github.com/RampleStealth",
  },
  {
    slug: "wong-design-system",
    number: "03",
    name: "Wong Design System",
    category: "Design System Research",
    status: "Research and development",
    accent: "#D3D8EB",
    summary:
      "An emerging shared product language for making Wong Studio software clear, accessible, consistent, and recognizably human.",
    impact: "Future foundation · Early-stage research",
    role: "Product design · Systems thinking · Front-end research",
    deliverable: "Principles, tokens, and component direction",
    focus: "Calm, trustworthy product experiences",
    problem:
      "As Wong Studio grows, individual products need a shared foundation without forcing every interface into the same visual template or prematurely freezing experimental ideas.",
    solution:
      "WDS is being developed as a practical system of principles, accessibility rules, reusable tokens, interaction patterns, and components. It will be tested through real products before being treated as complete.",
    architecture: [
      "Foundational product and accessibility principles",
      "Color, typography, spacing, and motion tokens",
      "Reusable interaction and component patterns",
      "Documentation and product adoption guidance",
    ],
    workflow: [
      "Observe recurring needs across Wong Studio products",
      "Define the smallest reusable rule or pattern",
      "Prototype it inside a real interface",
      "Evaluate clarity, accessibility, and maintainability",
      "Promote proven patterns into the shared system",
    ],
    database:
      "The design system will be maintained through versioned documentation, token definitions, component code, adoption notes, and decisions linked to the products that validated them.",
    apis: ["Storybook or documentation tooling — planned", "Design tokens — planned"],
    challenges: [
      "Avoiding premature standardization",
      "Balancing shared identity with product-specific needs",
      "Separating durable principles from temporary portfolio styling",
    ],
    lessons: [
      "A design system should emerge from product evidence",
      "Consistency is useful only when it improves comprehension",
      "The portfolio can test ideas without becoming the WDS itself",
    ],
    githubUrl: "https://github.com/RampleStealth",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
