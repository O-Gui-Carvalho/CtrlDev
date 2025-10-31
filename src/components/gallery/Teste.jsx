'use client'

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const configs = {
  speed: 0.1,
  resetThreshold: -100
}

const textContent = 'Projetos Selecionados'

const HorizontalText = () => {
  const containerRef = useRef(null)
  const fText = useRef(null)
  const sText = useRef(null)
  const xPercent = useRef(0)
  const direction = useRef(1)

  useGSAP(() => {
    if (!fText.current || !sText.current || !containerRef.current) return

    const texts = [fText.current, sText.current]

    const step = () => {
      xPercent.current += configs.speed * direction.current

      if (xPercent.current <= configs.resetThreshold) {
        xPercent.current = 0
      }
      if (xPercent.current > 0) {
        xPercent.current = configs.resetThreshold
      }

      gsap.set(texts, { xPercent: xPercent.current })
    }

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => gsap.ticker.add(step),
      onLeave: () => gsap.ticker.remove(step),
      onEnterBack: () => gsap.ticker.add(step),
      onLeaveBack: () => gsap.ticker.remove(step),
      onUpdate: (self) => {
        direction.current = self.direction === 1 ? -1 : 1
      },
    })

    return () => {
      gsap.ticker.remove(step)
      trigger.kill()
    }
  }, [])

  const textClasses = "uppercase text-darkp text-5xl md:text-7xl lg:text-9xl whitespace-nowrap tracking-wider will-change-transform"

  return (
    <div ref={containerRef} className="relative w-screen overflow-hidden" aria-hidden="true">
      <div className="flex flex-nowrap">
        <p ref={fText} className={textClasses}>
          {textContent}&#xa0;-&#xa0;
        </p>
        <p ref={sText} className={textClasses}>
          {textContent}&#xa0;-&#xa0;
        </p>
      </div>
    </div>
  )
}

export default HorizontalText