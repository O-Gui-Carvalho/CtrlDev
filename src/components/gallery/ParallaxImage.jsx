'use client'

import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

function ParallaxImage({src, alt, className}) {
  const container = useRef(null)
  const imagem = useRef(null)
    
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 100%',
        end: 'bottom 0%',
        scrub: true,
      },
    })
    tl.from(imagem.current, {
      yPercent: -40,
    }
  )
  }, [])


  return (
    <div ref={container} className={className}>
        <Image ref={imagem} src={src} alt={alt} width={1920} height={1440} className="w-full object-cover scale-120"/>
    </div>
  )
}

export default ParallaxImage