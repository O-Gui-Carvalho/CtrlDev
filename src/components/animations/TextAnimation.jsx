'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

const TextAnimation = ({
  children,
  tag: Tag = "p",
  className = "",
  splitOptions = { type: "lines", autoSplit: true, mask: "lines" },
  animOptions = {},
}) => {
  const textRef = useRef(null)

  useGSAP(() => {
    if (!textRef.current) return

    const split = new SplitText(textRef.current, splitOptions)

    gsap.from(split.lines, {
      duration: 1,
      yPercent: 100,
      stagger: 0.08,
      ease: "expo.out",
      ...animOptions,
    })
  }, { scope: textRef })

  return (
    <Tag ref={textRef} className={className}>
      {children}
    </Tag>
  )
}

export default TextAnimation
