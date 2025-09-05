'use client'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image';


const Nav = ({isActive}) => {
  const navRef = useRef(null);

  useLayoutEffect(() => {
    if (isActive) {
      gsap.to(
        navRef.current, {
          y: '0%', 
          duration: 0.75, 
          ease: "power3.inOut"
        })
    } else {
      gsap.to(navRef.current, {
        y: '-100%',
        duration: 0.75,
        ease: 'power3.inOut'
      })
    }
  }, [isActive])

  return (
    <div ref={navRef} className='z-0 bg-darkp min-h-dvh fixed top-0 left-0 w-full -translate-y-full'>
        <div className="grid grid-cols-12 gap-8 px-8">
          <div className="col-span-5 -ml-8 relative h-dvh">
            <Image src='/Nav.svg' alt='Nav Image' fill className='object-cover'/>
          </div>
          <div className="col-start-7 col-span-2 flex flex-col justify-end h-dvh pb-16 gap-40">
            <nav>
              <ul>
                <li className='text-7xl text-background'><a href="#">Home</a></li>
                <li className='text-7xl text-background mt-4'><a href="#">Projetos</a></li>
                <li className='text-7xl text-background mt-4'><a href="#">Serviços</a></li>
                <li className='text-7xl text-background mt-4'><a href="#">Blog</a></li>
                <li className='text-7xl text-background mt-4'><a href="#">Contato</a></li>
              </ul>
            </nav>
            <span className='text-[#ffffff80]'>Espirito Santo</span>
          </div>
          <div className="col-start-10 col-span-2 flex flex-col justify-end h-dvh pb-16 gap-40">
            <p className="text-[#ffffff80]">
              Crie seu site conosco e descubra o poder da presença online
            </p>
            <span className="text-[#ffffff80]">contato@ctrldev.com.br</span>
          </div>
        </div>
    </div>
  )
}

export default Nav