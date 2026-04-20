"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "../../lib/utils";

export interface ScrollRevealProps {
  children: React.ReactNode;
  containerClassName?: string;
  textClassName?: string;
  enableBlur?: boolean;
  baseOpacity?: number;
  blurStrength?: number;
  staggerDelay?: number;
  threshold?: number;
  duration?: number;
  springConfig?: { damping?: number; stiffness?: number; mass?: number };
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  align?: "left" | "center" | "right";
  variant?: "default" | "muted" | "accent" | "primary";
}

const sizeClasses = {
  sm: "text-lg md:text-xl",
  md: "text-xl md:text-2xl lg:text-3xl",
  lg: "text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
  xl: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
  "2xl": "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const variantClasses = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  accent: "text-accent-foreground",
  primary: "text-primary",
};

export function ScrollReveal({
  children,
  containerClassName,
  textClassName,
  threshold = 0.2,
  duration = 0.7,
  size = "lg",
  align = "left",
  variant = "default",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const sharedClass = cn(
    "leading-relaxed font-semibold",
    sizeClasses[size],
    alignClasses[align],
    variantClasses[variant],
    textClassName,
  );

  return (
    <div ref={ref} className={cn("my-5", containerClassName)}>
      <motion.div
        className={sharedClass}
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default ScrollReveal;
