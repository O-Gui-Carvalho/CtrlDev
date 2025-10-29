import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import Gallery from "@/components/gallery/Gallery";
import Hero from "@/components/hero/Hero";
import Transition from "@/components/parallax/Transition";
import Services from "@/components/services/Services";

export const metadata = {
  description: "Descubra como a Destaq pode transformar sua presença online com sites profissionais, rápidos e otimizados para o Google.",
};

export default function Home() {

    const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.ctrldev.com.br/#website",
        "url": "https://www.ctrldev.com.br",
        "name": "Destaq",
        "description": "Criação de sites profissionais",
        "inLanguage": "pt-BR",
      },
      {
        "@type": "Organization",
        "@id": "https://www.ctrldev.com.br/#organization",
        "name": "Destaq",
        "url": "https://www.ctrldev.com.br",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.ctrldev.com.br/logo.png",
        },
        "description": "A Destaq cria sites profissionais e otimizados para pequenas e médias empresas.",
        "sameAs": [
          
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+55-27-98853-8076",
          "contactType": "customer service",
          "areaServed": "BR",
          "availableLanguage": "Portuguese"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.ctrldev.com.br/#webpage",
        "url": "https://www.ctrldev.com.br",
        "name": "Início | Destaq",
        "isPartOf": {
          "@id": "https://www.ctrldev.com.br/#website"
        },
        "about": {
          "@id": "https://www.ctrldev.com.br/#organization"
        },
        "description": "Descubra como a Destaq pode transformar sua presença online com sites profissionais, rápidos e otimizados para o Google.",
        "inLanguage": "pt-BR",
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaOrg)
        }}
      />
      <main>
        <Hero/>
        <About/>
        <Gallery/>
        <Services/>
        <Blog/>
        <Transition/>
      </main>
    </>
  );
}
