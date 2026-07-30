import { profile } from "@/data/profile";
import { WongStudioLogo } from "@/components/wong-studio-logo";

export function SiteFooter() {
  return <footer className="border-t border-ink/10 px-5 py-8 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-ink/55 sm:flex-row sm:items-end"><div><WongStudioLogo label="Wong Studio" size="md" /><p className="mt-2">Built by {profile.name}.</p></div><div className="flex gap-5"><a className="hover:text-ink" href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a className="hover:text-ink" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a className="hover:text-ink" href={`mailto:${profile.email}`}>Email</a></div></div></footer>;
}
