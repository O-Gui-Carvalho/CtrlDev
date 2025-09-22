import React from 'react'
import TextScroll from '../TextScroll'
import Image from 'next/image'
import { GiStarShuriken } from "react-icons/gi"

const Services = () => {
  return (
    <div className="mb-64">
        <div className="custom-grid">
            <TextScroll className="col-start-1 col-span-3 md:col-span-6 lg:col-span-9 row-start-2 text-[clamp(1.5rem,5vw,60px)] leading-snug lg:my-64">
                Construímos sites modernos e otimizados para que sua marca brilhe na web.
            </TextScroll>
        </div>
        <div className="w-full">
            <div className="bg-background border-b border-[#00659840] transition-colors duration-500 ease-in-out hover:bg-[#CCEFFF] cursor-pointer py-8">
                <div className="custom-grid items-center">
                    <span className='text-6xl col-span-1'>01</span>
                    <div className='col-span-3'>
                        <Image src={'/web-design.jpg'} alt='Web Design' width={1920} height={1080} className='aspect-square object-cover rounded-xl'/>
                    </div>
                    <div className="col-span-7">
                        <span className='text-6xl'>Web Design</span>
                        <div className="flex justify-between mt-16">
                            <div className="flex gap-4 items-center">
                                <GiStarShuriken className='text-lights'/><span>Experiencia de usuário</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <GiStarShuriken className='text-lights'/><span>Responsividade</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <GiStarShuriken className='text-lights'/><span>Textos otimizados</span>
                            </div>
                        </div>
                        <p className='mt-16'>We create visually compelling and user-friendly websites that reflect your brand's identity and engage your target audience. Our designs are tailored to provide seamless navigation and a memorable user experience.</p>
                    </div>
                </div>
            </div>
            <div className="bg-background border-b border-[#00659840] transition-colors duration-500 ease-in-out hover:bg-[#CCEFFF] cursor-pointer py-8">
                <div className="custom-grid items-center">
                    <span className='text-6xl col-span-1'>02</span>
                    <div className='col-span-3'>
                        <Image src={'/desenvolvimento-web.jpg'} alt='Web Design' width={1920} height={1080} className='aspect-square object-cover rounded-xl'/>
                    </div>
                    <div className="col-span-7 col-start-5">
                        <span className='text-6xl'>Desenvolvimento Web</span>
                        <div className="flex justify-between mt-16">
                            <div className="flex gap-4 items-center">
                                <GiStarShuriken className='text-lights'/><span>Experiencia de usuário</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <GiStarShuriken className='text-lights'/><span>Responsividade</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <GiStarShuriken className='text-lights'/><span>Textos otimizados</span>
                            </div>
                        </div>
                        <p className='mt-16'>We create visually compelling and user-friendly websites that reflect your brand's identity and engage your target audience. Our designs are tailored to provide seamless navigation and a memorable user experience.</p>
                    </div>
                </div>
            </div>
            <div className="bg-background border-b border-[#00659840] transition-colors duration-500 ease-in-out hover:bg-[#CCEFFF] cursor-pointer py-8">
                <div className="custom-grid items-center">
                    <span className='text-6xl col-span-1'>03</span>
                    <div className='col-span-3'>
                        <Image src={'/identidade.jpg'} alt='Web Design' width={1920} height={1080} className='aspect-square object-cover rounded-xl'/>
                    </div>
                    <div className="col-span-7">
                        <span className='text-6xl'>Identidade visual</span>
                        <div className="flex justify-between mt-16">
                            <div className="flex gap-4 items-center">
                                <GiStarShuriken className='text-lights'/><span>Experiencia de usuário</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <GiStarShuriken className='text-lights'/><span>Responsividade</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <GiStarShuriken className='text-lights'/><span>Textos otimizados</span>
                            </div>
                        </div>
                        <p className='mt-16'>We create visually compelling and user-friendly websites that reflect your brand's identity and engage your target audience. Our designs are tailored to provide seamless navigation and a memorable user experience.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services