import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import React, { useRef } from 'react'
import { ImWhatsapp } from "react-icons/im";

const Whats = () => { 
  const roundText = useRef(null);
  const textRef = useRef(null);
  const circleText = 'Solicite um orçamento - Fale conosco - ';

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
    <div className='relative rounded-full text-background text-4xl p-4 cursor-pointer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link href={'https://wa.me/message/MZ3XAEYWTNVYJ1'} target='_blank' rel='noopener noreferrer'>
          <div ref={textRef} className="relative w-20 h-20 rounded-full flex items-center justify-center">
            {circleText.split("").map((char, index) => (
              <span
                key={index}
                style={{
                  transform: `rotate(${index * (360 / circleText.length)}deg) translate(48px) rotate(90deg)`,
                  transformOrigin: "center",
                  position: "absolute",
                }}
                className="leading-none text-[8px] font-light"
              >
                {char}
              </span>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <ImWhatsapp />
          </div>
        </Link>
    </div>
  )
}

export default Whats;