import React from 'react'
import { PiPaperPlaneTilt } from "react-icons/pi";
import Whats from './Whats';

const hero = () => {
  return (
    <div className='relative h-dvh w-full overflow-hidden'>
        <video autoPlay muted loop playsInline preload="none" className='absolute top-0 left-0 w-full h-full object-cover -z-1'>
            <source src="/heroBg.webm" type="video/webm" />
            Seu navegador não suporta vídeo
        </video>
        <div className="relative grid grid-cols-12 gap-8 px-8 h-dvh">
            <div className="col-span-7 self-end pb-16">
                <h1 className='text-[92px] leading-none font-bold text-background capitalize'>Criação de sites que destacam sua empresa</h1>
                <div className="flex gap-4 pt-12">
                    <button className='font-semibold flex items-center justify-center gap-2 py-4 px-8 bg-background text-darkp rounded-lg cursor-pointer'>
                        Fale Conosco
                        <PiPaperPlaneTilt />
                    </button>
                    <button className='font-semibold flex items-center justify-center gap-2 py-4 px-8 bg-none border-1 border-background text-background rounded-lg cursor-pointer'>
                        Conheça nosso trabalho
                    </button>
                </div>
            </div>
            <div className="col-start-9 col-span-3 self-end text-background pb-16">
                <p>Criamos sites modernos, profissionais e exclusivos para destacar sua marca. Sem modelos prontos, sem soluções genéricas — cada site é único, feito sob medida para levar seu negócio ao próximo nível.</p>
            </div>
            <div className="col-start-12 self-end flex fixed justify-center mix-blend-difference bottom-16 right-16">
                <Whats/>
            </div>
        </div>
    </div>
  )
}

export default hero