import React from 'react'
import Products from './Products'
const FeaturedCategory = () => {
  return (
    <div>
      <section className='call_to_action'>
        <div className='container'>
            <h1>Məhsullarımızla Sizin Qarşınızdayıq</h1>
            <p>Yüzlerce Mağaza , Minlərlə Ürün Anpraduction'da</p>
        </div>
        <div className='btn'>
            <button><a href='#'>MƏHSULLARI YOXLAYIN</a></button>
        </div>
      </section>

      <Products />
    </div>
  )
}

export default FeaturedCategory
