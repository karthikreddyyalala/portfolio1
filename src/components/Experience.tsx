"use client";

import { ScrollTimeline } from "@/components/lightswind/scroll-timeline";
import { experienceData } from "@/data/experience";

interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  description?: string;
}

interface ExperienceProps {
  experiences?: Experience[];
  education?: Education[];
}

export function Experience({ experiences, education }: ExperienceProps) {
  return (
    <ScrollTimeline
      events={experienceData}
      title="My Journey"
      subtitle="Scroll to explore my professional and educational timeline"
      animationOrder="sequential"
      cardAlignment="alternating"
      lineColor="bg-gradient-to-b from-cyan-500/30 to-purple-500/30"
      activeColor="bg-gradient-to-b from-cyan-500 to-purple-500"
      progressIndicator={true}
      cardVariant="elevated"
      cardEffect="glow"
      parallaxIntensity={0.1}
      progressLineWidth={3}
      progressLineCap="round"
      dateFormat="badge"
      revealAnimation="slide"
      connectorStyle="line"
      perspective={true}
      darkMode={true}
      smoothScroll={true}
      className="bg-[#030303]"
    />
  );
}
