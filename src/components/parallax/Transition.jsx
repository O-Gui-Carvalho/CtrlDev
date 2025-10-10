'use client'
import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const images = [
  "1.png", "2.png", "3.png",
  "4.png", "5.png", "6.png",
  "7.png", "8.png", "9.png",
  "10.png", "11.png", "12.png"
];

export default function Transition() {
  const gallery = useRef(null)
  const col1 = useRef(null)
  const col2 = useRef(null)
  const col3 = useRef(null)
  const col4 = useRef(null)

  useGSAP(() => {
    const height = window.innerHeight;

    const animateCol = (target, distance) => {
      gsap.fromTo(
        target,
        { y: 0 },
        {
          y: distance,
          ease: "none",
          scrollTrigger: {
            trigger: gallery.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          },
        }
      )
    }

    animateCol(col1.current, height * 2)
    animateCol(col2.current, height * 3.3)
    animateCol(col3.current, height * 2.25)
    animateCol(col4.current, height * 3)
  }, [])

  return (
    <main>
      <div
        ref={gallery}
        className="box-border relative flex gap-2 md:gap-4 p-2 md:p-4 h-[175vh] bg-darkp overflow-hidden"
      >
        <Column refProp={col1} images={[images[0], images[1], images[2]]} />
        <Column refProp={col2} images={[images[3], images[4], images[5]]} />
        <Column refProp={col3} images={[images[6], images[7], images[8]]} className="hidden md:flex" />
        <Column refProp={col4} images={[images[9], images[10], images[11]]} className="hidden lg:flex" />
      </div>
    </main>
  )
}

const Column = ({ images, refProp, className = "" }) => {
  return (
    <div
      ref={refProp}
      className={`relative h-full flex flex-col gap-2 md:gap-4 w-1/2 md:w-1/3 lg:w-1/4 first:top-[-45%] nth-2:top-[-95%] nth-3:top-[-75%] nth-4:top-[-75%] ${className}`}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="relative w-full rounded-lg overflow-hidden"
          style={{
            aspectRatio: '1920/3245',
          }}
        >
          <Image
            src={`/images/${src}`}
            alt="image"
            fill
            className="object-cover object-top"
          />
        </div>
      ))}
    </div>
  )
}