import Reveal from "../ui/Reveal.jsx";
import SectionLabel from "../ui/SectionLabel.jsx";
import { EXPERIENCE, EDUCATION } from "../../data/portfolio.js";

function Item({ e, showBullets }) {
  return (
    <div className="relative border-l border-border pl-6">
      <span className="absolute -left-1.25 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-primary" />
      <div className="mono-label text-[0.65rem]!">{e.period}</div>
      <h3 className="mt-1.5 font-display text-xl font-semibold leading-snug text-foreground">
        {e.role || e.title}
      </h3>
      <div className="mt-1 font-mono text-xs text-primary">{e.org}</div>
      {showBullets && e.bullets && (
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-2">
          {e.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink-3" /> {b}
            </li>
          ))}
        </ul>
      )}
      {e.note && <p className="mt-3 text-sm text-ink-2">{e.note}</p>}
    </div>
  );
}

export default function ExperienceEdu() {
  return (
    <section id="experience" className="band relative">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionLabel n="03">Experience</SectionLabel>
            </Reveal>
            <div className="mt-10 space-y-10">
              {EXPERIENCE.map((e, i) => (
                <Reveal key={e.role} delay={i * 0.05}>
                  <Item e={e} showBullets />
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <SectionLabel n="04">Education</SectionLabel>
            </Reveal>
            <div className="mt-10 space-y-10">
              {EDUCATION.map((e, i) => (
                <Reveal key={e.title} delay={i * 0.05}>
                  <Item e={e} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
