'use client'
import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const images = [
  "1.jpg", "2.jpg", "3.jpg",
  "4.jpg", "5.jpg", "6.jpg",
  "7.jpg", "8.jpg", "9.jpg",
  "10.jpg", "11.jpg", "12.jpg"
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
        className="box-border relative flex gap-4 p-4 h-[175vh] bg-darkp overflow-hidden"
      >
        <Column refProp={col1} images={[images[0], images[1], images[2]]} />
        <Column refProp={col2} images={[images[3], images[4], images[5]]} />
        <Column refProp={col3} images={[images[6], images[7], images[8]]} />
        <Column refProp={col4} images={[images[9], images[10], images[11]]} />
      </div>
    </main>
  )
}

const Column = ({ images, refProp }) => {
  return (
    <div
      ref={refProp}
      className="relative h-full flex flex-col gap-4 w-1/4 min-w-[175px] first:top-[-45%] nth-2:top-[-95%] nth-3:top-[-75%] nth-4:top-[-75%]"
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="relative w-full h-full rounded-lg overflow-hidden"
        >
          <Image
            src={`/images/${src}`}
            alt="image"
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}