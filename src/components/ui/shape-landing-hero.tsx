"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle } from "lucide-react";
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
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.3 + i * 0.1,
                ease: [0.25, 0.4, 0.25, 1] as any,
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

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
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
                            >
                                <Circle className="h-2 w-2 fill-rose-500/80" />
                                <span className="text-sm text-white/60 tracking-wide">
                                    {badge}
                                </span>
                            </motion.div>

                            <motion.h1 
                                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight"
                                variants={fadeUpVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                    {title1}
                                </span>
                            </motion.h1>
                            
                            <motion.h1 
                                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight"
                                variants={fadeUpVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                                    {title2}
                                </span>
                            </motion.h1>

                            {/* Tags below the name */}
                            <motion.div
                                custom={1}
                                variants={fadeUpVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-wrap justify-center gap-3 mb-8"
                            >
                                <span className="px-4 py-2 bg-white/[0.08] border border-white/[0.15] rounded-full text-white/80 text-sm font-medium">
                                    Data Analyst
                                </span>
                                <span className="px-4 py-2 bg-white/[0.08] border border-white/[0.15] rounded-full text-white/80 text-sm font-medium">
                                    AI/ML Engineer
                                </span>
                            </motion.div>

                            <motion.div
                                custom={2}
                                variants={fadeUpVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto lg:mx-0 px-4 lg:px-0">
                                    Crafting exceptional digital experiences through
                                    innovative design and cutting-edge technology.
                                </p>
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
