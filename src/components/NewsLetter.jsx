import React from 'react'

function NewsLetter() {

  return (
    <section name='contact' className="section min-h-[490px] bg-secondary">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row items-center text-primary w-full'>
          <div className='flex-1'>
            <h2 className='font-semibold text-4xl lg:max-w-[350px] mx-auto lg:mx-0 mb-5 leading-normal'>نظر خود را با ما به اشتراک بگذارید</h2>
          </div>
          <div className='flex-1 flex flex-col w-full  gap-[22px]'>
              <input className='border-0 pr-4 h-[60px] placeholder:text-gray-400 text-gray-600 outline-none rounded-lg' type="text" placeholder='ایمیل خود را وارد کنید' />
              <textarea className='border-0 p-4 placeholder:text-gray-400 text-gray-600 outline-none rounded-lg' rows={6} placeholder='نظر شما ...' />
              <button className='bg-primary text-white hover:bg-slate-900 h-[60px] border-0 outline-0 rounded-lg font-medium text-xl transition'>ارسال نظر</button>
          </div>
      </div>
    </div>
    </section>
  )
}

export default NewsLetter