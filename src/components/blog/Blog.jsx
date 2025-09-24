import React from 'react'
import TextScroll from '../TextScroll'
import Image from 'next/image'
import { FaArrowUp } from "react-icons/fa6";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Blog = () => {

    useGSAP(() => {
        gsap.utils.toArray('.blog-cover').forEach((cover) => {
            const imgCont = cover.querySelector('.img-container')
            const textCont = cover.querySelector('.text-container')

            gsap.set(imgCont, { width: 0 })
            gsap.set(textCont, { yPercent: 200 })

            let hoverAnimation = gsap.timeline({ paused: true })
            .to(imgCont, {
                width: 'auto',
                duration: 0.5,
                ease: 'power2.out'
            })
            .to(textCont, {
                yPercent: 0,
                duration: 0.5,
                ease: 'power2.out'
            })

            cover.addEventListener("mouseenter", () => hoverAnimation.play())
            cover.addEventListener("mouseleave", () => hoverAnimation.reverse())
        })
    }, [])

  return (
    <div className='custom-grid'>
        <TextScroll className='col-span-3 md:col-span-6 lg:col-span-9 mb-32 text-[clamp(1.5rem,5vw,60px)] leading-snug'>
            Compartilhamos insights e tendências para impulsionar suas estratégias digitais.
        </TextScroll>
        <div className="col-span-3 md:col-span-7 lg:col-span-11 grid grid-cols-3 md:grid-cols-7 lg:grid-cols-11 gap-2 md:gap-4 mb-64">
            <div className="img-container blog-cover col-span-3 md:col-span-5 lg:col-span-7 relative overflow-hidden rounded-xl group cursor-pointer">
                <Image src={'/coding.jpg'} alt='Coding blog post' width={1920} height={1080} className='object-cover h-full rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-110'/>
                <div className="absolute top-0 left-0 m-8 py-1 px-4 bg-[#08304540] rounded-full text-background border-1 border-[#B6C3C940] backdrop-blur-xl">
                    <span>Programação</span>
                </div>
                <div className="text-container absolute bottom-0 left-0 right-0 px-8 max-w-3xl w-full mx-auto text-background my-8 p-8 bg-[#08304540] border-1 border-[#B6C3C940] backdrop-blur-lg flex items-center justify-between gap-8 rounded-2xl">
                    <span className='text-2xl max-w-[430px]'>
                        Design de sites: Estratégia, processo e custos explicados.
                    </span>
                    <div className="bg-[#08304580] p-4 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-background group-hover:text-darkp">
                        <FaArrowUp className='rotate-45 text-2xl transition-transform duration-300 ease-in-out group-hover:rotate-90'/>
                    </div>
                </div>
            </div>
            <Image src={'/marketing.jpg'} alt='Coding blog post' width={1920} height={1080} className='rounded-xl col-span-3 md:col-span-1 lg:col-span-2 object-cover h-full'/>
            <Image src={'/visual.jpg'} alt='Coding blog post' width={1920} height={1080} className='rounded-xl col-span-3 md:col-span-1 lg:col-span-2 object-cover h-full'/>
        </div>
    </div>
  )
}

export default Blog