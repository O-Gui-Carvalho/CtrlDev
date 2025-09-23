import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'
import AboutCard from './AboutCard';
import TextScroll from '../TextScroll';

gsap.registerPlugin(ScrollTrigger);

const About = () => { 
    useGSAP(() => {
        gsap.utils.toArray('.about-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            },
            duration: 1,
            opacity: 0,
            y: -150,
            delay: i * 0.1,
            ease: 'power3.inOut',
        });
        });
    }, [])

  return (
    <div className='grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-2 md:gap-4 lg:gap-8 px-2 md:px-4 lg:px-8'>
        
        <TextScroll className="col-span-3 md:col-span-6 lg:col-span-9 mt-64 text-[clamp(1.5rem,5vw,60px)] leading-snug">
            Transformamos ideias em experiências digitais extraordinárias, 
            criando soluções modernas que impulsionam o seu negócio.
        </TextScroll>

        <div id='cards' className="col-span-3 md:col-span-7 lg:col-span-12 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 mt-64">
            <AboutCard className="about-card col-start-1" imageSrc={'/star.svg'} imageAlt={'Beneficio 1'} title={'Design Responsivo'}>
                <p>
                    Criamos interfaces que se adaptam perfeitamente a qualquer dispositivo, 
                    garantindo uma experiência consistente em desktop, tablet e mobile.
                </p>
            </AboutCard>

            <AboutCard className="about-card col-start-1 lg:col-start-5 pt-16 lg:pt-0" imageSrc={'/square.svg'} imageAlt={'Beneficio 2'} title={'Performance Otimizada'}>
                <p>
                    Desenvolvemos sites com carregamento ultra-rápido e otimização SEO, 
                    melhorando sua posição nos mecanismos de busca e conversão de usuários.
                </p>
            </AboutCard>

            <AboutCard className="about-card col-start-1 lg:col-start-9 pt-16 lg:pt-0" imageSrc={'/sun.svg'} imageAlt={'Beneficio 3'} title={'Suporte Contínuo'}>
                <p>
                    Oferecemos suporte técnico especializado e manutenção contínua, 
                    garantindo que seu site esteja sempre atualizado e funcionando perfeitamente.
                </p>
            </AboutCard>
        </div>
        
    </div>
  )
}

export default About