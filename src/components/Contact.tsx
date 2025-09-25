"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ui/scroll-reveal";
import TerminalCard from "./ui/TerminalCard";

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
}

interface ContactProps {
  contactInfo: ContactInfo;
}

export function Contact({ contactInfo }: ContactProps) {
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

  const socialLinks = [
    { icon: Linkedin, href: contactInfo.linkedin, label: "LinkedIn" },
    { icon: Github, href: contactInfo.github, label: "GitHub" },
    { icon: Instagram, href: contactInfo.instagram, label: "Instagram" },
  ].filter(link => link.href);

  return (
    <section className="relative pt-4 pb-12 md:pt-6 md:pb-16 bg-[#030303] overflow-hidden">
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
              baseRotation={1}
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
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
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
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-violet-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
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
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-amber-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
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
                        className="w-10 h-10 bg-white/[0.08] border border-white/[0.15] rounded-lg flex items-center justify-center hover:bg-white/[0.12] transition-all duration-300 group"
                      >
                        <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
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
              <div className="bg-gradient-to-br from-indigo-500/[0.1] to-rose-500/[0.1] border border-white/[0.08] rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Start a Project?
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  I&apos;m always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className="space-y-4">
                  <a
                    href={`mailto:${contactInfo.email}?subject=Let&apos;s work together!`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-rose-500 text-white rounded-lg hover:from-indigo-600 hover:to-rose-600 transition-all duration-300 font-medium"
                  >
                    <Mail className="w-4 h-4" />
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
