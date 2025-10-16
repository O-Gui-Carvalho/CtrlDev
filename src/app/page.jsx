import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import Gallery from "@/components/gallery/Gallery";
import Hero from "@/components/hero/Hero";
import Transition from "@/components/parallax/Transition";
import Services from "@/components/services/Services";

export default function Home() {

  return (
    <div>
      <Hero/>
      <About/>
      <Gallery/>
      <Services/>
      <Blog/>
      <Transition/>
    </div>
  );
}
