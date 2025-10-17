'use client'
import { useRef, useState } from 'react'
import TextScroll from '../TextScroll'
import Image from 'next/image'
import { FaArrowUp } from "react-icons/fa6";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Flip from 'gsap/Flip';

gsap.registerPlugin(Flip)

const posts = [
    {
        title: "Design de sites: Estratégia, processo e custos.",
        category: "Programação",
        img: "/coding.webp"
    },
    {
        title: "Marketing digital: Criando campanhas de alto impacto.",
        category: "Marketing",
        img: "/marketing.webp"
    },
    {
        title: "Design visual: Criatividade e tendências para 2025.",
        category: "Design",
        img: "/visual.webp"
    }
]

const Blog = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const containersRef = useRef([])

    useGSAP(() => {
        gsap.utils.toArray('.blog-cover').forEach((cover) => {
            const textCont = cover.querySelector('.text-container')
            
            gsap.set(textCont, { yPercent: 200, opacity: 0, willChange: 'transform, opacity' })

            const hoverAnimation = gsap.timeline({ paused: true })
            .to(textCont, {
                yPercent: 0,
                duration: 0.5,
                opacity: 1,
                ease: 'power2.out'
            })

            cover.addEventListener('mouseenter', () => hoverAnimation.play(), { passive: true })
            cover.addEventListener('mouseleave', () => hoverAnimation.reverse(), { passive: true })
        })

        containersRef.current[0]?.classList.add('max-size')
    }, [])

    const handleMouseEnter = (index) => {
        if (index === activeIndex) return

        const state = Flip.getState(containersRef.current)

        containersRef.current.forEach((el) => el.classList.remove('max-size'))
        containersRef.current[index].classList.add('max-size')

        setActiveIndex(index)

        Flip.from(state, {
            duration: 0.5,
            ease: 'power2.out',
        })
    }

  return (
    <div id='blog' className='custom-grid'>
        <TextScroll className='col-span-3 md:col-span-6 lg:col-span-9 mb-32 text-[clamp(1.5rem,5vw,60px)] leading-snug'>
            Compartilhamos insights e tendências para impulsionar suas estratégias digitais.
        </TextScroll>
        <div className="col-span-3 md:col-span-7 lg:col-span-11 grid grid-cols-3 md:grid-cols-7 lg:grid-cols-11 gap-2 md:gap-4 mb-64">
            {posts.map(( posts, index ) => (
                <div ref={(el) => containersRef.current[index] = el} key={index} onMouseEnter={() => handleMouseEnter(index)} className={`img-container blog-cover relative overflow-hidden rounded-xl group cursor-pointer md:h-[600px] col-span-3 md:col-span-1 lg:col-span-2 `}>
                    <Image 
                        src={posts.img} 
                        alt='Coding blog post' 
                        width={1920} 
                        height={1080} 
                        loading="lazy"
                        quality={50}
                        className='aspect-square object-cover h-full rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-110 will-change-transform'
                    />
                    <div className="absolute top-0 left-0 m-2 md:m-4 lg:m-8 py-1 px-4 bg-[#08304540] rounded-full text-background border-1 border-[#B6C3C940] backdrop-blur-xl">
                        <span>{posts.category}</span>
                    </div>
                    <div className="text-container absolute bottom-0 left-0 right-0 px-2 md:px-8 max-w-3xl w-full mx-auto text-background my-8 p-8 bg-[#08304540] border-1 border-[#B6C3C940] backdrop-blur-lg flex flex-col items-start md:flex-row md:items-center justify-between gap-4 md:gap-8 rounded-2xl">
                        <span className='text-lg md:text-2xl max-w-[430px]'>
                            {posts.title}
                        </span>
                        <div className="bg-[#08304580] p-4 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-background group-hover:text-darkp">
                            <FaArrowUp className='rotate-45 text-lg lg:text-2xl transition-transform duration-300 ease-in-out group-hover:rotate-90'/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Blog