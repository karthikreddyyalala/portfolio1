"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  projectType: string;
  className?: string;
}

export function ProjectImage({ projectType, className }: ProjectImageProps) {
  const getProjectVisual = () => {
    switch (projectType) {
      case "career-twin":
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-slate-900/90 to-blue-900/90 rounded-lg overflow-hidden">
            <img
              src="/images/projects/career-digital-twin.jpg"
              alt="Career Digital Twin Interface"
              className="w-full h-full object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        );

      case "research-agent":
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-slate-900/90 to-blue-900/90 rounded-lg overflow-hidden">
            <img
              src="/images/projects/deep-research-team.png"
              alt="Deep Research Team Interface"
              className="w-full h-full object-cover object-center rounded-lg"
            />
            {/* Subtle overlay for better text readability */}
            <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
          </div>
        );

      case "trading-floor":
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-slate-800 via-gray-900 to-black rounded-lg overflow-hidden">
            {/* Simplified Background Particles */}
            <div className="absolute inset-0">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                  style={{
                    left: `${20 + (i * 10)}%`,
                    top: `${15 + (i * 12)}%`,
                  }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Central Trading Hub */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Main Hub Circle */}
                <div className="w-16 h-16 border-2 border-cyan-400 rounded-full flex items-center justify-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                  <span className="text-cyan-400 text-lg">⚡</span>
                </div>
                
                {/* Orbiting Trading Agents */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      transformOrigin: "0 40px",
                      transform: `rotate(${i * 120}deg) translateY(-40px)`,
                    }}
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      boxShadow: [
                        "0 0 10px rgba(251, 191, 36, 0.5)",
                        "0 0 20px rgba(251, 191, 36, 0.8)",
                        "0 0 10px rgba(251, 191, 36, 0.5)"
                      ],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-white text-xs">
                      {i === 0 ? "📊" : i === 1 ? "💰" : i === 2 ? "⚡" : i === 3 ? "🎯" : i === 4 ? "📈" : "🔍"}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Market Data Streams */}
            <div className="absolute top-4 left-4 right-4 h-2 bg-gradient-to-r from-green-400/30 via-yellow-400/30 to-red-400/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-red-400 rounded-full"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4 h-2 bg-gradient-to-r from-red-400/30 via-yellow-400/30 to-green-400/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-red-400 to-green-400 rounded-full"
                animate={{
                  x: ["100%", "-100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            {/* Corner Indicators */}
            <div className="absolute top-2 left-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
        );

      case "chatify":
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-slate-900/90 to-blue-900/90 rounded-lg overflow-hidden">
            <img
              src="/images/projects/chatify.png"
              alt="Chatify Real-Time Messaging Platform"
              className="w-full h-full object-cover object-center rounded-lg"
            />
            <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
          </div>
        );

      case "stock-predictor":
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-violet-500/20 to-pink-600/20 rounded-lg overflow-hidden">
            {/* Neural Network Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* LSTM Layers */}
                <div className="flex space-x-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-6 h-12 bg-violet-400 rounded"
                      animate={{
                        scaleY: [0.8, 1.2, 0.8],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2.5,
                        delay: i * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
                {/* Data Flow */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    className="w-2 h-2 bg-pink-400 rounded-full"
                    animate={{
                      y: [0, 20, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>
            </div>
            {/* Simplified Prediction Chart */}
            <div className="absolute bottom-2 left-2 right-2 h-8 bg-white/10 rounded flex items-end justify-between px-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-gradient-to-t from-violet-400 to-pink-400 rounded-t"
                  style={{ height: `${25 + (i * 8)}%` }}
                />
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      className={cn("relative w-full h-full group overflow-hidden rounded-lg", className)}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
      }}
      transition={{ 
        duration: 0.4,
        ease: "easeOut"
      }}
    >
      {getProjectVisual()}
      
      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <div className="absolute bottom-4 left-4 right-4">
          <motion.div 
            className="text-white text-sm font-medium"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            {projectType === "career-twin" && "AI Interview Assistant"}
            {projectType === "research-agent" && "Multi-Agent Research System"}
            {projectType === "trading-floor" && "Autonomous Trading Platform"}
            {projectType === "stock-predictor" && "LSTM Neural Network"}
            {projectType === "chatify" && "Real-Time Messaging Platform"}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
