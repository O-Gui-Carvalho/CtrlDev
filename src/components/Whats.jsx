import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react'
import { ImWhatsapp } from "react-icons/im";

const Whats = () => { 
  const roundText = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    roundText.current = gsap.to(textRef.current, {
      rotation: 360,
      duration: 15,
      repeat: -1,
      ease: 'linear',
    })
  }, [])

  const handleMouseEnter = () => {
    gsap.to(roundText.current, { timeScale: 5, duration: 0.5 }) 
  }

  const handleMouseLeave = () => {
    gsap.to(roundText.current, { timeScale: 1, duration: 0.5 }) 
  }

  return (
    <div className='z-20 relative rounded-full text-background text-4xl cursor-pointer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link href={'https://wa.me/message/MZ3XAEYWTNVYJ1'} target='_blank' rel='noopener noreferrer'>
          <div ref={textRef} className="relative w-20 h-20 rounded-full flex items-center justify-center">
            <Image src={'/fale-conosco-arial.svg'} alt={'Fale Conosco'} width={1080} height={1080} className="scale-90 md:scale-100 lg:scale-120"/>
          </div>
          <div className="absolute inset-0 flex items-center justify-center scale-80 md:scale-100 lg:scale-120">
            <ImWhatsapp/>
          </div>
        </Link>
    </div>
  )
}

export default Whats;