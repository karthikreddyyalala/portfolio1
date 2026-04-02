"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle, Download } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { cn } from "@/lib/utils";
import { BitmojiAvatar } from "@/components/BitmojiAvatar";


function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 1.5,
                delay,
                ease: [0.25, 0.4, 0.25, 1] as any,
                opacity: { duration: 0.8 },
            }}
            className={cn("absolute", className)}
        >
            <div
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </div>
        </motion.div>
    );
}

function HeroGeometric({
    badge,
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
    subtitle,
    showPhoto = false,
}: {
    badge?: string;
    title1?: string;
    title2?: string;
    subtitle?: string;
    showPhoto?: boolean;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.9,
                delay: 0.2 + i * 0.05,
                ease: [0.16, 1, 0.3, 1] as any,
            },
        }),
    };

    return (
        <div className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.04] via-transparent to-rose-500/[0.04] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={400}
                    height={100}
                    rotate={12}
                    gradient="from-indigo-500/[0.1]"
                    className="left-[-5%] top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={300}
                    height={80}
                    rotate={-15}
                    gradient="from-rose-500/[0.1]"
                    className="right-[-5%] top-[70%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="text-center lg:text-left">
                            <motion.div
                                custom={0}
                                variants={fadeUpVariants}
                                initial="hidden"
                                animate="visible"
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] mb-8 md:mb-12"
                            >
                                <Circle className="h-1.5 w-1.5 fill-rose-400/90" />
                                <span className="text-[11px] font-semibold text-white/50 tracking-[0.18em] uppercase">
                                    {badge}
                                </span>
                            </motion.div>

                            <motion.h2
                                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 md:mb-3 tracking-tighter leading-none"
                                variants={fadeUpVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <span className="text-white">
                                    {title1}
                                </span>
                            </motion.h2>

                            <motion.h1
                                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tighter leading-none"
                                variants={fadeUpVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/95 to-rose-300">
                                    {title2}
                                </span>
                            </motion.h1>

                            {/* Headline below the name */}
                            <motion.div
                                custom={1}
                                variants={fadeUpVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-wrap justify-center gap-3 mb-8"
                            >
                                <span className="px-4 py-1.5 bg-white/[0.04] border border-white/[0.1] rounded-full text-white/50 text-[11px] font-semibold tracking-[0.14em] uppercase">
                                    Computer Science Student · Software Engineer
                                </span>
                            </motion.div>

                            <motion.div
                                custom={2}
                                variants={fadeUpVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <p className="text-base sm:text-lg md:text-xl text-white/50 mb-6 leading-relaxed font-light tracking-wide max-w-xl mx-auto lg:mx-0 px-4 lg:px-0">
                                    CS student at ASU building AI agents, full-stack apps,
                                    and scalable backend systems.
                                </p>
                                <a
                                    href="/resume.pdf"
                                    download="KarthikReddy-Yalala-Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-white/80 text-sm font-medium hover:bg-white/[0.11] hover:border-white/25 hover:text-white active:scale-[0.98] transition-all duration-300"
                                    style={{ transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
                                >
                                    <span className="w-6 h-6 rounded-full bg-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.13] transition-colors duration-300">
                                        <Download className="w-3 h-3" />
                                    </span>
                                    Download Resume
                                </a>
                            </motion.div>
                        </div>

                        {/* Bitmoji Avatar Section */}
                        {showPhoto && (
                            <motion.div
                                custom={3}
                                variants={fadeUpVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex justify-center lg:justify-end"
                            >
                                <div className="relative">
                                    {/* Floating particles */}
                                    <motion.div
                                        className="absolute -top-4 -right-4 w-4 h-4 bg-indigo-400 rounded-full opacity-60"
                                        animate={{
                                            y: [0, -15, 0],
                                            opacity: [0.6, 1, 0.6],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: 0.5,
                                        }}
                                    />
                                    <motion.div
                                        className="absolute -bottom-2 -left-2 w-3 h-3 bg-rose-400 rounded-full opacity-60"
                                        animate={{
                                            y: [0, -12, 0],
                                            opacity: [0.6, 1, 0.6],
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            delay: 1,
                                        }}
                                    />
                                    
                                    <BitmojiAvatar
                                        size="xl"
                                        variant="hero"
                                        delay={0.8}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }
