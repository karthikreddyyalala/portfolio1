"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PhotoCard } from "./PhotoCard";
import { ScrollReveal } from "./ui/scroll-reveal";

interface AboutProps {
  name: string;
  title: string;
  description: string;
  experience: string;
  location: string;
}

export function About({
  name,
  title,
  description,
  experience,
  location,
}: AboutProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1] as any,
      },
    }),
  };

  return (
    <section className="relative py-12 md:py-16 bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03] blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 tracking-tight"
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                About Me
              </span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <PhotoCard
                  src="/images/about-photo.jpg"
                  alt={`${name} - ${title}`}
                  size="xl"
                  variant="floating"
                  delay={0.3}
                  className="flex-shrink-0"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {name}
                  </h3>
                  <p className="text-lg text-indigo-300 font-medium mb-4">
                    {title}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-white/60 justify-center md:justify-start">
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-rose-500 rounded-full" />
                      {experience}
                    </span>
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                      {location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-4">
              <ScrollReveal
                size="sm"
                align="left"
                variant="muted"
                enableBlur={true}
                baseOpacity={0.2}
                baseRotation={0.5}
                blurStrength={1}
                staggerDelay={0.04}
                springConfig={{
                  damping: 30,
                  stiffness: 120,
                  mass: 0.8,
                }}
                textClassName="text-white/70 leading-relaxed text-base"
              >
                {description}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
