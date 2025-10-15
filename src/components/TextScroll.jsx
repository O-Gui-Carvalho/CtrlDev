import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import React, { useRef } from 'react'

gsap.registerPlugin(SplitText, ScrollTrigger);

const TextScroll = ({children, className}) => {
    const containerRef = useRef(null)
    const textAnim = useRef(null);

    useGSAP(() => {
        const split = new SplitText(textAnim.current, {
            type: 'words, chars'
        });

        gsap.from(split.words, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 90%',
                end: 'top 50%',
                scrub: 5,
                onStart: () => textAnim.current.style.willChange = 'opacity',
                onComplete: () => textAnim.current.style.willChange = 'auto',
            },
            opacity: 0.1,
            stagger: 0.05,
            ease: 'power3.inOut'
        })
    }, { scope: containerRef })

  return (
    <div ref={containerRef} className={className}>
        <p ref={textAnim}>{children}</p>
    </div>
  )
}

export default TextScroll