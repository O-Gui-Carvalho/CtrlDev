import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import React, { useRef } from 'react'
import AboutCard from './AboutCard';

gsap.registerPlugin(SplitText, ScrollTrigger);

const About = () => {
    const sobre = useRef(null);
    const cards = useRef([])
    
    useGSAP(() => {
        const split = new SplitText(sobre.current, {
            type: "words, chars"
        });

        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: '#teste',
                start: 'top 90%',
                end: 'bottom 40%',
                scrub: true,
            },
            opacity: 0.1,
            stagger: 0.05,
            ease: 'expo.inOut'
        })
    }, [])

  return (
    <div className='grid grid-cols-12 px-8 gap-8'>
        <div id='teste' className="col-span-9 mt-64">
            <p ref={sobre} className='text-6xl leading-20'>Vestibulum nunc ipsum, hendrerit quis laoreet vitae, molestie nec sem. Donec eleifend arcu sed justo elementum fermentum.</p>
        </div>
        <AboutCard ref={cards} className="col-start-1" imageSrc={'/star.svg'} imageAlt={'Beneficio 1'} title={'Beneficio 1'}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </AboutCard>

        <AboutCard ref={cards} className="col-start-5" imageSrc={'/square.svg'} imageAlt={'Beneficio 2'} title={'Beneficio 2'}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </AboutCard>

        <AboutCard ref={cards} className="col-start-9" imageSrc={'/sun.svg'} imageAlt={'Beneficio 3'} title={'Beneficio 3'}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </AboutCard>
    </div>
  )
}

export default About