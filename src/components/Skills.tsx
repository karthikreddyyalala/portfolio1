"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ui/scroll-reveal";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
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

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section className="relative py-12 md:py-16 bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.03] via-transparent to-violet-500/[0.03] blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal
              size="xl"
              align="center"
              variant="default"
              enableBlur={true}
              baseOpacity={0.1}
              baseRotation={1}
              blurStrength={2}
              staggerDelay={0.06}
              springConfig={{
                damping: 25,
                stiffness: 100,
                mass: 1,
              }}
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
              baseRotation={0.5}
              blurStrength={1}
              staggerDelay={0.03}
              springConfig={{
                damping: 30,
                stiffness: 120,
                mass: 0.8,
              }}
              containerClassName="mt-6"
            >
              A comprehensive overview of my technical skills and professional expertise
            </ScrollReveal>
          </div>

          <div className="space-y-12">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                custom={categoryIndex + 1}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        custom={skillIndex + 1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 hover:bg-white/[0.05] transition-all duration-300"
                      >
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium text-base">
                              {skill.name}
                            </span>
                            <span className="text-white/60 text-sm font-semibold">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-white/[0.1] rounded-full h-2">
                            <motion.div
                              className="h-2 rounded-full bg-gradient-to-r from-rose-500 to-violet-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: 0.5 + skillIndex * 0.1 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
