"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Background opacity goes from 0 to 0.75 as user scrolls down to 100px
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.75]);
  const blur = useTransform(scrollY, [0, 100], [0, 12]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      style={{
        backgroundColor: `rgba(5, 5, 5, ${bgOpacity.get()})`,
        backdropFilter: `blur(${blur.get()}px)`,
        WebkitBackdropFilter: `blur(${blur.get()}px)`,
      }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-14 w-full transition-all duration-300 border-b border-transparent"
    >
      {/* Left: Logo / Branding */}
      <div className="flex items-center">
        <Link href="/" className="font-semibold text-white/90 tracking-tight text-lg">
          WH‑1000XM6
        </Link>
      </div>

      {/* Center: Navigation Links (Desktop) */}
      <div className="hidden md:flex items-center space-x-8">
        {["Overview", "Technology", "Noise Cancelling", "Specs"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-200"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Right: CTA Button */}
      <div className="flex items-center space-x-4">
        <Link
          href="#buy"
          className="group relative inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-white transition-all duration-200 bg-white/10 rounded-full hover:bg-white/20 border border-white/10 hover:border-white/30"
        >
          <span className="relative z-10 flex items-center gap-1">
            Experience <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Link>
      </div>
    </motion.nav>
  );
}
