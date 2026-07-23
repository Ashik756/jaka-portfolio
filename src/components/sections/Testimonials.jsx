import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Reveal from "../ui/Reveal.jsx";
import SectionLabel from "../ui/SectionLabel.jsx";
import { TESTIMONIALS } from "../../data/portfolio.js";

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[i];
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionLabel n="07">Testimonials</SectionLabel>
      </Reveal>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <motion.blockquote
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl font-display text-3xl leading-snug sm:text-4xl"
        >
          <span className="text-primary">"</span>
          {t.quote}
          <span className="text-primary">"</span>
        </motion.blockquote>
        <div className="flex items-center gap-4">
          <div>
            <div className="flex gap-0.5 text-primary">
              {[...Array(5)].map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <div className="mt-2 text-sm text-foreground">{t.author}</div>
            <div className="mono-label">{t.role}</div>
          </div>
          <div className="ml-6 flex gap-2">
            {TESTIMONIALS.map((_, n) => (
              <button
                key={n}
                onClick={() => setI(n)}
                aria-label={`Show testimonial ${n + 1}`}
                className={`h-1.5 rounded-full transition-all ${n === i ? "w-8 bg-primary" : "w-4 bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
