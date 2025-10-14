'use client'

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const HorizontalText = () => {
  const fText = useRef(null)
  const sText = useRef(null)
  const containerRef = useRef(null)
  const xPercent = useRef(0)
  const direction = useRef(1)
  const speed = useRef(0.1)

  useGSAP(() => {
    if (!fText.current || !sText.current) return

    const step = () => {
      let x = xPercent.current + speed.current * direction.current
      if (x <= -100) x = 0
      if (x > 0) x = -100
      gsap.set([fText.current, sText.current], { xPercent: x })
      xPercent.current = x
    }

    gsap.ticker.add(step)

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        direction.current = self.direction === 1 ? -1 : 1
      },
    })

    return () => {
      gsap.ticker.remove(step)
      trigger.kill()
    }
  }, [])

  return (
    <div className="relative w-screen overflow-hidden">
      <div ref={containerRef} className="flex flex-nowrap">
        <p
          ref={fText}
          className="uppercase text-darkp text-5xl md:text-7xl lg:text-9xl whitespace-nowrap tracking-wider"
        >
          Projetos Selecionados&#xa0;-&#xa0;
        </p>
        <p
          ref={sText}
          className="uppercase text-darkp text-5xl md:text-7xl lg:text-9xl whitespace-nowrap tracking-wider"
        >
          Projetos Selecionados&#xa0;-&#xa0;
        </p>
      </div>
    </div>
  )
}

export default HorizontalText
