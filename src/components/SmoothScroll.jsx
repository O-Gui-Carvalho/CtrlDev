'use client'

import gsap from 'gsap'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'

function SmoothScroll({ children }) {
  const lenisRef = useRef()
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, [])
  
  return (
    <ReactLenis 
        root 
        options={{ 
            autoRaf: false,
            anchors: true,
        }} 
        ref={lenisRef} 
    >
        {children}
    </ReactLenis>
  )
}

export default SmoothScroll