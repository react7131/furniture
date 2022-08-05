import React from 'react'
import { products } from '../data';

function ProductGrid() {
  
  return (
    <div className="grid sm:grid-cols-2 gap-5 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]">
      {products.map((product, index) => {
        const {image, name, price, oldPrice } = product;
        return (
          <div key={index} className='w-full  h-[380px] text-right'>
            <div className='mb-[15px] transition  h-[292px] relative flex items-center justify-center border hover:scale-110 rounded-[18px] w-full mx-auto max-w-[300px]'>
              <img className='w-full h-full object-cover rounded-[18px]' src={image} alt="" />
            </div> 
            <div className='flex sm:justify-between gap-8 justify-center '>
              <div>
                <h3 className='font-semibold lg:text-xl'>{name}</h3>
                <div className='flex items-center gap-x-3'>
                  <div>{price}</div>
                  <div className='text-[15px] line-through text-grey'>{oldPrice}</div>
                </div>
              </div>
              <div className='cursor-pointer font-semibold rounded-lg flex items-center px-4 py-1 text-primary bg-secondary hover:bg-[#becad6] transition'>خرید</div>
            </div>               
          </div>
      )})}
    </div> 
  )
}

export default ProductGrid