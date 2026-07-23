import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ImageIcon } from "lucide-react";
import Reveal from "../ui/Reveal.jsx";
import SectionLabel from "../ui/SectionLabel.jsx";
import { PROJECTS } from "../../data/portfolio.js";

export default function Gallery() {
  const [open, setOpen] = useState(false);

  return (
    <section id="gallery" className="band relative">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
        <Reveal>
          <SectionLabel n="08">Image Gallery</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="max-w-2xl font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[2.4rem]">
              A visual look at <span className="text-primary">the work</span>.
            </h2>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="gallery-grid"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              {open ? "Hide gallery" : "Show gallery"}
              <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
          </div>
        </Reveal>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="gallery-grid"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((p, i) => (
                  <figure key={p.title} className="group relative bg-background">
                    <div className="relative aspect-4/3 w-full overflow-hidden bg-surface">
                      <div className="absolute inset-0 grid-bg opacity-70" />
                      <div className="absolute inset-0 grid place-items-center">
                        <ImageIcon className="h-8 w-8 text-ink-3 transition group-hover:scale-110 group-hover:text-primary" />
                      </div>
                      <div className="absolute left-3 top-3 font-mono text-[10px] text-ink-3">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <figcaption className="flex items-center justify-between border-t border-border px-5 py-4">
                      <span className="mono-label text-[0.6rem]! text-primary!">{p.tag}</span>
                      <span className="font-mono text-xs text-ink-2">{p.metric}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
