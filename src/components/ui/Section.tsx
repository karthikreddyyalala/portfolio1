import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  /** Two-digit marker, e.g. "02". */
  index: string;
  label: string;
  title: string;
  lede?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Section shell. Server component — the only client code is the Reveal leaf.
 *
 * Headings are left-aligned rather than centered: a centered heading over
 * left-aligned body copy is the most common tell of a template.
 */
export function Section({
  id,
  index,
  label,
  title,
  lede,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-36 ${className}`}>
      <div className="shell">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span>{index}</span>
            <span aria-hidden className="h-px w-8 bg-[var(--line-hi)]" />
            <span>{label}</span>
          </p>
        </Reveal>

        <div className="mt-5 grid gap-6 md:grid-cols-12 md:items-end">
          <Reveal delay={60} className="md:col-span-7">
            <h2 className="h-section text-[clamp(2rem,4.5vw,3.25rem)]">{title}</h2>
          </Reveal>
          {lede ? (
            <Reveal delay={120} className="md:col-span-5">
              <p className="prose-body text-[15px]">{lede}</p>
            </Reveal>
          ) : null}
        </div>

        <div className="mt-14 md:mt-20">{children}</div>
      </div>
    </section>
  );
}
