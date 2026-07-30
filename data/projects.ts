export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  status: string;
  summary: string;
  focus: string[];
};

export const projects: Project[] = [
  {
    slug: "ai-email-organizer",
    number: "01",
    name: "AI Email Organizer",
    category: "AI product",
    status: "In active development",
    summary: "A considered AI product concept exploring calmer, more intentional ways to organize and act on email.",
    focus: ["Product direction", "AI interaction patterns", "Workflow design"],
  },
  {
    slug: "wong-studio",
    number: "02",
    name: "Wong Studio",
    category: "Studio platform",
    status: "Evolving foundation",
    summary: "The digital foundation for Wong Studio—designed to grow with the practice while keeping its point of view clear.",
    focus: ["Information architecture", "Visual system", "Frontend foundation"],
  },
  {
    slug: "wong-design-system",
    number: "03",
    name: "Wong Design System",
    category: "Design systems",
    status: "Research and development",
    summary: "An ongoing exploration of a more coherent, reusable design language for Wong Studio products and experiences.",
    focus: ["Design tokens", "Component patterns", "System research"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
