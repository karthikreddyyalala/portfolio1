"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award } from "lucide-react";
import { ScrollReveal } from "./ui/scroll-reveal";

export interface Certification {
  name: string;
  issuer: string;
  badgeImage: string;
  year?: string;
  verifyUrl?: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

function CertBadgeCard({ cert, index }: { cert: Certification; index: number }) {
  const cardInner = (
    <div className="group relative w-full max-w-[320px] rounded-2xl bg-[#030303] overflow-hidden
      bg-white/[0.04] border border-white/[0.07]
      hover:border-[#FF9900]/35
      hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)]
      transition-all duration-500 cursor-default"
      style={{ transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}>

      {/* Ambient AWS orange glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
        bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,153,0,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Badge area */}
      <div className="relative flex items-center justify-center px-8 pt-8 pb-4">
        {/* Pulsing glow ring behind the badge */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="badge-pulse-ring w-[180px] h-[180px] rounded-full" />
        </div>

        {/* Badge image */}
        <div className="relative w-[160px] h-[160px]">
          <Image
            src={cert.badgeImage}
            alt={`${cert.name} badge`}
            fill
            className="object-contain drop-shadow-[0_0_20px_rgba(255,153,0,0.35)]"
            sizes="160px"
            priority
            draggable={false}
          />
        </div>
      </div>

      {/* Text content */}
      <div className="px-6 pb-7 pt-1 flex flex-col items-center text-center">
        <div className="flex items-center gap-1.5 mb-2">
          <Award className="w-3.5 h-3.5 text-[#FF9900] flex-shrink-0" />
          <span className="text-[#FF9900] text-xs font-semibold uppercase tracking-widest">
            {cert.issuer}
          </span>
        </div>
        <h3 className="text-white font-semibold text-base md:text-lg leading-snug mb-1.5">
          {cert.name}
        </h3>
        {cert.year && (
          <span className="text-xs text-white/40 font-medium tracking-wide">{cert.year}</span>
        )}
      </div>
    </div>
  );

  const motionProps = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] as const },
    className: "flex justify-center",
  };

  return cert.verifyUrl ? (
    <motion.a
      key={cert.name}
      {...motionProps}
      href={cert.verifyUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {cardInner}
    </motion.a>
  ) : (
    <motion.div key={cert.name} {...motionProps}>
      {cardInner}
    </motion.div>
  );
}

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <section
      id="certifications"
      className="relative py-24 md:py-28 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF9900]/[0.03] via-transparent to-purple-500/[0.03] blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-12 md:mb-16">
            <ScrollReveal
              size="xl"
              align="center"
              variant="default"
              enableBlur={true}
              baseOpacity={0.1}
              blurStrength={2}
              staggerDelay={0.06}
              springConfig={{ damping: 25, stiffness: 100, mass: 1 }}
              textClassName="bg-clip-text text-transparent bg-gradient-to-r from-[#FF9900] via-white to-orange-300"
            >
              Certifications
            </ScrollReveal>
            <ScrollReveal
              size="md"
              align="center"
              variant="muted"
              enableBlur={true}
              baseOpacity={0.2}
              blurStrength={1}
              staggerDelay={0.03}
              springConfig={{ damping: 30, stiffness: 120, mass: 0.8 }}
              containerClassName="mt-4"
            >
              A showcase of my credentials and achievements
            </ScrollReveal>
          </div>

          {/* Badge cards */}
          <div className={`grid gap-6 place-items-center ${certifications.length === 1 ? "grid-cols-1 max-w-xs mx-auto" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
            {certifications.map((cert, i) => (
              <CertBadgeCard key={cert.name} cert={cert} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
