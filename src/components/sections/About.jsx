import { CheckCircle2 } from "lucide-react";
import Reveal from "../ui/Reveal.jsx";
import SectionLabel from "../ui/SectionLabel.jsx";

export default function About() {
  return (
    <section id="about" className="band relative">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
        <Reveal>
          <SectionLabel n="01">About</SectionLabel>
        </Reveal>
        <div className="mt-10 grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl font-display text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
              Reliable networking for the operators who
              <span className="text-primary"> can&apos;t afford downtime.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-[15px] leading-relaxed text-ink-2">
              <p>
                I&apos;m an experienced IT specialist focused on MikroTik server configuration,
                enterprise networking, ISP infrastructure and network optimization. I deliver
                secure, stable and high-performance connectivity for Internet Service Providers
                and businesses.
              </p>
              <p>
                My goal is professional MikroTik configuration and networking services that
                measurably improve performance, security and scalability for every client.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-2 border-t border-border pt-6 sm:grid-cols-2">
                {["MikroTik RouterOS expert", "BGP / OSPF / MPLS", "24/7 monitoring", "ISP-grade uptime"].map((t) => (
                  <div key={t} className="flex items-center gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {t}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
