import Image from 'next/image'
import { memo } from 'react'

/**
 * Card de apresentação de benefícios/características
 * @param {Object} props
 * @param {string} props.imageSrc - Caminho da imagem do ícone
 * @param {string} props.imageAlt - Texto alternativo da imagem
 * @param {string} props.title - Título do card
 * @param {React.ReactNode} props.children - Conteúdo do card
 * @param {string} props.colStart - Classes de posicionamento de coluna
 * @param {string} [props.className] - Classes CSS adicionais
 */

const AboutCard = ({
    imageSrc, 
    imageAlt, 
    title, 
    children, 
    colStart,
    className = ''
  }) => {
  return (
    <article className={`col-span-full lg:col-span-3 ${colStart} ${className}`}>
        <header className="flex gap-8 items-center pb-8">
            <div className="relative flex-shrink-0 w-[50px] h-[50px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={50}
                height={50}
                className='object-contain'
              />
            </div>
            <h3 className='text-3xl'>{title}</h3>
        </header>
        {children}
    </article>
  )
}

export default memo(AboutCard)