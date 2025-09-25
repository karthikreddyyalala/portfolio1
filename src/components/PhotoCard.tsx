"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhotoCardProps {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "floating" | "hero";
  delay?: number;
}

export function PhotoCard({
  src,
  alt,
  className,
  size = "md",
  variant = "default",
  delay = 0,
}: PhotoCardProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-40 h-40",
  };

  const variants = {
    default: {
      initial: { opacity: 0, scale: 0.8, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      hover: { scale: 1.05, y: -5 },
    },
    floating: {
      initial: { opacity: 0, scale: 0.8, y: 30, rotate: -5 },
      animate: { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        rotate: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.25, 0.4, 0.25, 1] as any,
        }
      },
      hover: { 
        scale: 1.1, 
        y: -10, 
        rotate: 2,
        transition: { duration: 0.3 }
      },
    },
    hero: {
      initial: { opacity: 0, scale: 0.9, y: 50 },
      animate: { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: {
          duration: 1.2,
          delay,
          ease: [0.25, 0.4, 0.25, 1] as any,
        }
      },
      hover: { 
        scale: 1.02, 
        y: -8,
        transition: { duration: 0.4 }
      },
    },
  };

  const currentVariant = variants[variant];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={cn(
        "relative group cursor-pointer",
        sizeClasses[size],
        className
      )}
    >
      {/* Simplified Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/10 to-rose-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Main image container */}
      <motion.div
        className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/[0.15] bg-gradient-to-br from-white/[0.1] to-white/[0.05] backdrop-blur-sm"
        variants={currentVariant}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </motion.div>

    </motion.div>
  );
}


