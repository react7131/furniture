import React from 'react'
import image from '../assets/img/bg-11.jpg';

const Features = () => {

  return (
    <section name='features' className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
          <div className='flex-1 order-1 lg:-order-1'>
            <img className='w-full h-full object-cover' src={image} alt="" />
          </div>
        <div className='flex-1 flex flex-col '>
          <h2 className='title'>آرامش و زیبایی منزل با محصولات مدرن و مینیمال</h2>
          <p className='subtitle'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
        </div>
        </div>
      </div>    
    </section>
  )
}

export default Features