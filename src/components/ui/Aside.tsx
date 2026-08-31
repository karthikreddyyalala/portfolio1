import type { ReactNode } from "react";

/**
 * A margin note in the author's voice.
 *
 * Deliberately off the grid: nudged left of the column it sits in and rotated a
 * fraction of a degree, so it reads as something written beside the work rather
 * than another styled block generated with it. The rotation is small enough to
 * register as texture rather than as an effect.
 */
export function Aside({ children }: { children: ReactNode }) {
  return (
    <p
      className="mt-7 max-w-[34ch] border-l pl-4 text-[13px] leading-relaxed md:-ml-2"
      style={{
        borderColor: "var(--accent-dim)",
        color: "var(--muted)",
        transform: "rotate(-0.35deg)",
      }}
    >
      <span aria-hidden className="mono mr-1.5 text-[var(--faint)]">
        —
      </span>
      {children}
    </p>
  );
}
