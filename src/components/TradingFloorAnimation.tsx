"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./ui/animated-beam";
import { ChartBar, LineChart, ShieldCheck, SearchCheck } from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

export function TradingFloorAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const analystRef = useRef<HTMLDivElement>(null);
  const traderRef = useRef<HTMLDivElement>(null);
  const riskManagerRef = useRef<HTMLDivElement>(null);
  const criticRef = useRef<HTMLDivElement>(null);
  const crewAIHubRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden p-4 bg-gradient-to-br from-amber-500/[0.05] to-orange-500/[0.05] rounded-lg"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-6">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center gap-2">
            <Circle ref={analystRef}>
              <ChartBar className="w-8 h-8 text-blue-600" />
            </Circle>
            <span className="text-xs text-white/60 font-medium">Analyst</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Circle ref={traderRef}>
              <LineChart className="w-8 h-8 text-green-600" />
            </Circle>
            <span className="text-xs text-white/60 font-medium">Trader</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <Circle ref={crewAIHubRef} className="size-16">
              <div className="flex items-center justify-center w-full h-full bg-black rounded-full">
                <span className="text-white font-bold text-lg">C</span>
              </div>
            </Circle>
            <span className="text-xs text-white/60 font-medium">CrewAI Hub</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center gap-2">
            <Circle ref={riskManagerRef}>
              <ShieldCheck className="w-8 h-8 text-red-600" />
            </Circle>
            <span className="text-xs text-white/60 font-medium">Risk Manager</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Circle ref={criticRef}>
              <SearchCheck className="w-8 h-8 text-purple-600" />
            </Circle>
            <span className="text-xs text-white/60 font-medium">Critic</span>
          </div>
        </div>
      </div>
      
      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={analystRef}
        toRef={crewAIHubRef}
        curvature={-75}
        endYOffset={-10}
        gradientStartColor="#3b82f6"
        gradientStopColor="#1e40af"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={traderRef}
        toRef={crewAIHubRef}
        curvature={75}
        endYOffset={-10}
        gradientStartColor="#10b981"
        gradientStopColor="#047857"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={riskManagerRef}
        toRef={crewAIHubRef}
        curvature={-75}
        endYOffset={10}
        gradientStartColor="#ef4444"
        gradientStopColor="#dc2626"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={criticRef}
        toRef={crewAIHubRef}
        curvature={75}
        endYOffset={10}
        gradientStartColor="#8b5cf6"
        gradientStopColor="#7c3aed"
      />
    </div>
  );
}
