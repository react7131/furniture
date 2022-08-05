import React from 'react'
import ProductGrid from './ProductGrid'

function Products() {

  return (
    <section name='products' className="section">
        <div className='container mx-auto text-center'>
            <div>
                <h2 className='title'>تمام محصولات</h2>
            </div>
            <ProductGrid />
        </div>
    </section>
  )
}

export default Products