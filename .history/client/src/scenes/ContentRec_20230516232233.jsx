import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ContentRec = ({ images }) => {
  return (
    <Slider>
        <div className='flex flex-row flex-wrap justify-center items-center m-4 pb-5'>
    {images.map((src, index) => (
      <img key={index} className='m-4' src={src} />
    ))}
    </div>
    </Slider>
    )
}

export default ContentRec