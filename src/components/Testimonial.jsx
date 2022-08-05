import React from 'react'
import { testimonial } from '../data'
import TestimonialSlider from './TestimonialSlider';

function Testimonial() {
  
    return (
    <section className="section">
        <div className="container mx-auto">
            <div className="flex justify-center">
                <div className="w-full text-center lg:max-w-[50%]">
                    <h2 className='title mb-9'>آنچه مردم درباره ما می گویند</h2>                  
                    <TestimonialSlider />  
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial