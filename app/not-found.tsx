import Link from "next/link";
export default function NotFound() { return <main className="grid min-h-screen place-items-center bg-paper p-6 text-center"><div><p className="eyebrow">404</p><h1 className="mt-3 font-display text-5xl">This page moved on.</h1><Link className="mt-8 inline-block underline underline-offset-4" href="/">Back home</Link></div></main>; }
