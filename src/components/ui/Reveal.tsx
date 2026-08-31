"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger offset in ms. Use the item index times ~60. */
  delay?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Entry animation primitive.
 *
 * The observer only toggles a class — the transition itself runs in CSS on the
 * compositor. Nothing animates per-frame in JS, and the observer disconnects
 * after firing once, so scrolling costs nothing after the reveal.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect the OS setting: show immediately, never observe.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in", "is-settled");
      return;
    }

    let settleTimer = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("is-in");
        observer.disconnect();
        // Drop the compositor layer once the transition has finished.
        settleTimer = window.setTimeout(
          () => el.classList.add("is-settled"),
          700 + delay
        );
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(settleTimer);
    };
  }, [delay]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
