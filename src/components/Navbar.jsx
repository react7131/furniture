import React, { useState } from 'react'
import { navigation } from '../data'
import { CgMenuRight, CgClose } from 'react-icons/cg'
import NavMobile from './NavMobile';
import { useEffect } from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';

function Navbar() {

    const [mobileNav, setMobileNav] = useState(false)
    const [ bg, setBg ] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
          return  window.scrollY > 50 ? setBg(true) : setBg(false)
        })
    }, [])

  return (
    <header className={`${bg? 'bg-primary text-white py-4 lg:py-6': 'bg-none text-primary'} fixed top-0 left-0 w-full py-8 z-20 transition-all  duration-200`}>
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <a href="#" className='h-8  leading-relaxed text-4xl font-secondary font-bold'>
                        Mobleman
                    </a>
                </div>
                <div className='md:hidden  text-2xl lg:text-3xl cursor-pointer' onClick={() => setMobileNav(!mobileNav)}>
                    {mobileNav ? <CgClose />:<CgMenuRight />}
                </div>
                <nav className='hidden md:flex'>
                    <ul className='md:flex md:gap-x-12'>
                        {navigation.map(item => (
                            <li key={item.name} >
                                <Link smooth={true} duration={500} offset={-30} className='text-[18px] capitalize hover:underline transition-all' to={item.href}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                
                <div className={ `${mobileNav ? 'right-0': '-right-full'} md:hidden w-full max-w-xs shadow-md h-screen transition-all fixed bottom-0`}>
                    <NavMobile mobileNav setMobileNav={setMobileNav} />
                </div>
            </div>
        
        </div>
    </header>
  )
}

export default Navbar