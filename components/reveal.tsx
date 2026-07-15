"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reducedMotion = useReducedMotion();
  return <motion.div className={className} initial={reducedMotion ? false : { opacity: 0, y: 14 }} whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: .55, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
