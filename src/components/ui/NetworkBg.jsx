import { motion } from "framer-motion";

export default function NetworkBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.35]" viewBox="0 0 800 600" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ln" x1="0" x2="1">
            <stop offset="0" stopColor="oklch(0.82 0.19 158)" stopOpacity="0" />
            <stop offset="0.5" stopColor="oklch(0.82 0.19 158)" stopOpacity="0.9" />
            <stop offset="1" stopColor="oklch(0.82 0.19 158)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={i}
            x1={0}
            y1={80 + i * 90}
            x2={800}
            y2={40 + i * 90}
            stroke="url(#ln)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1] }}
            transition={{ duration: 4, delay: i * 0.4, repeat: Infinity, repeatDelay: 2 }}
          />
        ))}
      </svg>
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/70"
          style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 4 + (i % 5), delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
