import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React, { useRef } from 'react'

gsap.registerPlugin(SplitText)

const TextHover = ({title, text, active}) => {
    const textRef = useRef(null)
    const splitRef = useRef(null)

    useGSAP(() => {
        if (!splitRef.current) {
            splitRef.current = SplitText.create(textRef.current, { type: 'lines', mask: 'lines', autoSplit: true})
            gsap.set(splitRef.current.lines, { yPercent: 100 })
        }

        gsap.killTweensOf(splitRef.current.lines)

        if (active) {
            gsap.set(splitRef.current.lines, { yPercent: 100 })
            gsap.to(splitRef.current.lines, {
                duration: 0.5,
                yPercent: 0,
                ease: 'power2.out',
            })
        } else {
            gsap.to(splitRef.current.lines, {
                yPercent: -100,
                duration: 0.5,
                ease: 'power2.out'
            })
        }
    }, [active])

    return (
        <p ref={textRef} className='mt-4 font-medium text-[#607580]'>
            <span className='text-[#021A26]'>
                {title}
            </span>
            &#9866;
            {text}
        </p>
    )
}

export default TextHover