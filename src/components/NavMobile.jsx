import React from 'react'
import { navigation } from '../data'
import {Link, animateScroll as scroll} from 'react-scroll';

function NavMobile({ setMobileNav }) {
  return (
    <div className='bg-white w-full h-full shadow-2xl'>
        <ul className= 'text-center h-full flex flex-col justify-center items-center gap-y-6'>
            {navigation.map(item => (
                <li key={item.name} className='text-black font-semibold capitalize hover:underline'>
                    <Link onClick={() => setMobileNav(false)} smooth={true} duration={500} className='text-xl font-medium capitalize' to={item.href}>{item.name}</Link>
                </li>
                ))}
        </ul>
    </div>
  )
}

export default NavMobile