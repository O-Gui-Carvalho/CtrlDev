'use client'

import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Lenis from "lenis";
import Image from "next/image";
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
    </div>
  );
}
