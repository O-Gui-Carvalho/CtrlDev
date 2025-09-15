'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { PiPaperPlaneTiltBold } from 'react-icons/pi'
import Whats from '../Whats'
import Button from '../Button'

gsap.registerPlugin(SplitText);

const Hero = () => {
    const titleRef = useRef(null);
    const paragraph = useRef(null);

    useGSAP(() => {
        if (titleRef.current){
            const split = new SplitText(titleRef.current, {type: 'words,lines', autoSplit: true, mask: 'lines',})
            gsap.from(split.words, {
                duration: 1,
                yPercent: 100,
                stagger: 0.08,
                ease: 'expo.out'
            })
        }

        if (paragraph.current){
            const split = new SplitText(paragraph.current, {type: 'lines', autoSplit: true, mask: 'lines',})
            gsap.from(split.lines, {
                duration: 1,
                yPercent: 100,
                stagger: 0.08,
                ease: 'expo.out'
            })
        }

    }, {scope: titleRef, paragraph})

  return (
    <div className='relative h-dvh w-dvw overflow-hidden'>
        <video autoPlay muted loop playsInline preload="none" className='absolute top-0 left-0 w-dvw h-full object-cover -z-1'>
            <source src="/heroBg.webm" type="video/webm" />
            Seu navegador não suporta vídeo
        </video>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-2 md:gap-4 lg:gap-8 px-2 md:px-4 lg:px-8 h-dvh">
            <div className="col-span-4 md:col-span-6 lg:col-span-8 flex flex-col items-start justify-center gap-4 md:gap-8">
                <h1 className='text-[clamp(2.5rem,5vw,6rem)] text-background font-bold capitalize leading-none' ref={titleRef}>Criamos sites que destacam sua empresa</h1>
                <p className='text-background text-[clamp(0.8rem,2vw,1rem)] max-w-4xl' ref={paragraph}>Desenvolvemos sites modernos, profissionais e exclusivos para destacar sua marca. Sem modelos prontos, sem soluções genéricas — cada site é único, feito sob medida para levar seu negócio ao próximo nível.</p>
                <div className="flex w-dvw gap-2 lg:gap-4">
                    <Button where="https://wa.me/message/MZ3XAEYWTNVYJ1" type='main'>Fale Conosco <PiPaperPlaneTiltBold/></Button>
                    <Button where="https://wa.me/message/MZ3XAEYWTNVYJ1" type='sec'>Conheça nosso trabalho</Button>
                </div>
            </div>
            <div className="fixed right-6 bottom-8 mix-blend-difference">
                <Whats/>
            </div>
        </div>
    </div>
  )
}

export default Hero