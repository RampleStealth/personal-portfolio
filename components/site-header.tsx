"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const links = [{ href: "/#work", label: "Work" }, { href: "/#systems", label: "Systems" }, { href: "/#about", label: "About" }];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
    <a className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-paper focus:p-3" href="#main">Skip to content</a>
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
      <Link className="text-sm font-semibold tracking-tight" href="/">{profile.name}<span className="text-moss">.</span></Link>
      <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">{links.map((link) => <Link key={link.href} className="text-sm text-ink/65 transition-colors hover:text-ink" href={link.href}>{link.label}</Link>)}</nav>
      <div className="hidden md:block"><Button asChild><a href={`mailto:${profile.email}`}>Let&apos;s talk <span aria-hidden>↗</span></a></Button></div>
      <button className="grid size-10 place-items-center rounded-full md:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    </div>
    {open && <nav className="border-t border-ink/10 bg-paper px-5 py-5 md:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-7xl flex-col gap-4">{links.map((link) => <Link onClick={() => setOpen(false)} key={link.href} className="text-lg" href={link.href}>{link.label}</Link>)}<a className="text-lg text-moss" href={`mailto:${profile.email}`}>Let&apos;s talk ↗</a></div></nav>}
  </header>;
}
