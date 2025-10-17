'use client'
import HorizontalText from "./HorizontalText"
import TextScroll from "../TextScroll"
import ParallaxImage from "./ParallaxImage"
import TextHover from "./TextHover"
import { useState } from "react"

const Gallery = () => {
  const [hoverIndex, setHoverIndex] = useState(null)

  return (
    <div className='mt-32 md:mt-64'>
      <HorizontalText/>
      <div className="custom-grid">
        <div id="gallery" className="col-span-3 md:col-span-7 lg:col-span-11 mt-32 md:mt-64 grid grid-cols-3 md:grid-cols-7 lg:grid-cols-11 gap-x-2 md:gap-x-4 lg:gap-x-8 gap-y-8 md:gap-y-12 lg:gap-y-16" style={{gridTemplateRows: 'auto auto repeat(4, auto)'}}>
          {/* Imagem principal - Row 1 */}
          <ParallaxImage 
            src="/ViaJairDestaqMock.webp" 
            alt="Mockup Dummy" 
            quality={85}
            className="col-start-1 col-span-3 md:col-span-7 lg:col-span-11 row-start-1 rounded-lg overflow-hidden aspect-video"
          />
          
          {/* Texto principal - Row 2 */}
          <TextScroll className="col-start-1 col-span-3 md:col-span-6 lg:col-span-9 row-start-2 text-[clamp(1.5rem,5vw,60px)] leading-snug mb-32 lg:mb-64">
            Em Destaq: Agencia de viajens ViaJair - Eleve sua experiência aérea.
          </TextScroll>
          
          {/* Primeira imagem da galeria - Row 3, coluna esquerda */}
          <div className="col-start-1 col-span-3 md:col-span-4 lg:col-span-6 row-start-3 mb-16" onMouseEnter={() => setHoverIndex(0)} onMouseLeave={() => setHoverIndex(null)}>
            <ParallaxImage 
              src="/teste2.webp"
              alt="Mockup Dummy" 
              quality={85}
              className="rounded-lg max-h-[60vh] overflow-hidden aspect-video"
            />
            <TextHover title={'Restaurante Saporito '} text={' Uma jornada pela culinária Italiana'} active={hoverIndex === 0}/>
          </div>
          
          {/* Segunda imagem da galeria - Row 4, coluna direita */}
          <div className="col-start-1 md:col-start-5 lg:col-start-7 col-span-3 md:col-span-3 lg:col-span-5 row-start-4 mb-16" onMouseEnter={() => setHoverIndex(1)} onMouseLeave={() => setHoverIndex(null)}>
            <ParallaxImage 
              src="/teste3.webp"
              alt="Mockup Dummy" 
              quality={85}
              className="rounded-lg max-h-[60vh] overflow-hidden aspect-video"
            />
            <TextHover title={'Imobiliária Ocarina '} text={' Sua casa nova te aguarda'} active={hoverIndex === 1}/>
          </div>
          
          {/* Terceira imagem da galeria - Row 5, coluna esquerda */}
          <div className="col-start-1 col-span-3 md:col-span-4 lg:col-span-6 row-start-5 mb-16" onMouseEnter={() => setHoverIndex(2)} onMouseLeave={() => setHoverIndex(null)}>
            <ParallaxImage 
              src="/teste4.webp"
              alt="Mockup Dummy" 
              quality={85}
              className="rounded-lg max-h-[60vh] overflow-hidden aspect-video"
            />
            <TextHover title={'Estúdio Mairink '} text={' Transformando suas ideias em arte'} active={hoverIndex === 2}/>
          </div>
          
          {/* Quarta imagem da galeria - Row 6, coluna direita */}
          <div className="col-start-1 md:col-start-5 lg:col-start-7 col-span-3 md:col-span-3 lg:col-span-5 row-start-6" onMouseEnter={() => setHoverIndex(3)} onMouseLeave={() => setHoverIndex(null)}>
            <ParallaxImage 
              src="/teste5.webp"
              alt="Mockup Dummy" 
              quality={85}
              className="rounded-lg max-h-[60vh] overflow-hidden aspect-video"
            />
            <TextHover title={'Academia Olympia '} text={' Construa sua melhor versão'} active={hoverIndex === 3}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery