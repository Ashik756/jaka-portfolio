import { ShieldCheck, ArrowUpRight } from "lucide-react";
import Reveal from "../ui/Reveal.jsx";
import SectionLabel from "../ui/SectionLabel.jsx";
import { CERTS } from "../../data/portfolio.js";

export default function Certifications() {
  return (
    <section id="certifications" className="band relative bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
        <Reveal>
          <SectionLabel n="05">Certifications</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-2xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            Credentials that back the <span className="text-primary">work</span>.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 5) * 0.04}>
              <div className="flex h-full flex-col justify-between bg-background p-6 transition hover:bg-surface">
                <div className="flex items-center justify-between">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span className="font-mono text-[10px] text-ink-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-10">
                  
                  <div className="flex items-start justify-between gap-2">
                    <div className="font-display text-[15px] font-semibold leading-snug text-foreground">
                      {c.name}
                    </div>
                    {c.link && (
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-0.5 font-mono text-xs text-primary transition-opacity hover:opacity-80 hover:underline"
                        title="View Certificate"
                      >
                        <span>View</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>

                  <div className="mono-label mt-2 text-[0.6rem]!">{c.org}</div>

                  {c.date && (
                    <div className="mt-3 font-mono text-[11px] text-ink-3">
                      {c.date}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}