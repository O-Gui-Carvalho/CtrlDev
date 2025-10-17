'use client'

import Link from 'next/link'
import React from 'react'

const Button = ({type, children, where}) => {

  return (
    <Link href={where} target='_blank' rel='noopener noreferrer' className={`text-[clamp(0.75rem,2vw,1rem)] px-6 py-3 md:px-8 md:py-4 border-1 border-background rounded-lg relative overflow-hidden cursor-pointer max-w-max before:absolute duration-300 transition-colors ease-in-out ${type === 'main' ? 'text-darkp bg-background hover:text-background hover:bg-darkp' : 'text-background bg-darkp hover:bg-background hover:text-darkp hover:border-darkp'}`}>
        <span className='font-semibold z-1 flex items-center justify-between gap-2'>{children}</span>
    </Link>
  )
}

export default Button