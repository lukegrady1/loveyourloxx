import type { ReactNode } from "react";

export type FaqItem = { q: string; a: ReactNode };

export function Faq({ items, className = "", dark, compact }: { items: FaqItem[]; className?: string; dark?: boolean; compact?: boolean }) {
  return (
    <div className={`faq border-t border-cream-3 ${dark ? "faq-dark !border-white/10" : ""} ${compact ? "faq-compact" : ""} ${className}`}>
      {items.map(({ q, a }) => (
        <details key={q}>
          <summary>
            {q}
            <span className="plus" aria-hidden="true" />
          </summary>
          <div className="faq-body">{a}</div>
        </details>
      ))}
    </div>
  );
}
