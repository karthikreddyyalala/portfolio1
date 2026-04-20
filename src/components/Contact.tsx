"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ui/scroll-reveal";
import TerminalCard from "./ui/TerminalCard";

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

interface ContactProps {
  contactInfo: ContactInfo;
}

export function Contact({ contactInfo }: ContactProps) {
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

  const socialLinks = [
    { icon: Linkedin, href: contactInfo.linkedin, label: "LinkedIn" },
    { icon: Github, href: contactInfo.github, label: "GitHub" },
    { icon: Twitter, href: contactInfo.twitter, label: "Twitter" },
  ].filter(link => link.href);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] via-transparent to-indigo-500/[0.03] blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal
              size="xl"
              align="center"
              variant="default"
              enableBlur={true}
              baseOpacity={0.1}
              blurStrength={2}
              staggerDelay={0.06}
              springConfig={{
                damping: 25,
                stiffness: 100,
                mass: 1,
              }}
              textClassName="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white to-indigo-300"
            >
              Get In Touch
            </ScrollReveal>
            <ScrollReveal
              size="md"
              align="center"
              variant="muted"
              enableBlur={true}
              baseOpacity={0.2}
              blurStrength={1}
              staggerDelay={0.03}
              springConfig={{
                damping: 30,
                stiffness: 120,
                mass: 0.8,
              }}
              containerClassName="mt-6"
            >
              Let&apos;s collaborate and bring your ideas to life. I&apos;m always excited to work on new projects.
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/[0.06] border border-white/[0.1] rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-white/70" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-white hover:text-indigo-300 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/[0.06] border border-white/[0.1] rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-white/70" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Phone</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-white hover:text-indigo-300 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/[0.06] border border-white/[0.1] rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white/70" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-white">{contactInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              {socialLinks.length > 0 && (
                <div className="pt-6">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Follow Me
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Connect on ${social.label}`}
                        className="w-11 h-11 bg-white/[0.06] border border-white/[0.1] rounded-full flex items-center justify-center hover:bg-white/[0.1] hover:border-white/[0.18] active:scale-[0.95] transition-all duration-300 group"
                        style={{ transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
                      >
                        <social.icon className="w-4 h-4 text-white/70 group-hover:text-white/80 transition-colors" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)]">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Start a Project?
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  I&apos;m always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className="space-y-4">
                  <a
                    href={`mailto:${contactInfo.email}?subject=Let%27s%20work%20together!`}
                    className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.07] border border-white/[0.14] text-white/80 text-sm font-medium hover:bg-white/[0.11] hover:border-white/[0.22] hover:text-white active:scale-[0.98] transition-all duration-300"
                    style={{ transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
                  >
                    <span className="w-6 h-6 rounded-full bg-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.13] transition-colors duration-300">
                      <Mail className="w-3 h-3" />
                    </span>
                    Send me an email
                  </a>
                  <p className="text-white/60 text-sm">
                    I typically respond within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Terminal Animation - Bottom of Section */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <TerminalCard 
              command="echo 'THANK YOU :)'" 
              language="bash"
              className="max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
