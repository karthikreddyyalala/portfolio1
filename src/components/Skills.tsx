"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ui/scroll-reveal";
import { getSkillIcon } from "@/lib/skill-icons";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsProps {
  skills: Skill[];
}

function FallbackSkillIcon({ name }: { name: string }) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold bg-white/[0.08] border border-white/10 text-white/80 shrink-0"
      aria-hidden
    >
      {initial}
    </div>
  );
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="relative py-24 md:py-28 bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <ScrollReveal
            size="xl"
            align="center"
            variant="default"
            enableBlur={true}
            baseOpacity={0.1}
            blurStrength={2}
            staggerDelay={0.06}
            springConfig={{ damping: 25, stiffness: 100, mass: 1 }}
            textClassName="bg-clip-text text-transparent bg-gradient-to-r from-rose-300 via-white to-violet-300"
          >
            Skills & Expertise
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
            Technologies and tools I work with every day
          </ScrollReveal>
        </div>

        {/* Scrolling marquee - two copies for seamless loop */}
        <div className="relative -mx-4 md:-mx-6">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <motion.div
              className="flex gap-4 shrink-0 pr-4"
              animate={{ x: [0, -((skills.length * 136) + 16)] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
            >
              {[1, 2].map((copy) => (
                <div key={copy} className="flex gap-4 shrink-0">
                  {skills.map((skill) => {
                    const iconUrl = getSkillIcon(skill.name);
                    return (
                      <div
                        key={`${copy}-${skill.name}`}
                        className="flex items-center gap-2.5 shrink-0 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-300"
                      style={{ transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
                      >
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-white/[0.04] p-1">
                          {iconUrl ? (
                            <img
                              src={iconUrl}
                              alt=""
                              width={40}
                              height={40}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <FallbackSkillIcon name={skill.name} />
                          )}
                        </div>
                        <span className="text-white/90 text-sm font-medium whitespace-nowrap">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Category list below - minimal, no icons */}
        <motion.div
          className="mt-14 pt-10 border-t border-white/[0.06]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap justify-center gap-x-1 gap-y-2 text-sm">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="text-white/50 hover:text-white/90 transition-colors after:content-['·'] after:ml-1 after:text-white/30 last:after:content-['']"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
