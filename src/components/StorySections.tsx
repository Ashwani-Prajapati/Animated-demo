"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StorySections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. Hero (0 - 8%)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.03, 0.08], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.08], [0, -100]);
  const heroDisplay = useTransform(heroOpacity, (v) => (v > 0 ? "flex" : "none"));

  // GAP: 8% - 15% 

  // 2. Group History (15% - 35%)
  const engOpacity = useTransform(scrollYProgress, [0.15, 0.20, 0.30, 0.35], [0, 1, 1, 0]);
  const engY = useTransform(scrollYProgress, [0.15, 0.20, 0.30, 0.35], [100, 0, 0, -100]);
  const engDisplay = useTransform(engOpacity, (v) => (v > 0 ? "flex" : "none"));

  // GAP: 35% - 40%

  // 3. Core Businesses (40% - 60%)
  const ncOpacity = useTransform(scrollYProgress, [0.40, 0.45, 0.55, 0.60], [0, 1, 1, 0]);
  const ncY = useTransform(scrollYProgress, [0.40, 0.45, 0.55, 0.60], [100, 0, 0, -100]);
  const ncDisplay = useTransform(ncOpacity, (v) => (v > 0 ? "flex" : "none"));

  // GAP: 60% - 65%

  // 4. Vision & Operations (65% - 85%)
  const soundOpacity = useTransform(scrollYProgress, [0.65, 0.70, 0.80, 0.85], [0, 1, 1, 0]);
  const soundY = useTransform(scrollYProgress, [0.65, 0.70, 0.80, 0.85], [100, 0, 0, -100]);
  const soundDisplay = useTransform(soundOpacity, (v) => (v > 0 ? "flex" : "none"));

  // GAP: 85% - 90%

  // 5. CTA (90% - 100%)
  const ctaOpacity = useTransform(scrollYProgress, [0.90, 0.95, 1], [0, 1, 1]);
  const ctaY = useTransform(scrollYProgress, [0.90, 0.95, 1], [100, 0, 0]);
  const ctaDisplay = useTransform(ctaOpacity, (v) => (v > 0 ? "flex" : "none"));

  return (
    <div ref={containerRef} className="relative z-10 w-full" style={{ height: "700vh" }}>
      {/* Invisible Anchor Targets accurately mapped to the new 700vh scale percentages */}
      <div id="about" className="absolute w-full h-[1px] invisible" style={{ top: "0%" }} />
      <div id="history" className="absolute w-full h-[1px] invisible" style={{ top: "23%" }} />
      <div id="businesses" className="absolute w-full h-[1px] invisible" style={{ top: "45%" }} />
      <div id="leadership" className="absolute w-full h-[1px] invisible" style={{ top: "67%" }} />
      <div id="cta" className="absolute w-full h-[1px] invisible" style={{ top: "89%" }} />

      {/* 
        We use a sticky pointer-events-none container to overlay text exactly over the 
        viewport while the user scrolls through the 700vh height.
      */}
      <div className="sticky top-0 left-0 w-full h-screen pointer-events-none flex flex-col justify-center items-center overflow-hidden">
        
        {/* Section 1: Hero */}
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY, display: heroDisplay }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <div className="pointer-events-auto p-4 sm:p-8 rounded-3xl bg-black/40 backdrop-blur-sm border border-white/10 shadow-2xl max-w-4xl w-full mx-auto">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-[#F59E0B] to-[#D97706] mb-4 drop-shadow-2xl uppercase">
              Siddho Mal Group
            </h1>
            <p className="text-lg md:text-3xl text-[#F59E0B] font-semibold mb-4 tracking-wide uppercase">
              A Legacy of Trust & Excellence.
            </p>
            <p className="text-sm md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              A New Delhi-based diversified business conglomerate with a rich heritage spanning over 75 years, redefining excellence across key global industries.
            </p>
          </div>
        </motion.div>

        {/* Section 2: Group History */}
        <motion.div 
          style={{ opacity: engOpacity, y: engY, display: engDisplay }}
          className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-24 max-w-7xl mx-auto w-full"
        >
          <div className="pointer-events-auto max-w-xl p-6 md:p-10 rounded-3xl bg-[#0a1128]/80 backdrop-blur-xl border border-[#2563EB]/40 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-[#3B82F6] mb-6 drop-shadow-lg">
              Three Generations of Leadership.
            </h2>
            <div className="space-y-6 text-white/90 text-base md:text-xl leading-relaxed">
              <p>
                Founded before 1935 by Late Mr. Siddho Mal Jain and advanced by his eldest son, Late Mr. Lalit Kumar Jain.
              </p>
              <p>
                Today, the group is headed by Mr. Subodh Kumar Jain, boasting over 40 years of international business acumen and forging robust partnerships with leading global entities.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section 3: Core Businesses */}
        <motion.div 
          style={{ opacity: ncOpacity, y: ncY, display: ncDisplay }}
          className="absolute inset-0 flex flex-col justify-center items-end px-4 md:px-24 max-w-7xl mx-auto w-full"
        >
          <div className="pointer-events-auto max-w-xl text-left md:text-right p-6 md:p-10 rounded-3xl bg-[#050505]/95 backdrop-blur-xl border border-[#F59E0B]/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FCD34D] to-[#F59E0B] mb-6 drop-shadow-lg">
              Diversified Strategic Interests.
            </h2>
            <ul className="space-y-4 text-white/90 text-base md:text-xl leading-relaxed list-none">
              <li className="flex items-start md:items-center justify-start md:justify-end gap-3"><span className="min-w-2 min-h-2 mt-2 md:mt-0 rounded-full bg-[#F59E0B]"></span> SAGE Undersea Gas Pipeline Project (MEIDP)</li>
              <li className="flex items-start md:items-center justify-start md:justify-end gap-3"><span className="min-w-2 min-h-2 mt-2 md:mt-0 rounded-full bg-[#F59E0B]"></span> Industrial Gases: Inox Air Products</li>
              <li className="flex items-start md:items-center justify-start md:justify-end gap-3"><span className="min-w-2 min-h-2 mt-2 md:mt-0 rounded-full bg-[#F59E0B]"></span> Investment & Private Equity</li>
              <li className="flex items-start md:items-center justify-start md:justify-end gap-3"><span className="min-w-2 min-h-2 mt-2 md:mt-0 rounded-full bg-[#F59E0B]"></span> Advanced Smart Metering Solutions</li>
            </ul>
          </div>
        </motion.div>

        {/* Section 4: Vision & Global Operations */}
        <motion.div 
          style={{ opacity: soundOpacity, y: soundY, display: soundDisplay }}
          className="absolute inset-0 flex flex-col justify-end pb-32 items-center text-center px-4 md:px-24 mx-auto w-full"
        >
          <div className="pointer-events-auto max-w-3xl p-6 md:p-10 rounded-3xl bg-gradient-to-t from-black via-[#0a1128]/95 to-transparent backdrop-blur-xl border border-[#2563EB]/30 shadow-[0_10px_50px_rgba(0,0,0,0.9)] transition-all duration-500">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-white mb-6 drop-shadow-lg">
              A Global Corporate Footprint.
            </h2>
            <div className="space-y-4 text-white/90 text-base md:text-xl leading-relaxed">
              <p>With impeccable credentials over 4 decades, Siddho Mal Group continues to structure landmark deals and pioneer ventures across international borders.</p>
              <p>Our commitment to excellence translates into enduring partnerships and sustainable infrastructures.</p>
            </div>
          </div>
        </motion.div>

        {/* Section 5: Reassembly & CTA */}
        <motion.div 
          style={{ opacity: ctaOpacity, y: ctaY, display: ctaDisplay }}
          className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-24 text-center px-4"
        >
          <div className="pointer-events-auto w-full max-w-4xl flex flex-col items-center p-8 md:p-12 bg-[#050505]/95 backdrop-blur-2xl rounded-[2rem] border border-[#F59E0B]/40 shadow-[0_0_60px_rgba(245,158,11,0.15)]">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[#F59E0B] mb-4 drop-shadow-2xl leading-tight">
              Partner With A Legacy.<br/>
              <span className="text-white/80 font-semibold text-xl md:text-4xl mt-2 block">Drive the future of industry.</span>
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-8 md:mb-10 max-w-xl mx-auto">
              Committed to corporate social responsibility, we build today for a better, sustainable tomorrow across India and the globe.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <a 
                href="#contact" 
                className="group w-full sm:w-auto relative inline-flex items-center justify-center px-8 md:px-10 py-4 text-sm font-bold text-white uppercase tracking-wider transition-all duration-300 bg-[#2563EB] rounded-full hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] overflow-hidden scale-100 hover:scale-105"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us Today
                </span>
              </a>
              <a href="#businesses" className="group w-full sm:w-auto inline-flex items-center justify-center px-8 md:px-10 py-4 rounded-full border border-white/20 text-sm font-bold tracking-wide text-white hover:bg-white/10 transition-all uppercase">
                Explore Businesses
              </a>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4 md:gap-8 items-center justify-center text-xs md:text-sm text-white/60 font-medium">
              <p>A-6, Connaught Place, New Delhi</p>
              <div className="hidden md:block w-1.5 h-1.5 bg-[#F59E0B] rounded-full"></div>
              <p>info@siddhomalgroup.com</p>
              <div className="hidden md:block w-1.5 h-1.5 bg-[#F59E0B] rounded-full"></div>
              <p>+91-11-23324245</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
