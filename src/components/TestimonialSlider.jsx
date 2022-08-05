import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import '../slider.css';
import { testimonial } from '../data'

function TestimonialSlider() {

  const { persons } = testimonial;  
  return (
    <Swiper
        className='testimonialSlider'
        dir='rtl'
        navigation
        autoplay
        modules={[Navigation, Autoplay]}
    >
        {persons.map((person, index) => {
            const { avatar, name, message } = person
            return (
                <SwiperSlide  key={index}>
                    <div className='flex flex-col items-center min-h-[300px]'>
                        <img className='w-20 h-20' src={avatar.type} alt="" />
                        <div className='font-semibold text-xl my-5'>{name}</div>
                        <div className='text-xl max-w-[560px]'>{message}</div>
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
  )
}

export default TestimonialSlider