import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectVisual } from "@/components/project-visual";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WongStudioLogo } from "@/components/wong-studio-logo";
import { profile } from "@/data/profile";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.name} - ${profile.name}` : `Work - ${profile.name}` };
}

const SectionTitle = ({ number, children }: { number: string; children: React.ReactNode }) => <div className="mb-6 flex items-baseline gap-4"><span className="text-xs font-semibold tracking-wider text-moss">{number}</span><h2 className="font-display text-3xl tracking-[-.03em] sm:text-4xl">{children}</h2></div>;

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex(({ slug: projectSlug }) => projectSlug === project.slug);
  const nextProject = projects[(index + 1) % projects.length];

  return <><SiteHeader /><main id="main"><article>
    <header className="mx-auto max-w-7xl px-5 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20"><Link className="inline-flex items-center gap-2 text-sm text-ink/60 transition hover:text-ink" href="/#work"><ArrowLeft size={16} /> Selected work</Link><div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-7"><p className="eyebrow">{project.number} · {project.category}</p>{project.slug === "ai-email-organizer" && <p className="mt-4 text-xs font-medium uppercase tracking-[.12em] text-ink/45">A Wong Studio project</p>}{project.slug === "wong-studio" && <WongStudioLogo variant="wordmark" size="md" className="mt-4 text-ink/65" />}{project.slug === "wong-design-system" && <WongStudioLogo variant="icon" size="sm" className="mt-4 text-ink/55" />}<p className="mt-4 inline-flex rounded-full border border-ink/10 px-3 py-1.5 text-xs font-medium text-ink/60">{project.status}</p><h1 className="mt-4 font-display text-5xl tracking-[-.045em] sm:text-7xl">{project.name}</h1><p className="mt-7 max-w-2xl text-xl leading-relaxed text-ink/65">{project.summary}</p></div><div className="border-l-2 border-moss pl-4 lg:col-span-3 lg:col-start-10"><p className="text-xs uppercase tracking-[.14em] text-ink/45">Current state</p><p className="mt-2 text-lg font-medium text-moss">{project.status}</p></div></div></header>
    <section className="border-y border-ink/10 bg-sand/40 px-5 py-8 lg:px-8"><div className="mx-auto grid max-w-7xl gap-6 text-sm sm:grid-cols-3"><div><p className="text-ink/45">Practice</p><p className="mt-1 font-medium">Wong Studio</p></div><div><p className="text-ink/45">Project type</p><p className="mt-1 font-medium">{project.category}</p></div><div><p className="text-ink/45">Stage</p><p className="mt-1 font-medium">{project.status}</p></div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"><ProjectVisual variant={index} priority sizes="(min-width: 1280px) 1280px, 100vw" /><p className="mt-3 text-xs leading-relaxed text-ink/50">Concept visual for {project.name}; not a product screenshot.</p></section>
    <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-32"><div className="grid gap-16 lg:grid-cols-12"><aside className="hidden lg:col-span-3 lg:block"><nav className="sticky top-24 text-sm" aria-label="Project overview contents"><p className="mb-4 font-medium">On this page</p><div className="flex flex-col gap-3 text-ink/55"><a href="#overview">Overview</a><a href="#focus">Current focus</a><a href="#approach">Approach</a></div></nav></aside><div className="space-y-20 lg:col-span-7 lg:col-start-5"><section id="overview"><SectionTitle number="01">Project overview</SectionTitle><p className="text-xl leading-relaxed text-ink/70">{project.summary}</p></section><section id="focus"><SectionTitle number="02">Current focus</SectionTitle><p className="mb-8 text-base leading-relaxed text-ink/65">This work is intentionally in progress. The current focus is on building a foundation that keeps the project coherent as it develops.</p><div className="overflow-hidden rounded-xl border border-ink/10 bg-[#fbfbf8]">{project.focus.map((item, itemIndex) => <div className="grid grid-cols-[48px_1fr] gap-4 border-b border-ink/10 p-5 last:border-b-0" key={item}><span className="text-sm text-moss">0{itemIndex + 1}</span><p className="text-base font-medium">{item}</p></div>)}</div></section><section id="approach"><SectionTitle number="03">A deliberate foundation</SectionTitle><p className="text-xl leading-relaxed text-ink/70">The work emphasizes clear structure, reusable decisions, and room for thoughtful iteration. Details will be shared as the project evolves.</p></section></div></div></section>
    <section className="border-t border-ink/10 bg-mist/55 px-5 py-16 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><p className="eyebrow">Next project</p><Link href={`/work/${nextProject.slug}`} className="group mt-3 flex items-end justify-between border-b border-ink/15 pb-4"><h2 className="font-display text-4xl tracking-[-.035em] sm:text-6xl">{nextProject.name}</h2><ArrowUpRight className="mb-2 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link></div></section>
  </article></main><SiteFooter /></>;
}
