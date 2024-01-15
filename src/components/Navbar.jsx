import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const[Open, setOpen] = useState(false)
    const togglemenu = () => {
        setOpen(!Open)
        const navbar = document.querySelector(".navbar")
        navbar.style.display =(navbar.style.display == "" || navbar.style.display=="none") ?"block" : "none"

        const change = document.getElementById("change")
        change.classList.toggle("fa-xmark")
        navbar.classList.toggle("bars")
    }
  return (
    <div>
      <div className='wp-contact'>
        <a href='#'><i className='fab fa-whatsapp'></i></a>
        </div>
    <div className='container_py'>
    <div className='header'>
        <header>
            <div className='logo'>
                <img src='https://www.modoko.com.tr/assets/img/logo/logo.png'></img>
            </div>

            <div className='navbar'>
                <ul>
                    <Link to='/About'><li>HAQQIMIZDA</li></Link>
                    <li><a href='#'>ƏLAQƏ</a></li>
                </ul>
                <div className='nav-social-media'>
                <div className='instagram'>
                <a href='#'><i className='fab fa-instagram'></i></a>
                </div>
                <div className='facebook'>
                <a href='#'><i className='fab fa-facebook'></i></a>
                </div>
            </div>
            </div>

            <div className='hamburger'>
                <i id='change' onClick={togglemenu} className='fas fa-bars'></i>
            </div>
        </header>
      </div>
    </div>
    <hr></hr>
    <nav>
    <ul>
                    <li><a href='#'>EV MOBİLYALARI</a></li>
                    <li><a href='#'>UŞAQ & GƏNC</a></li>
                    <li><a href='#'>BAĞÇA MOBİLYALARI</a></li>
                    <li><a href='#'>MƏTBƏX & HAMAM</a></li>
                    <li><a href='#'>YATAQ & BAZA & QARDEROB</a></li>
                    <li><a href='#'>Dəmir Konstruksiya</a></li>
                </ul>
    </nav>
    </div>
  )
}

export default Navbar
