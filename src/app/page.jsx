'use client'

import Hero from "@/components/Hero";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])

  return (
    <div className="min-h-[5000px]">
      <Hero/>
    </div>
  );
}
