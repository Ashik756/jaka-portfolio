import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV } from "../../data/nav.js";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#top");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const on = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, y / h) : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const visible = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio);
          else visible.delete(e.target.id);
        }
        if (visible.size) {
          const top = [...visible.entries()].sort((a, b) => b[1] - a[1])[0][0];
          setActive(`#${top}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-6 lg:px-8 lg:py-4">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Tokay-Dendy home">
          <span className="relative grid h-8 w-8 place-items-center rounded-md border border-primary/40 bg-primary/10 font-mono text-sm font-semibold text-primary transition group-hover:border-primary group-hover:bg-primary/20">
            J
            <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
          </span>
          <span className=" font-mono text-lg font-semibold tracking-tight text-foreground">
            Jakaria<span className="text-primary"> Sheikh Mahi</span>
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV.map((n) => {
            const isActive = active === n.href;
            return (
              <a
                key={n.href}
                href={n.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors ${
                  isActive ? "text-foreground" : "text-ink-2 hover:text-foreground"
                }`}
              >
                {n.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-md border border-primary/60 bg-primary/10 px-3.5 py-1.5 text-[13px] font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          className="relative z-50 grid h-9 w-9 place-items-center rounded-md border border-border bg-surface/60 text-foreground transition hover:border-primary/40 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <AnimatePresence initial={false} mode="wait">
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="h-4.5 w-4.5" />
              </motion.span>
            ) : (
              <motion.span
                key="m"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu className="h-4.5 w-4.5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Scroll progress bar */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border/50">
        <div
          className="h-full origin-left bg-primary transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-14.25 h-[calc(100vh-57px)] z-40 overflow-y-auto bg-background border-t border-border px-5 py-6 lg:hidden"
          >
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.04 } },
              }}
              className="flex flex-col gap-1.5"
              aria-label="Mobile"
            >
              {NAV.map((n) => {
                const isActive = active === n.href;
                return (
                  <motion.a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    variants={{
                      hidden: { opacity: 0, x: -12 },
                      show: { opacity: 1, x: 0 },
                    }}
                    className={`flex items-center justify-between rounded-lg border px-4 py-3 text-sm transition ${
                      isActive
                        ? "border-primary/40 bg-primary/10 text-foreground"
                        : "border-border/60 bg-surface/40 text-ink-2 hover:border-primary/30 hover:text-foreground"
                    }`}
                  >
                    <span className="font-medium">{n.label}</span>
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition ${
                        isActive ? "bg-primary shadow-[0_0_8px_hsl(var(--primary))]" : "bg-ink-3/40"
                      }`}
                    />
                  </motion.a>
                );
              })}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
              >
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}