import React from 'react'
import { footer } from '../data'

function Footer() {

  const { social, copyright } = footer;
  return (
    <footer className="section bg-primary text-white">
        <div className='container mx-auto '>
            <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
                <a href="#" className='mb-6 lg:mb-0 h-8 text-white leading-relaxed text-4xl font-secondary font-bold'>
                    Mobleman
                </a>
                <div className='flex gap-x-4'>
                    {
                        social.map( (item,index) => (
                            <div key={index} className='rounded-full w-12 h-12 text-2xl bg-gray-700 hover:bg-accent transition flex justify-center items-center'>
                                <a href={item.href}>
                                    {item.icon} 
                                </a>
                            </div>
                        ) )
                    }
                </div>
            </div>
            <p className='text-center font-secondary' dir='ltr'>&copy;{copyright}</p>
        
    </div>
    </footer>
  )
}

export default Footer