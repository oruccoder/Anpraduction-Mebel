import React from 'react'
import Category from './Category'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'
const Slider = () => {

    const slideImage = [
        {
            url: "https://www.ulcdn.net/media/Slideshow/RDSale_slideshow.jpg?1704998425"
        },
        {
            url: "https://www.ulcdn.net/media/Slideshow/UI_Slideshow_FHK.jpg?1704188045"
        },
        {
            url: "https://www.ulcdn.net/media/Slideshow/UI_Slideshow_FHK.jpg?1704188045"
        }
    ]

    const divStyle = {
        width: "100%",
        height: "100vh",
        backgroundSize: "cover"
    }
  return (
    <div>
      <div className='slide-container'>
      <Slide>
        {
            slideImage.map((image,index) => (
                <div key={index}>
                    <div style={{...divStyle, backgroundImage: `url(${image.url})`}}></div>
                </div>
            ))
        }
      </Slide>
      </div>

      <Category />
    </div>
  )
}

export default Slider
