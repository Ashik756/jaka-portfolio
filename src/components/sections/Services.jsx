import { ArrowUpRight } from "lucide-react";
import Reveal from "../ui/Reveal.jsx";
import SectionLabel from "../ui/SectionLabel.jsx";
import { SERVICES } from "../../data/portfolio.js";

export default function Services() {
  return (
    <section id="services" className="band relative">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
        <Reveal>
          <SectionLabel n="06">Services</SectionLabel>
        </Reveal>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[2.4rem]">
              End-to-end services, from <span className="text-primary">edge to core</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="#contact" className="inline-flex items-center gap-1.5 font-mono text-sm text-primary hover:underline">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.05}>
              <div className="group relative h-full bg-background p-7 transition hover:bg-surface">
                <div className="flex items-start justify-between">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border bg-surface text-primary transition group-hover:border-primary/40">
                    <s.icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="font-mono text-[10px] text-ink-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-lg font-semibold leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
