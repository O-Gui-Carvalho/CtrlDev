'use client'

import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

function ParallaxImage() {
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
      yPercent: -50,
    }
  )
  }, [])


  return (
    <div ref={container} className="cols-start-1 col-span-3 md:col-span-7 lg:col-span-11 rounded-lg max-h-[80dvh] overflow-hidden">
        <Image ref={imagem} src="/mockup.jpg" alt="Mockup Dummy" width={1600} height={1200} className="w-full"/>
    </div>
  )
}

export default ParallaxImage