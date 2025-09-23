import React from 'react'
import Image from 'next/image'
import { GiStarShuriken } from "react-icons/gi"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const ServiceCard = ({num, src, alt, title, paragraph, b1, b2, b3}) => {
    
    useGSAP(() => {
    gsap.utils.toArray(".service-card").forEach((card) => {
        const img = card.querySelector(".img")
        const content = card.querySelector(".expandable-content")
        const imageContainer = card.querySelector(".image-container")

        gsap.set(imageContainer, { height: 0, opacity: 0 })
        gsap.set(img, { clipPath: "inset(100% 0 0 0)", scale: 1 })
        gsap.set(content, { height: 0, opacity: 0 })

        let expandAnimation = gsap.timeline({ paused: true })
            .to(imageContainer, {
                opacity: 1,
                duration: 0.5,
                height: 'auto',
                ease: 'power2.out'
            })
            .to(img, {
                clipPath: 'inset(0% 0 0 0)',
                duration: 0.5,
                ease: 'power2.out',
            }, '-=0.3')
            .to(content, {
                height: 'auto',
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out',
            }, '-=0.6')

        card.addEventListener("mouseenter", () => expandAnimation.play())
        card.addEventListener("mouseleave", () => expandAnimation.reverse())
    })
    }, [])

  return (
    <div>
        <div className="service-card bg-background border-b border-[#00659840] transition-colors duration-500 ease-in-out hover:bg-[#D9F2FF] cursor-pointer py-8">
            <div className="custom-grid items-center">
                <span className='text-[clamp(2rem,5vw,60px)] col-span-3 md:col-span-1'>{num}</span>
                <div className='image-container col-start-1 lg:col-start-2 col-span-3 overflow-hidden'>
                    <Image src={src} alt={alt} width={1920} height={1080} className='img aspect-square object-cover rounded-xl'/>
                </div>
                <div className="col-span-3 md:col-span-4 lg:col-span-7">
                    <span className='text-[clamp(2rem,5vw,60px)]'>{title}</span>
                    <div className="expandable-content overflow-hidden">
                        <div className="flex flex-col gap-2 lg:flex-row justify-between mt-16 text-xl">
                            <div className="flex gap-4 items-center">
                                <GiStarShuriken className='text-lights'/><span>{b1}</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <GiStarShuriken className='text-lights'/><span>{b2}</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <GiStarShuriken className='text-lights'/><span>{b3}</span>
                            </div>
                        </div>
                        <p className='mt-16'>{paragraph}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard