'use client'

import React, { useState } from 'react'
import TextScroll from '../TextScroll'
import ServiceCard from './ServiceCard'

const Services = () => {
    const [ active, setActive ] = useState(0)

  return (
        <div className="mb-64">
            <div className="custom-grid">
                <TextScroll className="col-start-1 col-span-3 md:col-span-6 lg:col-span-9 row-start-2 text-[clamp(1.5rem,5vw,60px)] leading-snug my-32 lg:my-64">
                    Construímos sites modernos e otimizados para que sua marca brilhe na web.
                </TextScroll>
            </div>
            <div className="w-full">
                <ServiceCard 
                    num={'01'} 
                    src={'/web-design.jpg'} 
                    alt={'Web Design'} 
                    title={'Web Design'} 
                    paragraph={'We create visually compelling and user-friendly websites that reflect your brands identity and engage your target audience. Our designs are tailored to provide seamless navigation and a memorable user experience.'} 
                    b1={'Experiencia de usuário'}
                    b2={'Responsividade'}
                    b3={'Textos otimizados'}
                    isActive={active === 0}
                    onActivate={() => setActive(0)}
                />
                <ServiceCard 
                    num={'02'} 
                    src={'/desenvolvimento-web.jpg'} 
                    alt={'Desenvolvimento Web'} 
                    title={'Criação de sites'} 
                    paragraph={'Desenvolvemos websites robustos e escaláveis utilizando as mais modernas tecnologias. Nosso foco está em criar soluções que sejam rápidas, seguras e otimizadas para mecanismos de busca.'} 
                    b1={'Performance otimizada'}
                    b2={'Responsividade'}
                    b3={'Tecnologias modernas'}
                    isActive={active === 1}
                    onActivate={() => setActive(1)}
                />
                <ServiceCard 
                    num={'03'} 
                    src={'/identidade.jpg'} 
                    alt={'Identidade Visual'} 
                    title={'Identidade Visual'} 
                    paragraph={'Criamos identidades visuais marcantes e memoráveis que comunicam os valores da sua marca de forma clara e impactante. Do logotipo aos materiais promocionais, garantimos consistência em todos os pontos de contato.'} 
                    b1={'Brand strategy'}
                    b2={'Design consistente'}
                    b3={'Material gráfico'}
                    isActive={active === 2}
                    onActivate={() => setActive(2)}
                />
            </div>
        </div>
    )
}

export default Services