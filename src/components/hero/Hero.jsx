import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PiPaperPlaneTiltBold } from 'react-icons/pi'

const Hero = () => {
  return (
    <div className='relative h-dvh w-dvw overflow-hidden'>
        <video autoPlay muted loop playsInline preload="none" className='absolute top-0 left-0 w-dvw h-full object-cover -z-1'>
            <source src="/heroBg.webm" type="video/webm" />
            Seu navegador não suporta vídeo
        </video>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-2 md:gap-4 lg:gap-8 px-2 md:px-4 lg:px-8 h-dvh">
            <div className="col-span-4 md:col-span-6 lg:col-span-8 flex flex-col items-start justify-center gap-4 md:gap-8">
                <h1 className='text-[clamp(2.5rem,5vw,6rem)] text-background font-bold capitalize leading-none'>Criamos sites que destacam sua empresa</h1>
                <p className='text-background text-[clamp(0.8rem,2vw,1rem)]'>Desenvolvemos sites modernos, profissionais e exclusivos para destacar sua marca. Sem modelos prontos, sem soluções genéricas — cada site é único, feito sob medida para levar seu negócio ao próximo nível.</p>
                <div className="flex w-dvw gap-2 lg:gap-4">
                    <Link href='/' className='font-semibold text-[clamp(0.75rem,2vw,1rem)] text-darkp px-6 py-3 md:px-8 md:py-4 bg-background rounded-lg flex items-center justify-between gap-2'>
                        Fale Conosco
                        <PiPaperPlaneTiltBold/>
                    </Link>
                    <Link href='/' className='font-semibold text-[clamp(0.75rem,2vw,1rem)] text-background px-8 py-4 border-1 border-background rounded-lg flex items-center justify-between gap-2'>
                        Conheça nosso trabalho
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero