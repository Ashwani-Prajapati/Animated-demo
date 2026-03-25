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
        <Link href="/" className="font-bold text-white tracking-tight text-xl uppercase">
          Siddho Mal Group
        </Link>
      </div>

      {/* Center: Navigation Links (Desktop) */}
      <div className="hidden md:flex items-center space-x-8">
        {["About", "History", "Businesses", "Leadership", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[14px] font-semibold text-white/80 hover:text-[#F59E0B] transition-colors duration-200"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Right: CTA Button */}
      <div className="flex items-center space-x-4 pointer-events-auto">
        <Link
          href="#contact"
          className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 bg-[#2563EB] rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.8)] hover:bg-[#1D4ED8] scale-100 hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-2 tracking-wide">
            Explore <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </div>
    </motion.nav>
  );
}
