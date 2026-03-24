"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function CanvasSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll(); // 0 to 1 based on full page scroll
  const frameCount = 240;

  // Map 0 -> 1 scroll to 0 -> 239 index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Format 001, 002, ..., 100, etc.
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;
      img.onload = () => {
        loadedCount++;
        // Trigger initial draw when first image is loaded
        if (i === 1 && canvasRef.current) {
          drawFrame(img);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = (image: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Calculate aspect ratio and scaling to cover/contain
    const hRatio = canvas.width / image.width;
    const vRatio = canvas.height / image.height;
    // Use cover strategy or fit depending on the aesthetic
    const ratio = Math.max(hRatio, vRatio);

    const centerShift_x = (canvas.width - image.width * ratio) / 2;
    const centerShift_y = (canvas.height - image.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw background color matched with the frame (pure dark charcoal from prompt)
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      centerShift_x,
      centerShift_y,
      image.width * ratio,
      image.height * ratio
    );
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const i = Math.floor(latest);
    if (images[i] && images[i].complete) {
      drawFrame(images[i]);
    }
  });

  // Handle resize to redraw current frame
  useEffect(() => {
    const handleResize = () => {
      const currentIdx = Math.floor(frameIndex.get());
      if (images[currentIdx]) {
        drawFrame(images[currentIdx]);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  return (
    <div className="fixed inset-0 w-full h-full z-0 bg-[#050505] pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
      {/* Subtle overlay gradient to blend corners with absolute black #050505 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#050505_100%)] mix-blend-multiply opacity-50" />
    </div>
  );
}
