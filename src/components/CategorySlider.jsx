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
              <div className='absolute z-10 bottom-[20px] text-center w-full text-white text-[18px] lg:text-2xl font-medium capitalize'>{category.name}</div>
            </div>
          </SwiperSlide>
      ))}
  </Swiper>
  )
}

export default CategorySlider