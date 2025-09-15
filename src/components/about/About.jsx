import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import Image from 'next/image'
import React, { useRef } from 'react'
import AboutCard from './AboutCard';

const About = () => {
    const sobre = useRef(null);
    
    useGSAP(() => {
        
    }, [])

  return (
    <div className='grid grid-cols-12 px-8 gap-8'>
        <div className="col-span-9 mt-64">
            <p className='text-6xl'>Vestibulum nunc ipsum, hendrerit quis laoreet vitae, molestie nec sem. Donec eleifend arcu sed justo elementum fermentum.</p>
        </div>
        <AboutCard className="col-start-1" imageSrc={'/star.svg'} imageAlt={'Beneficio 1'} title={'Beneficio 1'}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </AboutCard>

        <AboutCard className="col-start-5" imageSrc={'/square.svg'} imageAlt={'Beneficio 2'} title={'Beneficio 2'}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </AboutCard>

        <AboutCard className="col-start-9" imageSrc={'/sun.svg'} imageAlt={'Beneficio 3'} title={'Beneficio 3'}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </AboutCard>
    </div>
  )
}

export default About