import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Github, ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectVisual } from "@/components/project-visual";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/data/projects";
import { profile } from "@/data/profile";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return {
    title: project ? `${project.name} — ${profile.name}` : `Work — ${profile.name}`,
  };
}

const SectionTitle = ({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) => (
  <div className="mb-6 flex items-baseline gap-4">
    <span className="text-xs font-semibold tracking-wider text-moss">{number}</span>
    <h2 className="font-display text-3xl tracking-[-.03em] sm:text-4xl">{children}</h2>
  </div>
);

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex(({ slug: projectSlug }) => projectSlug === project.slug);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <>
      <SiteHeader />
      <main id="main">
        <article>
          <header className="mx-auto max-w-7xl px-5 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
            <Link className="inline-flex items-center gap-2 text-sm text-ink/60 transition hover:text-ink" href="/#work">
              <ArrowLeft size={16} /> Selected work
            </Link>

            <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow">{project.number} · {project.category}</p>
                <p className="mt-4 inline-flex rounded-full border border-ink/10 px-3 py-1.5 text-xs font-medium text-ink/60">
                  {project.status}
                </p>
                <h1 className="mt-4 font-display text-5xl tracking-[-.045em] sm:text-7xl">{project.name}</h1>
                <p className="mt-7 max-w-2xl text-xl leading-relaxed text-ink/65">{project.summary}</p>
              </div>
              <div className="border-l-2 border-moss pl-4 lg:col-span-3 lg:col-start-10">
                <p className="text-xs uppercase tracking-[.14em] text-ink/45">Current state</p>
                <p className="mt-2 text-lg font-medium text-moss">{project.impact}</p>
              </div>
            </div>

            {(project.liveUrl || project.githubUrl) && (
              <div className="mt-14 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <Button asChild>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      View project <ExternalLink size={15} />
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      GitHub <Github size={15} />
                    </a>
                  </Button>
                )}
              </div>
            )}
          </header>

          <section className="border-y border-ink/10 bg-sand/40 px-5 py-8 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-6 text-sm sm:grid-cols-3">
              <div><p className="text-ink/45">Role</p><p className="mt-1 font-medium">{project.role}</p></div>
              <div><p className="text-ink/45">Deliverable</p><p className="mt-1 font-medium">{project.deliverable}</p></div>
              <div><p className="text-ink/45">Focus</p><p className="mt-1 font-medium">{project.focus}</p></div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <ProjectVisual variant={index} />
          </section>

          <div className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-32">
            <div className="grid gap-16 lg:grid-cols-12">
              <aside className="hidden lg:col-span-3 lg:block">
                <nav className="sticky top-24 text-sm" aria-label="Case study contents">
                  <p className="mb-4 font-medium">In this project story</p>
                  <div className="flex flex-col gap-3 text-ink/55">
                    <a href="#problem">Problem</a>
                    <a href="#solution">Current direction</a>
                    <a href="#architecture">Architecture</a>
                    <a href="#workflow">Workflow</a>
                    <a href="#learnings">Learnings</a>
                  </div>
                </nav>
              </aside>

              <div className="space-y-20 lg:col-span-7 lg:col-start-5">
                <section id="problem">
                  <SectionTitle number="01">The problem</SectionTitle>
                  <p className="text-xl leading-relaxed text-ink/70">{project.problem}</p>
                </section>

                <section id="solution">
                  <SectionTitle number="02">The current direction</SectionTitle>
                  <p className="text-xl leading-relaxed text-ink/70">{project.solution}</p>
                  <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
                    {[
                      "Honest project status",
                      "Human review where it matters",
                      "Visible system boundaries",
                      "Decisions documented as the work evolves",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 bg-paper p-5 text-sm">
                        <Check size={16} className="text-moss" />{item}
                      </div>
                    ))}
                  </div>
                </section>

                <section id="architecture">
                  <SectionTitle number="03">Architecture</SectionTitle>
                  <p className="mb-8 text-base leading-relaxed text-ink/65">
                    This architecture describes the present direction. Individual parts may change as the product is tested and implemented.
                  </p>
                  <div className="overflow-hidden rounded-xl border border-ink/10 bg-[#fbfbf8] p-5 sm:p-7">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {project.architecture.map((item, itemIndex) => (
                        <div className="rounded-lg border border-ink/10 bg-paper p-4" key={item}>
                          <span className="text-[10px] font-semibold tracking-wider text-moss">0{itemIndex + 1}</span>
                          <p className="mt-2 text-sm font-medium">{item}</p>
                        </div>
                      ))}
                    </div>
                    <div className="my-4 h-px bg-ink/10" />
                    <p className="text-sm leading-relaxed text-ink/60">
                      <strong className="font-medium text-ink">Data and documentation:</strong> {project.database}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.apis.map((api) => (
                        <span key={api} className="rounded-full border border-ink/10 px-3 py-1.5 text-xs text-ink/65">{api}</span>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="workflow">
                  <SectionTitle number="04">Workflow</SectionTitle>
                  <ol className="border-t border-ink/10">
                    {project.workflow.map((step, itemIndex) => (
                      <li key={step} className="grid grid-cols-[48px_1fr] gap-4 border-b border-ink/10 py-5">
                        <span className="text-sm text-moss">0{itemIndex + 1}</span>
                        <p className="text-base">{step}</p>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-6 text-sm leading-relaxed text-ink/60">
                    This workflow is presented as an evolving product model rather than a claim that every step is already complete.
                  </p>
                </section>

                <section id="learnings">
                  <SectionTitle number="05">Challenges & lessons</SectionTitle>
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-ink/45">Challenges</p>
                      <ul className="space-y-4">
                        {project.challenges.map((challenge) => (
                          <li key={challenge} className="border-l border-ink/20 pl-4 text-sm leading-relaxed text-ink/70">{challenge}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-ink/45">Lessons so far</p>
                      <ul className="space-y-4">
                        {project.lessons.map((lesson) => (
                          <li key={lesson} className="border-l-2 border-moss pl-4 text-sm leading-relaxed text-ink/70">{lesson}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <section className="border-t border-ink/10 bg-mist/55 px-5 py-16 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl">
              <p className="eyebrow">Next project</p>
              <Link href={`/work/${nextProject.slug}`} className="group mt-3 flex items-end justify-between border-b border-ink/15 pb-4">
                <h2 className="font-display text-4xl tracking-[-.035em] sm:text-6xl">{nextProject.name}</h2>
                <ArrowUpRight className="mb-2 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
