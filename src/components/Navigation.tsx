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
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // Simplified Navigation Item Component
  const SimpleNavItem = ({ item, index }: { item: typeof navItems[0], index: number }) => {
    return (
      <a
        href={item.href}
        className="text-white/70 hover:text-white transition-colors duration-300 font-medium px-4 py-2 rounded-lg"
      >
        {item.name}
      </a>
    );
  };

  return (
    <nav
      ref={navRef}
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
          <div className="text-xl md:text-2xl font-bold">
            <a
              href="#home"
              className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300"
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
            className="md:hidden text-white/70 hover:text-white transition-colors p-2 rounded-lg"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/70 hover:text-white transition-colors duration-300 font-medium px-4 py-3 rounded-lg"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}


