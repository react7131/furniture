import React from 'react'

function Hero() {

  return (
    <section name='home' className="w-full h-[750px] bg-hero  bg-left lg:bg-center bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:mb-12">
        <div className='w-full h-full absolute top-0 left-0 -z-10 bg-[rgba(0,0,0,1)] '></div>
        <div className='container mx-auto text-center z-10'>
            <h1 className='text-3xl mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-tight lg:max-w-[888px]'>خانه ی رویایی خود را با محصولات ما بسازید</h1>
            <h2 className='mb-[30px] mx-auto  max-w-[627px] lg:mb-[65px] md:text-xl'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</h2>
            <button className=' border-0 bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] rounded-md px-[32px] lg:px-[80px] py-[9px] text-xl mb-[160px] lg:mb-[194px] backdrop-blur-md transition'>خرید</button>
        </div>
    </section>
  )
}

export default Hero