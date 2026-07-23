export default function SectionLabel({ n, children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs font-medium text-primary">{n}</span>
      <span className="h-px w-8 bg-border" />
      <span className="mono-label text-ink-2!">{children}</span>
    </div>
  );
}
