import Image from 'next/image'
import React from 'react'

const AboutCard = ({imageSrc, imageAlt, title, children, className}) => {
  return (
    <div className={`col-span-3 mt-64 ${className}`}>
        <div className="flex gap-8 items-center pb-8">
            <Image src={imageSrc} alt={imageAlt} width={50} height={50}/>
            <span className='text-3xl'>{title}</span>
        </div>
        {children}
    </div>
  )
}

export default AboutCard