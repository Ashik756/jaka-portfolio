import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "../ui/Reveal.jsx";
import SectionLabel from "../ui/SectionLabel.jsx";
import { SKILL_GROUPS } from "../../data/portfolio.js";

function SkillBar({ name, level }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="text-foreground">{name}</span>
        <span className="font-mono text-ink-3">{level}</span>
      </div>
      <div className="h-0.75 overflow-hidden rounded-full bg-surface-2">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.1, ease: [0.2, 0.6, 0.2, 1] }}
          className="h-full rounded-full bg-primary"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="band relative bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
        <Reveal>
          <SectionLabel n="02">Skills</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-2xl font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[2.4rem]">
            The stack behind <span className="text-primary">enterprise-grade</span> networks.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.05}>
              <div className="h-full bg-background p-7 transition hover:bg-surface">
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                    <g.icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                </div>
                <div className="space-y-4">
                  {g.items.map((it) => (
                    <SkillBar key={it.name} {...it} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
