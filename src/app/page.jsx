'use client'

import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import Gallery from "@/components/gallery/Gallery";
import Hero from "@/components/hero/Hero";
import Transition from "@/components/parallax/Transition";
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
    <div>
      <Hero/>
      <About/>
      <Gallery/>
      <Services/>
      <Blog/>
      <Transition/>
    </div>
  );
}
