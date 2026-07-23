import { ArrowUpRight } from "lucide-react";
import Reveal from "../ui/Reveal.jsx";
import SectionLabel from "../ui/SectionLabel.jsx";
import { PROJECTS } from "../../data/portfolio.js";

export default function Projects() {
  return (
    <section id="projects" className="band relative bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
        <Reveal>
          <SectionLabel n="07">Featured Projects</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-2xl font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[2.4rem]">
            Selected work that <span className="text-primary">moved the SLA</span>.
          </h2>
        </Reveal>
        <div className="mt-14 divide-y divide-border overflow-hidden rounded-xl border border-border">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 0.04}>
              <a
                href="#contact"
                className="group grid grid-cols-1 gap-4 bg-background px-6 py-6 transition hover:bg-surface sm:grid-cols-[80px_1.4fr_1fr_180px_28px] sm:items-center sm:px-8"
              >
                <span className="font-mono text-xs text-ink-3">
                  {String(i + 1).padStart(2, "0")} /
                </span>
                <div>
                  <div className="font-display text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                    {p.title}
                  </div>
                  <div className="mono-label mt-1.5 text-[0.6rem]! text-primary!">{p.tag}</div>
                </div>
                <p className="text-sm leading-relaxed text-ink-2">{p.desc}</p>
                <div className="font-mono text-xs text-foreground sm:text-right">{p.metric}</div>
                <ArrowUpRight className="hidden h-5 w-5 text-ink-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary sm:block" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
