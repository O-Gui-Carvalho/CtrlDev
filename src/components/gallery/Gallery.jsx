import HorizontalText from "./HorizontalText"
import TextScroll from "../TextScroll"
import ParallaxImage from "./ParallaxImage"

const Gallery = () => {
  return (
    <div className='mt-64'>
      <HorizontalText/>
      <div className="custom-grid">
        <div className="col-span-3 md:col-span-7 lg:col-span-11 mt-64 grid grid-cols-3 md:grid-cols-7 lg:grid-cols-11 gap-x-2 md:gap-x-4 lg:gap-x-8 gap-y-8 md:gap-y-12 lg:gap-y-16" style={{gridTemplateRows: 'auto auto repeat(4, auto)'}}>
          {/* Imagem principal - Row 1 */}
          <ParallaxImage 
            src="/mockup.jpg" 
            alt="Mockup Dummy" 
            className="col-start-1 col-span-3 md:col-span-7 lg:col-span-11 row-start-1 rounded-lg overflow-hidden aspect-video"
          />
          
          {/* Texto principal - Row 2 */}
          <TextScroll className="col-start-1 col-span-3 md:col-span-6 lg:col-span-9 row-start-2 text-[clamp(1.5rem,5vw,60px)] leading-snug lg:mb-64">
            Criamos experiencias visuais memoráveis para que seus clientes nunca te esqueçam.
          </TextScroll>
          
          {/* Primeira imagem da galeria - Row 3, coluna esquerda */}
          <div className="col-start-1 col-span-3 md:col-span-4 lg:col-span-6 row-start-3">
            <ParallaxImage 
              src="/galeria2.webp" 
              alt="Mockup Dummy" 
              className="rounded-lg max-h-[60dvh] overflow-hidden aspect-video"
            />
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
          
          {/* Segunda imagem da galeria - Row 4, coluna direita */}
          <div className="col-start-1 md:col-start-5 lg:col-start-7 col-span-3 md:col-span-3 lg:col-span-5 row-start-4">
            <ParallaxImage 
              src="/galeria3.webp" 
              alt="Mockup Dummy" 
              className="rounded-lg max-h-[60dvh] overflow-hidden aspect-video"
            />
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
          
          {/* Terceira imagem da galeria - Row 5, coluna esquerda */}
          <div className="col-start-1 col-span-3 md:col-span-4 lg:col-span-6 row-start-5">
            <ParallaxImage 
              src="/galeria4.webp" 
              alt="Mockup Dummy" 
              className="rounded-lg max-h-[60dvh] overflow-hidden aspect-video"
            />
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
          
          {/* Quarta imagem da galeria - Row 6, coluna direita */}
          <div className="col-start-1 md:col-start-5 lg:col-start-7 col-span-3 md:col-span-3 lg:col-span-5 row-start-6">
            <ParallaxImage 
              src="/galeria5.webp" 
              alt="Mockup Dummy" 
              className="rounded-lg max-h-[60dvh] overflow-hidden aspect-video"
            />
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery