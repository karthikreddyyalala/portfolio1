"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface BitmojiAvatarProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "floating" | "hero";
  delay?: number;
}

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-72 h-72 lg:w-96 lg:h-96",
};

export function BitmojiAvatar({
  className,
  size = "lg",
  variant = "hero",
  delay = 0,
}: BitmojiAvatarProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const motionProps = {
    hero: {
      initial: { opacity: 0, scale: 0.92, y: 30 },
      animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 1.1, delay, ease: [0.25, 0.4, 0.25, 1] as any },
      },
    },
    floating: {
      initial: { opacity: 0, scale: 0.9, y: 20 },
      animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] as any },
      },
    },
    default: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } },
    },
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <motion.div
      {...motionProps[variant]}
      onMouseEnter={handleMouseEnter}
      className={cn("relative cursor-pointer", sizeClasses[size], className)}
    >
      {/* Soft radial glow — blends avatar into the dark background */}
      <div className="absolute inset-0 rounded-full bg-indigo-500/[0.06] blur-2xl scale-125 pointer-events-none" />

      {/* Video container — clipped to circle, no hard edges */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          maskImage: "radial-gradient(ellipse 88% 92% at 50% 48%, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 88% 92% at 50% 48%, black 60%, transparent 100%)",
        }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          style={{
            objectFit: "contain",
            objectPosition: "center 10%",
            transform: "scale(1.15)",
            transformOrigin: "center 45%",
          }}
        >
          <source src="/EmojiMovie781468065.MOV" type="video/mp4" />
          <source src="/EmojiMovie781468065.MOV" type="video/quicktime" />
        </video>
      </div>
    </motion.div>
  );
}
