import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Facebook, MapPin } from "lucide-react";
import portrait from "../../assets/jakaria.png";
import Reveal from "../ui/Reveal.jsx";
import Counter from "../ui/Counter.jsx";
import { TITLES, HERO_STATS } from "../../data/portfolio.js";
import CV from "../../assets/Jakaria_Shekh_Mahi_CV.pdf"

function Typed() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = TITLES[i];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = cur.slice(0, text.length + 1);
          setText(next);
          if (next === cur) setTimeout(() => setDel(true), 1800);
        } else {
          const next = cur.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((i + 1) % TITLES.length);
          }
        }
      },
      del ? 25 : 55
    );
    return () => clearTimeout(t);
  }, [text, del, i]);
  return (
    <span className="text-primary">
      {text}
      <span className="ml-0.5 inline-block h-[0.9em] w-0.5 translate-y-0.5 bg-primary animate-pulse" />
    </span>
  );
}

const SOCIALS = [
  { icon: Github, href: "https://github.com/mdjakariasheikhmahi", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/feed", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/mdjakariasheik0000", label: "Email" },
];

const HIGHLIGHTS = [
  "MikroTik Certified",
  "BGP / OSPF / MPLS",
  "ISP Backbones",
  "Network Security",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                <span className="mono-label text-[0.65rem]! text-ink-2!">
                  Available for engagements — Q3 2026
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-8 font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.5rem]">
                Jakaria<span className="text-primary">—</span>Sheikh
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 h-7 font-mono text-base text-ink-2 sm:text-lg">
                <span className="text-ink-3">$&nbsp;</span>
                <Typed />
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-2 sm:text-lg">
                I design and operate secure, high-performance networks for ISPs
                and businesses — from{" "}
                <span className="text-foreground">MikroTik</span> edge routers
                to enterprise{" "}
                <span className="text-foreground">BGP backbones</span>. Six
                years turning complex infrastructure into calm, reliable
                uptime.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-6 flex flex-wrap gap-2">
                {HIGHLIGHTS.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-border bg-surface/40 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ink-2"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <motion.a
                  href="#contact"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.6)] transition hover:bg-accent-strong"
                >
                  Hire me
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </motion.a>
                <motion.a
                  href="#services"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/40 px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/40 hover:bg-surface"
                >
                  View services
                </motion.a>
                <a
                  href={CV}
                  className="group inline-flex items-center gap-2 rounded-md px-2 py-2.5 text-sm font-medium text-ink-2 transition hover:text-foreground"
                >
                  <Download className="h-4 w-4 transition group-hover:-translate-y-0.5" />
                  Download CV
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {SOCIALS.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ y: -2 }}
                      className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface/40 text-ink-2 transition hover:border-primary/50 hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
                <div className="h-5 w-px bg-border" />
                <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-3">
                  <MapPin className="h-3 w-3" /> Dhaka, Bangladesh
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 -z-10 rounded-3xl bg-linear-to-br from-primary/20 via-transparent to-transparent blur-2xl" />
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-surface"
              >
                <img
                  src={portrait}
                  alt="Tokay-Dendy, IT and Network Infrastructure Specialist"
                  width={512}
                  height={640}
                  className="h-full w-full object-cover grayscale-15 transition duration-700 hover:grayscale-0 hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <div className="mono-label text-[0.6rem]! text-ink-2!">Role</div>
                    <div className="font-mono text-sm text-foreground">Network Specialist</div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/10 px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    Online
                  </div>
                </div>
              </motion.div>            
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {HERO_STATS.map((s) => (
              <div
                key={s.l}
                className="group bg-background px-6 py-6 transition hover:bg-surface/60"
              >
                <div className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="mono-label mt-2 transition group-hover:text-primary">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
