import { profile } from "@/data/profile";
export function SiteFooter() {
  return <footer className="border-t border-ink/10 px-5 py-8 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-ink/55 sm:flex-row"><p>© 2026 {profile.name}. Built with care.</p><div className="flex gap-5"><a className="hover:text-ink" href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a className="hover:text-ink" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a className="hover:text-ink" href={`mailto:${profile.email}`}>Email</a></div></div></footer>;
}
