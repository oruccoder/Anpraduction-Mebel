import React, { useState } from 'react'
import Slider from './Slider'
import Navbar from './Navbar'
const Header = () => {
  return (
    <div>
    <div className='wp-contact'>
        <a href='#'><i className='fab fa-whatsapp'></i></a>
        </div>
    <Navbar />
    <Slider />
    </div>
  )
}

export default Header
