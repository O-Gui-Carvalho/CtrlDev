import React from 'react'
import Button from '../Button'
import { PiPaperPlaneTiltBold } from 'react-icons/pi'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-dvh'>
        <div className='custom-grid'>
            <div className="col-span-8 mt-32">
                <span className='text-8xl font-medium'>Tudo pronto para destacar sua empresa?</span>
                <div className="flex w-dvw gap-2 lg:gap-4 mt-12">
                    <Button where="https://wa.me/message/MZ3XAEYWTNVYJ1" type='sec'>Fale Conosco <PiPaperPlaneTiltBold/></Button>
                </div>
            </div>
            <div className="col-span-11 grid grid-cols-11 gap-8 text-darkp items-end">
                <Link href='/' className="col-span-1">Voltar ao topo</Link>
                <Link href='/' className="col-span-1 col-start-3">Sobre</Link>
                <Link href='/' className="col-span-1 col-start-5">Galeria</Link>
                <Link href='/' className="col-span-1 col-start-7">Serviços</Link>
                <ul className='col-span-1 col-start-9 flex flex-col'>
                    <li><Link href='/'>Instagram &#8599;</Link></li>
                    <li><Link href='/'>Dribble &#8599;</Link></li>
                    <li><Link href='/'>Linkedin &#8599;</Link></li>
                </ul>
                <Link href='/' className="col-span-1 col-start-11">&#169;CtrlDev</Link>
            </div>
        </div>
        <div className="font-black text-[clamp(9rem,50vw,24rem)] text-[#DAEAF2] leading-none">
            CTRLDEV
        </div>
    </div>
  )
}

export default Footer