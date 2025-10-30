'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import AboutCard from './AboutCard'
import TextScroll from '../TextScroll'

gsap.registerPlugin(ScrollTrigger)

const ANIMATION_CONFIG = {
    duration: 1,
    opacity: 0,
    y: -150,
    ease: 'power3.inOut',
    triggerStart: 'top 90%'
}

const ABOUT_CARDS = [
    {
        id: 'responsive-design',
        imageSrc: '/star.svg',
        imageAlt: 'Ilustração abstrata',
        title: 'Design Responsivo',
        description: 'Criamos interfaces que se adaptam perfeitamente a qualquer dispositivo, garantindo uma experiência consistente em desktop, tablet e mobile.',
        colStart: 'col-start-1 lg:col-start-1',
        className: 'pt-16 lg:pt-0'
    },
    {
        id: 'optimized-performance',
        imageSrc: '/square.svg',
        imageAlt: 'Ilustração abstrata',
        title: 'Performance Otimizada',
        description: 'Desenvolvemos sites com carregamento ultra-rápido e otimização SEO, melhorando sua posição nos mecanismos de busca e conversão de usuários.',
        colStart: 'col-start-1 lg:col-start-5',
        className: 'pt-16 lg:pt-0'
    },
    {
        id: 'continuous-support',
        imageSrc: '/sun.svg',
        imageAlt: 'Ilustração abstrata',
        title: 'Suporte Contínuo',
        description: 'Oferecemos suporte técnico especializado e manutenção contínua, garantindo que seu site esteja sempre atualizado e funcionando perfeitamente.',
        colStart: 'col-start-1 lg:col-start-9',
        className: 'pt-16 lg:pt-0'
    }
]

const About = () => { 
    const cardsContainer = useRef(null)
    const animationsRef = useRef([]) 

    useGSAP(() => {
        animationsRef.current.forEach(anim => anim.kill())
        animationsRef.current = []

        const cards = gsap.utils.toArray('.about-card', cardsContainer.current)

        const isMobile = window.matchMedia('(max-width: 1023px)').matches

        cards.forEach((card, i) => {
            const animation = gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: ANIMATION_CONFIG.triggerStart,
                    toggleActions: 'play none none none',
                },
                duration: ANIMATION_CONFIG.duration,
                opacity: ANIMATION_CONFIG.opacity,
                y: ANIMATION_CONFIG.y,
                ease: ANIMATION_CONFIG.ease,
                delay: isMobile ? 0 : i * 0.1,
            })

            animationsRef.current.push(animation)
        })

        return () => {
            animationsRef.current.forEach(anim => anim.kill())
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
            animationsRef.current = []
        }
    }, [])

  return (
    <div className='custom-grid'>
        
        <TextScroll className="col-span-3 md:col-span-6 lg:col-span-9 my-32 md:my-64 text-[clamp(1.5rem,5vw,60px)] leading-snug">
            Transformamos ideias em experiências digitais extraordinárias, 
            criando soluções modernas que impulsionam o seu negócio.
        </TextScroll>

        <div ref={cardsContainer} className="col-span-3 md:col-span-7 lg:col-span-12 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8">
            {ABOUT_CARDS.map((card) => (
                <AboutCard
                    key={card.id}
                    className={`about-card ${card.colStart} ${card.className || ''}`}
                    imageSrc={card.imageSrc}
                    imageAlt={card.imageAlt}
                    title={card.title}
                >
                    <p>{card.description}</p>
                </AboutCard>
            ))}
        </div>
        
    </div>
  )
}

export default About