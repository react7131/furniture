import React from 'react'
import image from '../assets/img/bg-18.jpg';

function About() {
   
  return (
    <section name='about' className='section'>
        <div className="container mx-auto">
            <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
                <div className=' flex-1 flex flex-col'>
                    <h3 className='title text-center lg:text-right'>
                        درباره ی ما
                    </h3>
                    <p className='subtitle'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                </div>
                <div className="flex-1">
                    <img className='w-full h-full object-cover' src={image} alt="" />
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default About