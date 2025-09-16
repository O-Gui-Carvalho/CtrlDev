import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'
import AboutCard from './AboutCard';
import TextScroll from '../TextScroll';

gsap.registerPlugin(ScrollTrigger);

const About = () => { 
    useGSAP(() => {
        gsap.from(gsap.utils.toArray('.about-card'), {
            scrollTrigger: {
                trigger: '#cards',
                start: 'center 90%',
                end: 'bottom 50%',
                scrub: true,
            },
            opacity: 0,
            y: -150,
            stagger: 0.1,
            ease: 'power3.inOut'
        })
        
    }, [])

  return (
    <div className='grid grid-cols-12 px-8 gap-8'>
        
        <TextScroll className="col-span-9 mt-64 text-6xl leading-20">
            Vestibulum nunc ipsum, hendrerit quis laoreet vitae, molestie nec sem. Donec eleifend arcu sed justo elementum fermentum.
        </TextScroll>

        <div id='cards' className="col-span-12 grid grid-cols-12 gap-8">
            <AboutCard className="about-card col-start-1" imageSrc={'/star.svg'} imageAlt={'Beneficio 1'} title={'Beneficio 1'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </AboutCard>

            <AboutCard className="about-card col-start-5" imageSrc={'/square.svg'} imageAlt={'Beneficio 2'} title={'Beneficio 2'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </AboutCard>

            <AboutCard className="about-card col-start-9" imageSrc={'/sun.svg'} imageAlt={'Beneficio 3'} title={'Beneficio 3'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </AboutCard>
        </div>
        
    </div>
  )
}

export default About