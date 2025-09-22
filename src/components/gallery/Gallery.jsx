import HorizontalText from "./HorizontalText"
import TextScroll from "../TextScroll"
import ParallaxImage from "./ParallaxImage"

const Gallery = () => {
  return (
    <div className='mt-64'>
      <HorizontalText/>
      <div className="custom-grid">
        <div className="col-span-3 md:col-span-7 lg:col-span-11 mt-64 grid grid-cols-3 md:grid-cols-7 lg:grid-cols-11 gap-2 md:gap-4 lg:gap-8">
          <ParallaxImage src="/mockup.jpg" alt="Mockup Dummy" className="cols-start-1 col-span-3 md:col-span-7 lg:col-span-11 rounded-lg overflow-hidden aspect-video"/>
          <TextScroll className="cols-start-1 col-span-3 md:col-span-6 lg:col-span-9 mt-16 text-[clamp(1.5rem,5vw,60px)] leading-snug">
            Criamos experiencias visuais memoráveis para que seus clientes nunca te esqueçam.
          </TextScroll>
          <div className="mt-64 cols-start-1 col-span-3 md:col-span-7 lg:col-span-6">
            <ParallaxImage src="/galeria2.webp" alt="Mockup Dummy" className="rounded-lg max-h-[60dvh] overflow-hidden aspect-video"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
          <div className="mt-128 cols-start-7 col-span-3 md:col-span-7 lg:col-span-5">
            <ParallaxImage src="/galeria3.webp" alt="Mockup Dummy" className="rounded-lg max-h-[60dvh] overflow-hidden aspect-video"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
          <div className="mt-0 cols-start-1 col-span-3 md:col-span-7 lg:col-span-6">
            <ParallaxImage src="/galeria4.webp" alt="Mockup Dummy" className="rounded-lg max-h-[60dvh] overflow-hidden aspect-video"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
          <div className="mt-64 cols-start-7 col-span-3 md:col-span-7 lg:col-span-5">
            <ParallaxImage src="/galeria5.webp" alt="Mockup Dummy" className="rounded-lg max-h-[60dvh] overflow-hidden aspect-video"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo orci eu turpis consequat, eget mollis elit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
