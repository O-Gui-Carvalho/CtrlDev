'use client'

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

function ParallaxImage({ src, alt, className, quality = 85, loading = "lazy" }) {
  const container = useRef(null)
  const imagem = useRef(null)
    
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    }).fromTo(
      imagem.current,
      { yPercent: -20 },
      { yPercent: 20, ease: 'none' }
    )
  }, { scope: container })

  return (
    <div ref={container} className={`${className} overflow-hidden`}>
      <Image 
        ref={imagem}
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        quality={quality}
        loading={loading}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 50vw"
        className="w-full h-full object-cover scale-[1.2]"
      />
    </div>
  )
}

export default ParallaxImage