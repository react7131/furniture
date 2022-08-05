import React from 'react'
import NewItemsSlider from './CategorySlider';

const Category = () => {
  
  return (
    <section name='category' className='section'>
        <div className='container mx-auto'>
            <div className='flex mb-8 flex-col items-center text-center'>
                <h2 className='title max-w-[245px]'>دسته بندی ها</h2>
            </div>
            <div>
                <NewItemsSlider />
            </div>
        </div>
    </section>
  )
}

export default Category