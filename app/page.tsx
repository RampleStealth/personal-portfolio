import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl content-center px-5 py-20 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-9">
            <Reveal>
              <p className="eyebrow mb-8">Product builder · Applied AI · Work in progress</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="max-w-5xl font-display text-5xl leading-[.98] tracking-[-.045em] text-ink sm:text-7xl lg:text-[92px]">
                I design and build <em className="font-normal text-moss">intelligent tools</em> that make complicated work easier to understand.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/65">
                I’m Rameses Jay Wong, the builder behind Wong Studio. I work across product thinking, full-stack engineering, and applied AI—turning early ideas into understandable, human-controlled systems.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="#work">Explore the work <ArrowDownRight size={16} /></Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={16} /></a>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 border-t border-ink/10 pt-5 text-sm lg:col-span-12 lg:mt-20 lg:grid-cols-4">
            <div><p className="text-ink/45">Current build</p><p className="mt-1 font-medium">AI Email Organizer</p></div>
            <div><p className="text-ink/45">Studio</p><p className="mt-1 font-medium">Wong Studio</p></div>
            <div><p className="text-ink/45">Approach</p><p className="mt-1 font-medium">Evidence over novelty</p></div>
            <div><p className="text-ink/45">Based in</p><p className="mt-1 font-medium">{profile.location}</p></div>
          </div>
        </section>

        <section id="work" className="border-t border-ink/10 px-5 py-20 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mb-14 flex items-end justify-between">
                <div>
                  <p className="eyebrow">Selected work</p>
                  <h2 className="mt-3 max-w-xl font-display text-4xl tracking-[-.035em] sm:text-5xl">
                    Real products, shown at their honest stage of development.
                  </h2>
                </div>
                <p className="hidden max-w-xs text-sm leading-relaxed text-ink/60 md:block">
                  These projects are still evolving. Each case study separates what exists today from what is being designed next.
                </p>
              </div>
            </Reveal>

            <div className="space-y-20 lg:space-y-32">
              {projects.map((project, index) => (
                <Reveal key={project.slug}>
                  <article className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                    <Link href={`/work/${project.slug}`} aria-label={`Read ${project.name} case study`} className="group block">
                      <ProjectVisual variant={index} />
                    </Link>
                    <div className="max-w-lg">
                      <p className="eyebrow">{project.number} · {project.category}</p>
                      <p className="mt-4 inline-flex rounded-full border border-ink/10 px-3 py-1.5 text-xs font-medium text-ink/60">
                        {project.status}
                      </p>
                      <h3 className="mt-4 font-display text-4xl tracking-[-.035em] sm:text-5xl">{project.name}</h3>
                      <p className="mt-5 text-lg leading-relaxed text-ink/65">{project.summary}</p>
                      <div className="mt-7 inline-flex items-center gap-3 border-l-2 border-moss pl-3 text-sm font-medium text-moss">
                        {project.impact}
                      </div>
                      <Link className="mt-9 inline-flex items-center gap-2 text-sm font-semibold underline decoration-ink/25 underline-offset-4 transition hover:decoration-ink" href={`/work/${project.slug}`}>
                        View project story <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="systems" className="bg-ink px-5 py-20 text-paper lg:px-8 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow text-[#9dc9b6]">How I work</p>
              <h2 className="mt-3 font-display text-4xl tracking-[-.035em] sm:text-5xl">Build the system around the human decision.</h2>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
              <p className="text-xl leading-relaxed text-paper/70">
                Useful AI is more than a clever prompt. It needs context, boundaries, recovery paths, evaluation, and a person who remains in control.
              </p>
              <div className="mt-10 grid gap-0 border-t border-paper/15">
                {[
                  ["01", "Start with the real work", "Study decisions, bottlenecks, and risks before choosing technology."],
                  ["02", "Make uncertainty visible", "Show sources, limits, and review points where they matter."],
                  ["03", "Build in honest stages", "Separate what works today from what is still being explored."],
                ].map(([number, title, body]) => (
                  <div key={number} className="grid gap-3 border-b border-paper/15 py-6 sm:grid-cols-[64px_1fr]">
                    <span className="text-sm text-[#9dc9b6]">{number}</span>
                    <div><h3 className="font-medium">{title}</h3><p className="mt-2 max-w-md text-sm leading-relaxed text-paper/60">{body}</p></div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-ink/10 bg-mist/35 px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">What’s next</p>
              <h2 className="mt-3 font-display text-4xl tracking-[-.035em] sm:text-5xl">Future work at Wong Studio.</h2>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
              <p className="text-xl leading-relaxed text-ink/70">
                Future concepts may explore support intelligence, document operations, and practical workflow automation. They remain research directions—not finished products or promised releases.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-ink/55">
                The next project will be chosen by evidence of a real problem, not by the desire to fill a portfolio card.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="about" className="px-5 py-20 lg:px-8 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">About</p>
              <h2 className="mt-3 font-display text-4xl tracking-[-.035em] sm:text-5xl">A product-minded builder learning in public.</h2>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
              <p className="text-xl leading-relaxed text-ink/70">
                I work across research, interaction design, full-stack development, and applied AI to make useful systems real. I care about clear thinking, responsible automation, and building products whose maturity is represented honestly.
              </p>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm">
                <a className="font-semibold underline underline-offset-4" href={`mailto:${profile.email}`}>{profile.email}</a>
                <a className="text-ink/65 hover:text-ink" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
                <a className="text-ink/65 hover:text-ink" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
