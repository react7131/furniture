import React from 'react'
import { stats } from '../data';

function Stats() {
  return (
    <div className='p-12 bg-sky-200 text-yellow-600 rounded-[20px]'>
        <div className='flex flex-wrap gap-y-8 justify-center'>
            {
                stats.map( item => (
                    <div key={item.text} className='min-h-[70px] w-3/6 lg:flex-1 flex flex-col justify-center items-center odd:border-r lg:border-r lg:last:border-r-0 '>
                        <div className='text-2xl lg:text-4xl font-semibold'>{item.value}</div>
                        <div className='text-base font-light max-w-[110px] mx-auto lg:text-xl'>{item.text}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Stats