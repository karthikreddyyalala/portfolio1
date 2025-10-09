"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface BitmojiAvatarProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "floating" | "hero";
  delay?: number;
}

export function BitmojiAvatar({
  className,
  size = "lg",
  variant = "hero",
  delay = 0,
}: BitmojiAvatarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play video on component mount
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (videoRef.current && !hasPlayedOnce) {
        try {
          videoRef.current.currentTime = 0;
          await videoRef.current.play();
        } catch (error) {
          console.log('Autoplay prevented, will play on user interaction');
        }
      }
    }, delay * 1000 + 1000); // Wait for delay + 1 second

    // Add global click handler for first interaction
    const handleFirstInteraction = async () => {
      if (videoRef.current && !hasPlayedOnce) {
        try {
          videoRef.current.currentTime = 0;
          await videoRef.current.play();
          document.removeEventListener('click', handleFirstInteraction);
          document.removeEventListener('touchstart', handleFirstInteraction);
        } catch (error) {
          console.log('Video play failed');
        }
      }
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [delay, hasPlayedOnce]);
  
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24", 
    lg: "w-32 h-32",
    xl: "w-64 h-64 lg:w-80 lg:h-80",
  };

  const variants = {
    default: {
      initial: { opacity: 0, scale: 0.8, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      hover: { scale: 1.05, y: -5 },
    },
    floating: {
      initial: { opacity: 0, scale: 0.8, y: 30, rotate: -5 },
      animate: { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        rotate: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.25, 0.4, 0.25, 1] as any,
        }
      },
      hover: { 
        scale: 1.1, 
        y: -10, 
        rotate: 2,
        transition: { duration: 0.3 }
      },
    },
    hero: {
      initial: { opacity: 0, scale: 0.9, y: 50 },
      animate: { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: {
          duration: 1.2,
          delay,
          ease: [0.25, 0.4, 0.25, 1] as any,
        }
      },
      hover: { 
        scale: 1.02, 
        y: -8,
        transition: { duration: 0.4 }
      },
    },
  };

  const currentVariant = variants[variant];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={cn(
        "relative group cursor-pointer",
        sizeClasses[size],
        className
      )}
    >
      {/* Clean glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Main avatar container */}
      <motion.div
        className="relative w-full h-full overflow-hidden"
        variants={currentVariant}
        style={{
          aspectRatio: '1/1',
          overflow: 'hidden'
        }}
      >
        {/* Default Bitmoji Image */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: hasPlayedOnce ? (isHovered ? 0 : 1) : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            backgroundColor: 'transparent',
            mixBlendMode: 'normal'
          }}
        >
          <Image
            src="/bitmoji-image.jpg"
            alt="Bitmoji Avatar"
            fill
            className="object-cover"
            style={{
              objectFit: 'contain',
              objectPosition: 'center',
              width: '100%',
              height: '100%',
              minWidth: '100%',
              minHeight: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              transform: 'scale(2.3)',
              transformOrigin: 'center',
              backgroundColor: 'transparent',
              mixBlendMode: 'normal'
            }}
            sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
          />
        </motion.div>
        
        {/* Video overlay - shows initially and on hover */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: hasPlayedOnce ? (isHovered ? 1 : 0) : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            aspectRatio: '1/1',
            backgroundColor: 'transparent',
            mixBlendMode: 'normal'
          }}
          onMouseEnter={async () => {
            setIsHovered(true);
            if (videoRef.current) {
              try {
                videoRef.current.currentTime = 0;
                await videoRef.current.play();
              } catch (error) {
                console.log('Video play failed');
              }
            }
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }}
          onClick={async () => {
            if (videoRef.current) {
              try {
                videoRef.current.currentTime = 0;
                await videoRef.current.play();
              } catch (error) {
                console.log('Video play failed');
              }
            }
          }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            loop={false}
            playsInline
            preload="auto"
            onEnded={() => {
              setHasPlayedOnce(true);
            }}
            onError={(e) => {
              console.log('Video error:', e);
            }}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              width: '100%',
              height: '100%',
              minWidth: '100%',
              minHeight: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              transform: 'scale(1.1)',
              transformOrigin: 'center',
              backgroundColor: 'transparent',
              mixBlendMode: 'normal'
            }}
          >
            <source src="/EmojiMovie781468065.MOV" type="video/mp4" />
            <source src="/EmojiMovie781468065.MOV" type="video/quicktime" />
          </video>
        </motion.div>
        
      </motion.div>
    </motion.div>
  );
}
