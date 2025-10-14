'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { SplitText } from 'gsap/all'

const menuLinks = [
    {path: '/', label: 'Home'},
    {path: '/', label: 'Projetos'},
    {path: '/', label: 'Serviços'},
    {path: '/', label: 'Blog'},
    {path: '/', label: 'Contato'},
]

gsap.registerPlugin(SplitText)

const Header = () => {
    const container = useRef(null)
    const overlay = useRef(null)
    const menuHolder = useRef([])
    const tl = useRef(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const animTexts = useRef([])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useGSAP(() => {
        if (!overlay.current || !menuHolder.current.length || !animTexts.current.length) return;

        const splitAnim = animTexts.current.map(el => new SplitText(el, { type: 'lines', autoSplit: true, mask:'lines'}))
        
        const items = menuHolder.current

        gsap.set(splitAnim.map(s => s.lines), { y: 100 })
        gsap.set(items, { y: 100 })

        tl.current = gsap.timeline({paused: true})
        .to(overlay.current, {
            duration: 1.25,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power3.inOut",
        })
        .to(items, {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.inOut',
            delay: -0.75,
        })
        .to(splitAnim.map(s => s.lines), {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.inOut',
            delay: -0.75,
        }, '-=0.8')
    }, {scope: container})

    useEffect(() => {
        if (isMenuOpen) {
            tl.current.play()
        } else {
            tl.current.reverse()
        }
    }, [isMenuOpen])

  return (
    <header ref={container}>

        <div className="z-10 w-full bg-[#01090D80] fixed backdrop-blur-2xl border-b border-b-[#E6F7FF80]">
            <div className="custom-grid py-4">
                <div className="justify-between items-start col-span-3 md:col-span-6 lg:col-span-10">
                    <div className="max-w-fit h-full flex items-center">
                        <Link href='/'>  
                            
                            <svg className="h-auto w-24 md:w-36" viewBox="0 0 1362 316" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M218.601 123.093C218.601 196.581 166.798 246.186 90.747 246.186H0V0H90.747C167.166 0 218.601 49.6046 218.601 123.093ZM90.3796 40.4186H44.0876V205.767H90.3796C141.08 205.767 174.514 173.065 174.514 123.093C174.514 73.1209 141.08 40.4186 90.3796 40.4186Z" fill="#308FBF"/>
                                <path d="M244.434 158C244.434 104.721 282.643 66.1395 335.548 66.1395C388.453 66.1395 426.663 104.721 426.663 158C426.663 161.307 426.295 164.247 425.56 169.023H285.582C289.991 194.009 308.361 209.442 335.548 209.442C353.918 209.442 368.981 202.46 377.799 189.233H421.886C410.497 226.344 377.431 249.86 335.548 249.86C282.276 249.86 244.434 211.647 244.434 158ZM287.419 139.628H383.677C377.064 119.051 359.429 106.558 335.548 106.558C311.3 106.558 293.665 119.051 287.419 139.628Z" fill="#E6F7FF"/>
                                <path d="M605.094 134.116H564.68C564.68 116.479 549.25 104.721 525.736 104.721C506.632 104.721 492.671 113.907 492.671 126.033C492.671 162.409 616.483 164.981 616.483 246.186H576.07C576.07 192.172 452.257 198.419 452.257 126.033C452.257 91.493 484.221 66.1395 527.941 66.1395C573.498 66.1395 605.094 94.0651 605.094 134.116ZM477.975 198.419C492.671 198.419 503.693 209.442 503.693 224.14C503.693 238.837 492.671 249.86 477.975 249.86C463.279 249.86 452.257 238.837 452.257 224.14C452.257 209.442 463.279 198.419 477.975 198.419Z" fill="#E6F7FF"/>
                                <path d="M629.325 110.233V69.8139H651.369V22.0465H691.783V69.8139H734.033V110.233H691.783V169.023C691.783 195.112 706.846 209.442 734.033 209.442V249.86C684.435 249.86 651.369 217.526 651.369 169.023V110.233H629.325Z" fill="#E6F7FF"/>
                                <path d="M893.88 159.837V135.953H934.293V184.456C934.293 199.888 943.846 209.442 960.011 209.442V249.86C937.6 249.86 918.495 240.307 907.106 224.874C890.94 240.307 868.897 249.86 844.281 249.86C793.948 249.86 754.269 210.177 754.269 159.837C754.269 109.13 793.948 69.8139 844.281 69.8139H934.293V110.233H844.281C816.726 110.233 794.682 131.912 794.682 159.837C794.682 187.763 816.726 209.442 844.281 209.442C872.571 209.442 893.88 187.763 893.88 159.837Z" fill="#E6F7FF"/>
                                <path d="M1110.59 159.837V135.953H1151V316H1110.59V231.856C1095.89 243.247 1077.89 249.86 1057.68 249.86C1009.18 249.86 970.976 210.177 970.976 159.837C970.976 109.13 1010.65 69.8139 1060.99 69.8139H1151V110.233H1060.99C1033.43 110.233 1011.39 131.912 1011.39 159.837C1011.39 187.763 1033.43 209.442 1060.99 209.442C1089.28 209.442 1110.59 187.763 1110.59 159.837Z" fill="#E6F7FF"/>
                                <path d="M1224.18 100.443C1223.79 96.5568 1222.08 93.4659 1219.03 91.1705C1215.99 88.875 1212.16 87.7273 1207.54 87.7273C1204.29 87.7273 1201.43 88.2841 1198.95 89.3977C1196.5 90.5114 1194.57 92.0568 1193.16 94.0341C1191.77 95.9886 1191.08 98.2159 1191.08 100.716C1191.08 102.557 1191.48 104.17 1192.27 105.557C1193.07 106.943 1194.14 108.136 1195.48 109.136C1196.84 110.114 1198.34 110.955 1199.98 111.659C1201.64 112.364 1203.31 112.955 1204.99 113.432L1212.35 115.545C1214.58 116.159 1216.81 116.943 1219.03 117.898C1221.26 118.852 1223.29 120.057 1225.14 121.511C1227 122.943 1228.49 124.705 1229.6 126.795C1230.74 128.864 1231.31 131.352 1231.31 134.261C1231.31 137.989 1230.34 141.341 1228.41 144.318C1226.48 147.295 1223.7 149.659 1220.09 151.409C1216.48 153.136 1212.15 154 1207.1 154C1202.35 154 1198.23 153.216 1194.73 151.648C1191.23 150.057 1188.48 147.864 1186.48 145.068C1184.48 142.273 1183.35 139.034 1183.1 135.352H1189.65C1189.87 138.102 1190.78 140.432 1192.37 142.341C1193.97 144.25 1196.03 145.705 1198.58 146.705C1201.12 147.682 1203.97 148.17 1207.1 148.17C1210.58 148.17 1213.67 147.591 1216.37 146.432C1219.1 145.25 1221.24 143.614 1222.78 141.523C1224.35 139.409 1225.14 136.955 1225.14 134.159C1225.14 131.795 1224.52 129.818 1223.29 128.227C1222.07 126.614 1220.35 125.261 1218.15 124.17C1215.97 123.08 1213.43 122.114 1210.54 121.273L1202.19 118.818C1196.72 117.182 1192.47 114.92 1189.44 112.034C1186.42 109.148 1184.91 105.466 1184.91 100.989C1184.91 97.2386 1185.91 93.9432 1187.91 91.1023C1189.93 88.2386 1192.66 86.0114 1196.09 84.4205C1199.54 82.8068 1203.42 82 1207.72 82C1212.06 82 1215.9 82.7955 1219.24 84.3864C1222.58 85.9773 1225.23 88.1705 1227.18 90.9659C1229.16 93.7386 1230.22 96.8977 1230.35 100.443H1224.18Z" fill="#E6F7FF"/>
                                <path d="M1242.42 88.7159V82.9886H1293.04V88.7159H1270.92V152.807H1264.54V88.7159H1242.42Z" fill="#E6F7FF"/>
                                <path d="M1353.93 82.9886H1360.31V129.216C1360.31 133.966 1359.19 138.216 1356.97 141.966C1354.74 145.693 1351.64 148.636 1347.66 150.795C1343.7 152.932 1339.1 154 1333.85 154C1328.62 154 1324.02 152.92 1320.04 150.761C1316.07 148.602 1312.97 145.659 1310.74 141.932C1308.51 138.205 1307.4 133.966 1307.4 129.216V82.9886H1313.77V128.773C1313.77 132.477 1314.6 135.784 1316.26 138.693C1317.92 141.58 1320.25 143.852 1323.25 145.511C1326.27 147.17 1329.81 148 1333.85 148C1337.9 148 1341.43 147.17 1344.45 145.511C1347.48 143.852 1349.81 141.58 1351.44 138.693C1353.1 135.784 1353.93 132.477 1353.93 128.773V82.9886Z" fill="#E6F7FF"/>
                                <path d="M1203.73 233.807H1183.27V163.989H1204.95C1211.61 163.989 1217.31 165.375 1222.03 168.148C1226.78 170.92 1230.42 174.898 1232.94 180.08C1235.47 185.261 1236.73 191.477 1236.73 198.727C1236.73 206.045 1235.43 212.33 1232.84 217.58C1230.27 222.807 1226.52 226.818 1221.59 229.614C1216.68 232.409 1210.73 233.807 1203.73 233.807ZM1189.65 228.08H1203.35C1209.35 228.08 1214.37 226.898 1218.42 224.534C1222.47 222.17 1225.5 218.795 1227.52 214.409C1229.54 210.023 1230.56 204.795 1230.56 198.727C1230.53 192.705 1229.53 187.523 1227.56 183.182C1225.6 178.841 1222.69 175.511 1218.83 173.193C1214.99 170.875 1210.24 169.716 1204.58 169.716H1189.65V228.08Z" fill="#E6F7FF"/>
                                <path d="M1271.99 163.989V233.807H1265.62V163.989H1271.99Z" fill="#E6F7FF"/>
                                <path d="M1361.23 198.898C1361.23 206.17 1359.94 212.5 1357.35 217.886C1354.76 223.25 1351.19 227.409 1346.64 230.364C1342.12 233.295 1336.92 234.761 1331.03 234.761C1325.14 234.761 1319.93 233.295 1315.38 230.364C1310.86 227.409 1307.3 223.25 1304.71 217.886C1302.14 212.5 1300.86 206.17 1300.86 198.898C1300.86 191.625 1302.14 185.307 1304.71 179.943C1307.3 174.557 1310.87 170.398 1315.42 167.466C1319.96 164.511 1325.17 163.034 1331.03 163.034C1336.92 163.034 1342.12 164.511 1346.64 167.466C1351.19 170.398 1354.76 174.557 1357.35 179.943C1359.94 185.307 1361.23 191.625 1361.23 198.898ZM1355.03 198.898C1355.03 192.648 1353.98 187.295 1351.89 182.841C1349.8 178.364 1346.95 174.943 1343.34 172.58C1339.72 170.216 1335.62 169.034 1331.03 169.034C1326.46 169.034 1322.37 170.216 1318.76 172.58C1315.14 174.943 1312.28 178.352 1310.17 182.807C1308.08 187.261 1307.03 192.625 1307.03 198.898C1307.03 205.148 1308.08 210.5 1310.17 214.955C1312.26 219.409 1315.11 222.83 1318.72 225.216C1322.34 227.58 1326.44 228.761 1331.03 228.761C1335.62 228.761 1339.72 227.58 1343.34 225.216C1346.97 222.852 1349.84 219.443 1351.93 214.989C1354.02 210.511 1355.05 205.148 1355.03 198.898Z" fill="#E6F7FF"/>
                            </svg>

                        </Link>
                    </div>
                </div>
                <div className="col-span-1 flex items-center justify-end">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-12 text-lg text-background self-center cursor-pointer">
                        <div className="relative flex flex-col justify-center items-end py-4">
                            <span className={`h-[2px] rounded-xl bg-background w-8 md:w-12 absolute transition-all origin-center will-change-transform duration-750 ease-[cubic-bezier(0.87,0,0.13,1)] ${isMenuOpen ? 'translate-y-0 rotate-45 scale-x-[1.05]' : 'translate-y-[-8px]'}`}></span>
                            <span className={`h-[2px] rounded-xl bg-background w-8 md:w-12 absolute transition-all origin-center will-change-transform duration-750 ease-[cubic-bezier(0.87,0,0.13,1)] ${isMenuOpen ? 'translate-y-0 rotate-[-45deg] scale-x-[1.05]' : 'translate-y-[8px]'}`}></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>

        {/* Nav */}

        <div ref={overlay} className="fixed top-0 left-0 w-dvw h-dvh bg-darkp z-5 clip-overlay">
            <div className="grid grid-rows-3 grid-cols-4 md:grid-cols-8 lg:grid-cols-12 md:gap-4 lg:gap-8 px-8 h-dvh content-end">
                <div className="hidden md:block md:col-span-4 lg:col-span-5 row-span-2 -ml-8 relative h-dvh">
                    <Image src='/Nav.svg' alt='Nav Image' fill className='object-cover'/>
                </div>
                <div className="col-span-2 row-span-2 lg:col-start-7 flex flex-col justify-end">
                    <nav>
                        {menuLinks.map((link, index) => (
                            <div className="w-max overflow-hidden" key={`${link.path}-${index}`}>
                                <div ref={el => menuHolder.current[index] = el} className="relative" onClick={toggleMenu}>
                                    <Link href={link.path} className='text-[clamp(3rem,4vw,5rem)] leading-14 md:leading-14 lg:leading-22 text-background transition-colors duration-300 hover:text-lights'>
                                        {link.label}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </nav>
                </div>
                <div className="col-start-1 md:row-span-2 md:col-start-7 lg:col-start-10 col-span-2 flex flex-col justify-end overflow-hidden">
                    <p className="text-[#ffffff80] text-[clamp(0.75rem,2vw,1rem)] pb-16 md:pb-0" ref={el => animTexts.current[0] = el}>
                        Crie sua marca conosco e descubra o poder da presença online.
                    </p>
                </div>
                <div className="col-start-1 md:col-start-5 lg:col-start-7 col-span-2 flex flex-col justify-end gap-8 pb-8">
                    <span className="text-[#ffffff80] text-[clamp(0.75rem,2vw,1rem)]" ref={el => animTexts.current[1] = el}>Espirito Santo</span>
                </div>
                <div className="col-start-3 md:col-start-7 lg:col-start-10 col-span-2 flex flex-col justify-end text-[#ffffff80] text-[clamp(0.75rem,2vw,1rem)] text-right pb-8">
                    <span ref={el => animTexts.current[2] = el}>Instagram &#8599;</span>
                    <span ref={el => animTexts.current[3] = el}>Dribble &#8599;</span>
                    <span ref={el => animTexts.current[4] = el}>Github &#8599;</span>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header