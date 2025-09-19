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
            Vestibulum nunc ipsum, hendrerit quis laoreet vitae, molestie nec sem. Donec eleifend arcu sed justo elementum fermentum.
        </TextScroll>

        <div id='cards' className="col-span-3 md:col-span-7 lg:col-span-12 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 mt-64">
            <AboutCard className="about-card col-start-1" imageSrc={'/star.svg'} imageAlt={'Beneficio 1'} title={'Beneficio 1'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </AboutCard>

            <AboutCard className="about-card col-start-1 lg:col-start-5 pt-16 lg:pt-0" imageSrc={'/square.svg'} imageAlt={'Beneficio 2'} title={'Beneficio 2'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </AboutCard>

            <AboutCard className="about-card col-start-1 lg:col-start-9 pt-16 lg:pt-0" imageSrc={'/sun.svg'} imageAlt={'Beneficio 3'} title={'Beneficio 3'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </AboutCard>
        </div>
        
    </div>
  )
}

export default About