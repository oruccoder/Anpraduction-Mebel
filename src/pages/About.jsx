import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const About = () => {
    return (
        <div>
            <Navbar />
            <div className='container_py'>
                <div className='about_title'>
                    <h2>
                        <Link to='/About'>Haqqımızda</Link>
                    </h2>
                </div>
                <div className='about_container'>
                    <img src={"https://www.modoko.com.tr/uploads/blog/galeri/img_1700555324_246882648.jpg"}></img>

                    <div className='about_txt'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eligendi officiis ipsa est natus doloribus cumque enim dicta molestias ipsum? Alias atque tempore vitae, voluptatem excepturi voluptas molestias officia dolore rem neque hic, quam voluptatum facere eligendi. Repellendus, quidem? Ratione labore quas eos, eaque voluptatem illum doloribus, sequi tempore repellendus dolor neque placeat expedita exercitationem, minus debitis. Quas tenetur exercitationem alias harum quae voluptatem velit itaque voluptates ipsam dolores officiis totam dolorem cumque voluptatibus, labore illo reprehenderit perferendis animi veritatis accusantium quisquam a? Doloremque ratione quo fuga eveniet porro nihil incidunt natus laborum, officiis, mollitia quos at deleniti exercitationem odio asperiores, necessitatibus expedita officia cumque aspernatur est! Esse, voluptate nihil. Alias dolore fugit modi numquam distinctio mollitia hic, corporis, magni consectetur recusandae, perferendis iusto rerum dolorem voluptas ducimus nulla inventore? Corrupti, porro minus voluptatibus, explicabo odit amet vitae culpa natus ut dolorum accusamus cumque ex, assumenda perferendis tempora consectetur excepturi ullam voluptatum. Possimus aliquam accusantium qui porro eveniet pariatur placeat explicabo. Fugiat, dicta. Neque officiis rerum quidem, voluptate unde vel cumque. Dolorum excepturi ipsa, officiis vitae ea ab impedit ratione repudiandae asperiores fugiat deserunt voluptate inventore reprehenderit id? Nisi veritatis magnam ea hic neque debitis molestias veniam explicabo consequuntur repellat?
                    </div>
                </div>
            </div>

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

export default About
