'use client'
import HorizontalText from "./HorizontalText"
import ParallaxImage from "./ParallaxImage"
import TextHover from "./TextHover"
import { useCallback, useState } from "react"

const galleryData = [
  {
    id: 0,
    src: '/teste2.webp',
    alt: 'Mockup do projeto Nexa Studio',
    title: 'Nexa Studio',
    text: 'Arquitetura e Design',
    gridClass: 'col-start-1 col-span-3 md:col-span-4 lg:col-span-6 row-start-1'
  },
  {
    id: 1,
    src: '/teste3.webp',
    alt: 'Mockup do projeto Fit&Go',
    title: 'Fit&Go',
    text: 'Moda fitness feminina',
    gridClass: 'col-start-1 md:col-start-5 lg:col-start-7 col-span-3 md:col-span-3 lg:col-span-5 row-start-2'
  },
  {
    id: 2,
    src: '/teste4.webp',
    alt: 'Mockup do projeto Solaris',
    title: 'Solaris',
    text: 'Soluções em energia solar',
    gridClass: 'col-start-1 col-span-3 md:col-span-4 lg:col-span-6 row-start-3'
  },
  {
    id: 3,
    src: '/teste5.webp',
    alt: 'Mockup do projeto Debit',
    title: 'Debit',
    text: 'Soluções digitais e automação',
    gridClass: 'col-start-1 md:col-start-5 lg:col-start-7 col-span-3 md:col-span-3 lg:col-span-5 row-start-4'
  }
]

const GalleryItem = ({ item, isHovered, onHover }) => {
  const handleMouseEnter = useCallback(() => onHover(item.id), [item.id, onHover])
  const handleMouseLeave = useCallback(() => onHover(null), [onHover])

  return (
    <div 
      className={`${item.gridClass} mb-16 last:mb-0`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ParallaxImage 
        src={item.src}
        alt={item.alt}
        className="rounded-lg max-h-[60vh] overflow-hidden aspect-video"
      />
      <TextHover 
        title={item.title} 
        text={item.text} 
        active={isHovered}
      />
    </div>
  )
}

const Gallery = () => {
  const [hoverIndex, setHoverIndex] = useState(null)

  return (
    <section id="gallery" className='mt-32 md:mt-64'>
      <HorizontalText/>
      <div className="custom-grid">
        <div
          className="col-span-3 md:col-span-7 lg:col-span-11 mt-32 md:mt-64 grid grid-cols-3 md:grid-cols-7 lg:grid-cols-11 gap-x-2 md:gap-x-4 lg:gap-x-8 gap-y-8 md:gap-y-12 lg:gap-y-16" 
          style={{gridTemplateRows: 'repeat(4, auto)'}}
        >
          
          {galleryData.map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
              isHovered={hoverIndex === item.id}
              onHover={setHoverIndex}
            />
          ))}

        </div>
      </div>
    </section>
  )
}

export default Gallery