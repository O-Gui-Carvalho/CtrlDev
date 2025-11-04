'use client'

import Link from 'next/link'
import React from 'react'

const Button = ({type, children, where, target = '_blank'}) => {

  const handleScroll = e => {
    if (where.startsWith('#')) {
      e.preventDefault()

      const sectionId = where.replace('#', '')
      const section = document.getElementById(sectionId)

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
        window.history.replaceState(null, '', '/')
      }
    }
  }

  const baseStyle = `text-[clamp(0.75rem,2vw,1rem)] px-6 py-3 md:px-8 md:py-4 border-1 border-background rounded-lg relative overflow-hidden cursor-pointer max-w-max before:absolute duration-300 transition-colors ease-in-out ${type === 'main' ? 'text-darkp bg-background hover:text-background hover:bg-darkp' : 'text-background bg-darkp hover:bg-background hover:text-darkp hover:border-darkp'}`

  if (where.startsWith('#')) {
    return (
      <a href={where} onClick={handleScroll} className={baseStyle}>
        <span className='font-semibold z-1 flex items-center justify-between gap-2'>{children}</span>
      </a>
    )
  }

  return (
    <Link href={where} target={target} rel='noopener noreferrer' className={baseStyle}>
        <span className='font-semibold z-1 flex items-center justify-between gap-2'>{children}</span>
    </Link>
  )
}

export default Button