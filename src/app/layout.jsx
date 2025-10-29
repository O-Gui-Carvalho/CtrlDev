import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL("https://www.ctrldev.com.br"),
  title: {
    default: "Destaq - Crie seu site conosco!",
    template: "%s | Destaq",
  },
  description: "A Destaq cria sites profissionais e otimizados para pequenas e médias empresas. Transforme sua presença online e atraia mais clientes.",
  keywords: ["criação de sites", "desenvolvimento web", "sites profissionais", "agência digital", "seo"],
  authors: [{ name: "Destaq" }],
  creator: "Destaq",
  publisher: "Destaq",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.ctrldev.com.br"
  },
  openGraph: {
    title: "Destaq - Crie seu site conosco!",
    description: "A Destaq cria sites profissionais e otimizados para pequenas e médias empresas. Transforme sua presença online e atraia mais clientes.",
    url: 'https://www.ctrldev.com.br',
    siteName: "Destaq",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Destaq - Criação de Sites",
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  icons: { 
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  viewport: { 
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <SmoothScroll>
          <Preloader/>
          <Header/>
          {children}
          <Footer/>
        </SmoothScroll>
      </body>
    </html>
  );
}
