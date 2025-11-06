'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { forwardRef } from "react"

const ScrollLink = forwardRef(({id, children, href, className}, ref) => {
  const router = useRouter()

  const handleScroll = (e) => {
      e.preventDefault()
      const section = document.getElementById(id)
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' })
          window.history.replaceState(null, '', '/')
      }
  }

  const handleExternalClick = (e) => {
    e.preventDefault()
    
    router.push(`/#${id}`)
    
    setTimeout(() => {
      window.history.replaceState(null, '', '/')
    }, 200)
  }

  if (href) {
    return (
      <Link href={href} className={className} onClick={handleExternalClick} ref={ref}>
        {children}
      </Link>
    )
  }

  return (
    <Link href={`#${id}`} onClick={handleScroll} className={className} ref={ref}>
        {children}
    </Link>
  )
})

export default ScrollLink