import Navbar from "@/components/Navbar";
import CanvasSequence from "@/components/CanvasSequence";
import StorySections from "@/components/StorySections";

export default function Home() {
  return (
    <main className="relative bg-[#050505] min-h-screen text-white selection:bg-[#00D6FF]/30">
      <Navbar />
      
      {/* 
        CanvasSequence handles the sticky full-screen canvas in the background 
        and syncs frame mapping with scroll progress.
      */}
      <CanvasSequence />

      {/* 
        StorySections sets the total page height (e.g. 500vh) and 
        provides fixed text overlays matching the scroll beats.
      */}
      <StorySections />
    </main>
  );
}
