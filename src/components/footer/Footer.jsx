'use client'

import { useRef, useCallback } from 'react'
import Button from '../Button'
import { PiPaperPlaneTiltBold } from 'react-icons/pi'
import Link from 'next/link'
import Image from 'next/image'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollLink from '../linkHandler/ScrollLink'

gsap.registerPlugin(SplitText, ScrollTrigger)

// Configurações de animação
const configs = {
    yPercent: 100,
    stagger: 0.05,
    ease: 'power3.inOut'
}

// Links e dados do footer
const linksFooter = {
  whatsapp: 'https://wa.me/message/MZ3XAEYWTNVYJ1',
  navigation: [
    { label: 'Projetos', path: 'gallery' },
    { label: 'Serviços', path: 'services' },
    { label: 'Blog', path: 'blog' }
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com/destaque' },
    { label: 'Behance', href: 'https://behance.com/destaque' },
    { label: 'Github', href: 'https://github.com/destaque' }
  ]
}

const Footer = () => {
    const container = useRef(null)
    const linkContainer = useRef(null)
    const title = useRef(null)
    const links = useRef([])

    // Callback ref para adicionar elementos ao array
    const addToLinks = useCallback((el, index) => {
        if (el) links.current[index] = el
    }, [])

    useGSAP(() => {
        if (!title.current || !container.current || !linkContainer.current) return
        
        // Split dos textos
        const splitTitle = new SplitText(title.current, { type: 'words,lines', mask: 'lines' })
        const splitLinks = gsap.utils.toArray(links.current).map( el => new SplitText(el, { type: 'lines', mask: 'lines'}) )

        // Animação do título
        gsap.from(splitTitle.words, {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 50%',
            },
            yPercent: configs.yPercent,
            stagger: configs.stagger,
            ease: configs.ease
        })

        // Animação dos links
        gsap.from(splitLinks.map(s => s.lines), {
            scrollTrigger: {
                trigger: linkContainer.current,
                start: 'top 90%'
            },
            yPercent: configs.yPercent,
            stagger: configs.stagger,
            ease: configs.ease
        })

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
            splitTitle.revert()
            splitLinks.forEach(split => split.revert())
        }
    }, [])

  return (
    <footer 
        id='footer' 
        ref={container} 
        className='relative h-dvh overflow-hidden' 
        aria-label="Rodapé do site"
    >
        <div className='custom-grid h-full items-center lg:items-start'>
            
            {/* Seção CTA */}
            <div className="col-span-3 md:col-span-7 lg:col-span-8 mt-32">
                <h2 
                    ref={title} 
                    className='text-[40px] leading-none md:text-6xl lg:text-8xl font-medium'
                >
                    Tudo pronto para destacar sua empresa?
                </h2>
                <div className="flex w-dvw gap-2 lg:gap-4 mt-12">
                    <Button 
                        where={linksFooter.whatsapp} 
                        type='sec'
                        aria-label="Entre em contato pelo WhatsApp"
                    >
                        Fale Conosco <PiPaperPlaneTiltBold aria-hidden="true" /> 
                    </Button>
                </div>
            </div>

            {/* Seção de Links */}
            <nav
                ref={linkContainer} 
                className="col-span-4 md:col-span-7 lg:col-span-11 grid grid-cols-4 md:grid-cols-7 lg:grid-cols-11 gap-2 md:gap-4 lg:gap-8 grid-row-2 items-end"
                aria-label="Navegação do rodapé"
            >
                
                {/* Voltar ao topo */}
                <ScrollLink 
                    id='hero' 
                    className="col-span-2 lg:col-span-1 row-start-1 pb-4 md:pb-0 leading-none"
                >
                    <span ref={el => addToLinks(el, 0)}>
                        Voltar ao topo
                    </span>
                </ScrollLink>

                {/* Links de navegação */}
                <ul className='col-span-2 lg:col-start-3 lg:col-span-6 row-start-2 lg:row-start-1 grid md:hidden lg:grid gap-y-4'>
                    {linksFooter.navigation.map((link, i) => (
                    <li 
                        key={link.path} 
                        className={`col-span-1 ${i === 0 ? 'lg:col-start-1' : i === 1 ? 'lg:col-start-3' : 'lg:col-start-5'}`}
                    >
                        <ScrollLink
                        id={link.path}
                        ref={el => addToLinks(el, i + 1)}
                        className="hover:opacity-70 transition-opacity"
                        >
                            {link.label}
                        </ScrollLink>
                    </li>
                    ))}
                </ul>

                {/* Links sociais */}
                <ul className='col-span-2 md:col-span-4 lg:col-span-1 row-start-2 md:row-start-1 lg:col-start-9 flex flex-col md:grid md:grid-cols-4 lg:flex lg:flex-col gap-y-4 md:gap-4'>
                    {linksFooter.social.map((social, i) => (
                        <li key={social.href} className='col-span-1'>
                            <Link 
                            href={social.href}
                            ref={el => addToLinks(el, i + 4)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-70 transition-opacity"
                            >
                            {social.label} &#8599;
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Copyright */}
                <Link 
                    href='/' 
                    className='col-span-2 md:col-span-1 row-start-1 pb-4 md:pb-0 lg:col-start-11'
                >
                    <span ref={el => addToLinks(el, 7)}>&#169;Studio Destaq</span>
                </Link>
            </nav>
        </div>

        {/* Logo de fundo */}
        <div 
            className="absolute bottom-0 left-0 w-full select-none -z-10" 
            style={{ transform: 'translateY(25%)' }}
            aria-hidden="true"
        >
            <Image 
                src='/destaq-footer.svg' 
                alt='Destaq Logo' 
                width={1920} 
                height={525}
                className="w-full h-auto"
                loading="lazy"
                priority={false}
            />
        </div>
    </footer>
  )
}

export default Footer