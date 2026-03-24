"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StorySections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate opacities and translations based on the scroll progress (0 to 1)
  
  // Hero (0 - 15%)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.05, 0.12, 0.15], [1, 1, 0, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // Engineering Reveal (15% - 40%)
  const engOpacity = useTransform(scrollYProgress, [0.15, 0.20, 0.35, 0.40], [0, 1, 1, 0]);
  const engX = useTransform(scrollYProgress, [0.15, 0.20, 0.35, 0.40], [-50, 0, 0, -50]);

  // Noise Cancelling (40% - 65%)
  const ncOpacity = useTransform(scrollYProgress, [0.40, 0.45, 0.60, 0.65], [0, 1, 1, 0]);
  const ncX = useTransform(scrollYProgress, [0.40, 0.45, 0.60, 0.65], [50, 0, 0, 50]);

  // Sound Quality (65% - 85%)
  const soundOpacity = useTransform(scrollYProgress, [0.65, 0.70, 0.80, 0.85], [0, 1, 1, 0]);
  const soundY = useTransform(scrollYProgress, [0.65, 0.70, 0.80, 0.85], [50, 0, 0, -50]);

  // Reassembly & CTA (85% - 100%)
  const ctaOpacity = useTransform(scrollYProgress, [0.85, 0.90, 1], [0, 1, 1]);
  const ctaY = useTransform(scrollYProgress, [0.85, 0.90, 1], [50, 0, 0]);

  return (
    <div ref={containerRef} className="relative z-10 w-full" style={{ height: "500vh" }}>
      {/* 
        We use a sticky pointer-events-none container to overlay text exactly over the 
        viewport while the user scrolls through the 500vh height.
      */}
      <div className="sticky top-0 left-0 w-full h-screen pointer-events-none flex flex-col justify-center items-center overflow-hidden">
        
        {/* Section 1: Hero */}
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-4 drop-shadow-2xl">
            Sony WH‑1000XM6
          </h1>
          <p className="text-xl md:text-3xl text-white/90 font-medium mb-3">
            Silence, perfected.
          </p>
          <p className="text-sm md:text-base text-white/60 max-w-md mx-auto">
            Flagship wireless noise cancelling, <br className="hidden md:block"/>re‑engineered for a world that never stops.
          </p>
        </motion.div>

        {/* Section 2: Engineering Reveal */}
        <motion.div 
          style={{ opacity: engOpacity, x: engX }}
          className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-24 max-w-7xl mx-auto w-full"
        >
          <div className="max-w-md pointer-events-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[#00D6FF]/80 mb-6 drop-shadow-lg">
              Precision-engineered for silence.
            </h2>
            <div className="space-y-6 text-white/60 text-lg md:text-xl leading-relaxed">
              <p>
                Custom drivers, sealed acoustic chambers, and optimized airflow deliver studio-grade clarity.
              </p>
              <p>
                Every component is tuned for balance, power, and comfort—hour after hour.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section 3: Noise Cancelling & Microphones */}
        <motion.div 
          style={{ opacity: ncOpacity, x: ncX }}
          className="absolute inset-0 flex flex-col justify-center items-end px-8 md:px-24 max-w-7xl mx-auto w-full"
        >
          <div className="max-w-md text-right pointer-events-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[#0050FF]/80 mb-6 drop-shadow-lg">
              Adaptive noise cancelling, redefined.
            </h2>
            <ul className="space-y-4 text-white/60 text-lg md:text-xl leading-relaxed list-none">
              <li>Multi-microphone array listens in every direction.</li>
              <li>Real-time noise analysis adjusts to your environment.</li>
              <li>Your music stays pure—planes, trains, and crowds fade away.</li>
            </ul>
          </div>
        </motion.div>

        {/* Section 4: Sound & Upscaling */}
        <motion.div 
          style={{ opacity: soundOpacity, y: soundY }}
          className="absolute inset-0 flex flex-col justify-end pb-32 items-center text-center px-4 md:px-24 mx-auto w-full"
        >
          <div className="max-w-2xl pointer-events-auto p-8 rounded-3xl bg-black/20 backdrop-blur-md border border-white/5">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6 drop-shadow-lg">
              Immersive, lifelike sound.
            </h2>
            <div className="space-y-4 text-white/70 text-lg md:text-xl leading-relaxed">
              <p>High-performance drivers unlock detail, depth, and texture in every track.</p>
              <p>AI-enhanced upscaling restores clarity to compressed audio, so every note feels alive.</p>
            </div>
          </div>
        </motion.div>

        {/* Section 5: Reassembly & CTA */}
        <motion.div 
          style={{ opacity: ctaOpacity, y: ctaY }}
          className="absolute inset-0 flex flex-col items-center justify-end pb-24 text-center px-4"
        >
          <div className="pointer-events-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 drop-shadow-2xl">
              Hear everything.<br/>
              <span className="text-white/40">Feel nothing else.</span>
            </h2>
            <p className="text-lg text-white/60 mb-8">
              WH‑1000XM6. Designed for focus, crafted for comfort.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="#buy" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white transition-all duration-300 bg-[#0050FF] rounded-full hover:bg-[#0050FF]/80 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Experience WH‑1000XM6
                </span>
              </a>
              <a href="#specs" className="text-sm font-medium text-white/60 hover:text-white transition-colors underline-offset-4 hover:underline">
                See full specs
              </a>
            </div>
            <p className="mt-8 text-xs text-white/40 max-w-xs">
              Engineered for airports, offices, and everything in between.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
