import React from 'react'
import Footer from './Footer'
const Calltoaction = () => {
  return (
    <div>
      <section className='call_to_action'>
      <div className='container'>
            <h1>Anpraduction Mebel</h1>
            <p>Yüzlerce Mağaza , Minlərlə Ürün Anpraduction'da</p>
        </div>
        <div className='contact_btn'>
            <a href='#'>ƏLAQƏ</a>
        </div>

        <div className='social-media'>
            <a href='#'><i className='fab fa-facebook'></i></a>
            <a href='#'><i className='fab fa-twitter'></i></a>
            <a href='#'><i className='fab fa-instagram'></i></a>
            <a href='#'><i className='fab fa-youtube'></i></a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Calltoaction
