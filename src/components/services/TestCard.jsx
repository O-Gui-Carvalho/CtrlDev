import React, { useRef } from 'react'
import Image from 'next/image'
import { GiStarShuriken } from "react-icons/gi"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const TestCard = ({ num, src, alt, title, paragraph, b1, b2, b3, isActive, onActivate }) => {
  const cardRef = useRef(null)
  const imgRef = useRef(null)
  const contentRef = useRef(null)
  const expandAnimation = useRef(null)

  useGSAP(() => {
    const img = imgRef.current
    const content = contentRef.current

    // Configura estado inicial
    gsap.set(img, {
      yPercent: 100,
      opacity: 0,
      willChange: 'transform, opacity'
    })

    gsap.set(content, {
        opacity: 0
    })

    // Animação baseada no estado isActive
    expandAnimation.current = gsap.timeline({ paused: true })
    .to(img, {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
    })
    .to(content, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
    }, '-=0.3')

    if (!expandAnimation.current) return
    if (isActive) {
        expandAnimation.current.play()
    } else {
        expandAnimation.current.reverse()
    }
  }, { scope: cardRef, dependencies: [isActive] }) // Reexecuta quando isActive muda

  return (
    <div 
      ref={cardRef}
      onMouseEnter={onActivate}
      className="bg-background border-b border-[#00659840] transition-colors duration-500 ease-in-out hover:bg-[#D9F2FF] cursor-pointer py-8"
    >
      <div className="custom-grid">
        <span className='text-[clamp(2rem,5vw,60px)] col-span-3 md:col-span-1'>{num}</span>
        
        {/* Container da imagem com grid transition */}
        <div className={`
          col-start-1 lg:col-start-2 col-span-3 overflow-hidden
          grid transition-all duration-500 ease-in-out
          ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
        `}>
          <div className="overflow-hidden">
            <Image 
              ref={imgRef}
              src={src} 
              alt={alt} 
              width={1920} 
              height={1080} 
              className='aspect-square object-cover rounded-xl'
            />
          </div>
        </div>

        <div className="col-span-3 md:col-span-4 lg:col-span-7">
          <span className='text-[clamp(2rem,5vw,60px)]'>{title}</span>
          
          {/* Container do conteúdo com grid transition */}
          <div className={`
            grid transition-all duration-500 ease-out
            ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
          `}>
            <div className="overflow-hidden">
              <div ref={contentRef}>
                <div className="flex flex-col gap-2 lg:flex-row justify-between mt-16 text-xl">
                  <div className="flex gap-4 items-center">
                    <GiStarShuriken className='text-lights'/><span>{b1}</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <GiStarShuriken className='text-lights'/><span>{b2}</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <GiStarShuriken className='text-lights'/><span>{b3}</span>
                  </div>
                </div>
                <p className='mt-16'>{paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestCard