'use client'

import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useRef, useState } from "react"

gsap.registerPlugin(ScrollTrigger)

function ParallaxImage({src, alt, className}) {
  const container = useRef(null)
  const image = useRef(null)
    
  useGSAP(() => {
    const parallax = gsap.fromTo(
      image.current,
      {yPercent: -30},
      {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      }
    )

    return () => {
      parallax.kill()
    }

  }, { scope: container })


  return (
    <div ref={container} className={className}>
        <Image 
          ref={image} 
          src={src} 
          alt={alt} 
          width={1920} 
          height={1080} 
          priority={false}
          loading="lazy"
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 50vw"
          className="w-full object-cover scale-120 will-change-transform"
        />
    </div>
  )
}

export default ParallaxImage