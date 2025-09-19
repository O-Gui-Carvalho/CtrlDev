import HorizontalText from "./HorizontalText"
import TextScroll from "../TextScroll"
import ParallaxImage from "./ParallaxImage"

const Gallery = () => {
  return (
    <div className='mt-64'>
      <HorizontalText/>
      <div className="custom-grid">
        <div className="col-span-3 md:col-span-7 lg:col-span-11 mt-64 grid grid-cols-3 md:grid-cols-7 lg:grid-cols-11 gap-2 md:gap-4 lg:gap-8">
          <ParallaxImage/>
          <TextScroll className="cols-start-1 col-span-3 md:col-span-6 lg:col-span-9 mt-16 text-[clamp(1.5rem,5vw,60px)] leading-snug">
            Criamos experiencias visuais memoráveis para que seus clientes nunca te esqueçam.
          </TextScroll>
        </div>
      </div>
    </div>
  )
}

export default Gallery
