'use client'

import About from "@/components/about/About";
import Gallery from "@/components/gallery/Gallery";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: false });
    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      if (typeof lenis.destroy === 'function') lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-[5000px]">
      <Hero/>
      <About/>
      <Gallery/>
      <Services/>
    </div>
  );
}
