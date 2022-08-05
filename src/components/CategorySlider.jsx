import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { categories } from '../data';

function CategorySlider() {

  return (
    <Swiper grabCursor={true} 
    className='h-[350px]'
    breakpoints={{
      320: {
        slidesPerView: 2,
        spaceBetween: 18
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30
      },
    }}>
      {categories.map( (category, index) => (
          <SwiperSlide className='max-w-[285px] max-h-[350px]' key={index}>
            <div className='relative h-full'>
              <img className='w-full h-full object-cover' src={category.image} alt={category.name} />
              <div className='absolute z-10 bottom-[20px] text-center w-full text-primary text-[18px] lg:text-2xl font-medium capitalize bg-[rgba(255,255,255,0.6)] rounded-md px-[32px] lg:px-[80px] py-[9px] text-xl backdrop-blur-md'>{category.name}</div>
            </div>
          </SwiperSlide>
      ))}
  </Swiper>
  )
}

export default CategorySlider