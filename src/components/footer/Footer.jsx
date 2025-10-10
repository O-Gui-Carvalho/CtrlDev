import React from 'react'
import Button from '../Button'
import { PiPaperPlaneTiltBold } from 'react-icons/pi'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='relative h-dvh overflow-hidden'>
        <div className='custom-grid h-full items-center lg:items-start'>
            <div className="col-span-3 md:col-span-7 lg:col-span-8 mt-32">
                <span className='text-[40px] leading-none md:text-6xl lg:text-8xl font-medium'>Tudo pronto para destacar sua empresa?</span>
                <div className="flex w-dvw gap-2 lg:gap-4 mt-12">
                    <Button where="https://wa.me/message/MZ3XAEYWTNVYJ1" type='sec'>Fale Conosco <PiPaperPlaneTiltBold/></Button>
                </div>
            </div>

            <div className="col-span-4 md:col-span-7 lg:col-span-11 grid grid-cols-4 md:grid-cols-7 lg:grid-cols-11 gap-2 md:gap-4 lg:gap-8 grid-row-2 items-end">
                <Link href='/' className="col-span-2 lg:col-span-1 row-start-1 pb-4 md:pb-0 leading-none">Voltar ao topo</Link>
                <ul className='col-span-2 lg:col-start-3 lg:col-span-6 row-start-2 lg:row-start-1 grid md:hidden lg:grid gap-y-4'>
                    <li className='col-span-1 lg:col-start-1'><Link href='/'>Sobre</Link></li>
                    <li className='col-span-1 lg:col-start-3'><Link href='/'>Galeria</Link></li>
                    <li className='col-span-1 lg:col-start-5'><Link href='/'>Serviços</Link></li>
                </ul>
                <ul className='col-span-2 md:col-span-4 lg:col-span-1 row-start-2 md:row-start-1 lg:col-start-9 flex flex-col md:grid md:grid-cols-4 lg:flex lg:flex-col gap-y-4 md:gap-4'>
                    <li className='col-span-1'><Link href='/'>Instagram &#8599;</Link></li>
                    <li className='col-span-1'><Link href='/' >Dribble &#8599;</Link></li>
                    <li className='col-span-1'><Link href='/' >Linkedin &#8599;</Link></li>
                </ul>
                <Link href='/' className='col-span-2 md:col-span-1 row-start-1 pb-4 md:pb-0 lg:col-start-11'>&#169;CtrlDev</Link>
            </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full select-none -z-10" style={{ transform: 'translateY(25%)' }}>
            <Image 
                src='/destaq-footer.svg' 
                alt='Destaq Logo' 
                width={1920} 
                height={525}
                className="w-full h-auto"
            />
        </div>
    </div>
  )
}

export default Footer