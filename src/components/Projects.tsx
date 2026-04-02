"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProjectImage } from "./ProjectImage";
import { TradingFloorAnimation } from "./TradingFloorAnimation";
import { ScrollReveal } from "./ui/scroll-reveal";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  projectType: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        delay: 0.15 + i * 0.05,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    }),
  };

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="relative py-24 md:py-32 bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.03] via-transparent to-amber-500/[0.03] blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
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
              textClassName="bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-white to-amber-300"
            >
              Featured Projects
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
              A showcase of my most impactful work and creative solutions
            </ScrollReveal>
          </div>

          {/* Featured Projects */}
          <div className="space-y-16 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                custom={index + 1}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={cn(
                  "grid md:grid-cols-2 gap-8 items-center",
                  index % 2 === 1 && "md:grid-flow-col-dense"
                )}
              >
                <div className={cn("space-y-6", index % 2 === 1 && "md:col-start-2")}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
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
                      textClassName="text-white/70 leading-relaxed mb-6 text-base"
                    >
                      {project.description}
                    </ScrollReveal>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: techIndex * 0.08,
                          duration: 0.3,
                          ease: "easeOut"
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="group"
                      >
                        <span className="px-3 py-1 bg-white/[0.08] border border-white/[0.15] rounded-full text-white/70 hover:text-white/80 transition-all duration-300 cursor-default text-sm font-medium">
                          {tech}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.07] border border-white/[0.14] text-white/80 text-sm font-medium hover:bg-white/[0.11] hover:border-white/22 hover:text-white active:scale-[0.98] transition-all duration-300"
                        style={{ transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
                      >
                        <span className="w-6 h-6 rounded-full bg-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.13] transition-colors duration-300">
                          <Github className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                        Source Code
                      </a>
                    )}
                  </div>
                </div>

                <div className={cn("relative", index % 2 === 1 && "md:col-start-1")}>
                  {project.projectType === "trading-floor" ? (
                    <div className="aspect-video bg-gradient-to-br from-indigo-500/[0.08] to-rose-500/[0.08] rounded-2xl border border-white/[0.07] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                      <TradingFloorAnimation />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-indigo-500/[0.08] to-rose-500/[0.08] rounded-2xl border border-white/[0.07] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                      <ProjectImage
                        projectType={project.projectType}
                        className="w-full h-full"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <motion.div
              custom={featuredProjects.length + 1}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
                Other Projects
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    custom={index}
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.11] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 h-full" style={{ transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}>
                      <h4 className="text-xl font-semibold text-white mb-3">
                        {project.title}
                      </h4>
                      <ScrollReveal
                        size="sm"
                        align="left"
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
                        textClassName="text-white/70 mb-4 leading-relaxed text-sm"
                      >
                        {project.description}
                      </ScrollReveal>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              delay: techIndex * 0.08,
                              duration: 0.25,
                              ease: "easeOut"
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="px-2 py-1 bg-white/[0.08] border border-white/[0.15] rounded text-xs text-white/70 hover:text-white/80 transition-all duration-300 cursor-default">
                              {tech}
                            </span>
                          </motion.div>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs text-white/50">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:text-indigo-300 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
