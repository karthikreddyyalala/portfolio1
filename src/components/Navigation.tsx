"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  name: string;
}

export function Navigation({ name }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/resume.pdf", download: true },
  ];

  const SimpleNavItem = ({ item, index }: { item: (typeof navItems)[0]; index: number }) => {
    const isDownload = "download" in item && item.download;
    if (isDownload) {
      return (
        <a
          href={item.href}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.07] border border-white/[0.12] text-white/80 text-sm font-medium hover:bg-white/[0.11] hover:border-white/20 hover:text-white/90 active:scale-[0.98] transition-all duration-300"
          style={{ transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          {item.name}
        </a>
      );
    }
    return (
      <a
        href={item.href}
        className="relative text-white/60 hover:text-white/90 transition-colors text-sm font-medium px-3 py-2 group"
        style={{ transition: "color 0.25s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        {item.name}
        <span className="absolute bottom-1 left-3 right-3 h-px bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }} />
      </a>
    );
  };

  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Main navigation"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#030303]/80 backdrop-blur-md border-b border-white/[0.08]"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="text-lg md:text-xl font-bold tracking-tight">
            <a
              href="#home"
              className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300 hover:opacity-80 transition-opacity duration-300"
            >
              {name}
            </a>
          </div>

                      {/* Desktop Navigation */}
                      <div className="hidden md:flex items-center space-x-2">
                        {navItems.map((item, index) => (
                          <SimpleNavItem key={item.name} item={item} index={index} />
                        ))}
                      </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden text-white/60 hover:text-white/80 transition-colors rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden py-4 space-y-1 border-t border-white/[0.08] mt-2">
            {navItems.map((item) => {
              const isDownload = "download" in item && item.download;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  {...(isDownload ? { download: true, target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => setIsOpen(false)}
                  className="block text-white/60 hover:text-white/80 transition-colors duration-200 text-sm font-medium px-4 py-3"
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}


