import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='grid grid-cols-12 px-8 gap-8'>
        <div className="col-span-9 mt-64">
            <p className='text-6xl'>Vestibulum nunc ipsum, hendrerit quis laoreet vitae, molestie nec sem. Donec eleifend arcu sed justo elementum fermentum.</p>
        </div>
        <div className="col-start-1 col-span-3 mt-64">
            <div className="flex gap-8 items-center pb-8">
                <Image src='/star.svg' alt='Beneficios' width={50} height={50}/>
                <span className='text-3xl'>Beneficio</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </div>
        <div className="col-start-5 col-span-3 mt-64">
            <div className="flex gap-8 items-center pb-8">
                <Image src='/square.svg' alt='Beneficios' width={50} height={50}/>
                <span className='text-3xl'>Beneficio</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </div>
        <div className="col-start-9 col-span-3 mt-64">
            <div className="flex gap-8 items-center pb-8">
                <Image src='/sun.svg' alt='Beneficios' width={50} height={50}/>
                <span className='text-3xl'>Beneficio</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </div>
    </div>
  )
}

export default About