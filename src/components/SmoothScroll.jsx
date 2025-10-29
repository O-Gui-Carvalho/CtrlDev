'use client'

import gsap from 'gsap'
import { ReactLenis } from 'lenis/react'
import { useCallback, useEffect, useRef } from 'react'

/**
 * Componente de smooth scroll usando Lenis + GSAP
 * @param {Object} props
 * @param {React.ReactNode} props.children - Conteúdo a ser renderizado
 * @param {Object} props.options - Opções adicionais do Lenis
 * @param {boolean} props.enabled - Controla se o smooth scroll está ativo
 */
function SmoothScroll({ 
  children, 
  options = {},
  enabled = true 
}) {
  const lenisRef = useRef()
  
  const syncLenisWithGsap = useCallback((time) => {
    lenisRef.current?.lenis?.raf(time * 1000)
  }, [])
  
  useEffect(() => {
    if (!enabled) return
    
    gsap.ticker.add(syncLenisWithGsap)
    
    return () => {
      gsap.ticker.remove(syncLenisWithGsap)
    }
  }, [enabled, syncLenisWithGsap])
  
  if (!enabled) {
    return <>{children}</>
  }
  
  return (
    <ReactLenis 
      root 
      options={{ 
        autoRaf: false,
        anchors: true,
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        ...options,
      }} 
      ref={lenisRef} 
    >
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll