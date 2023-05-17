import React from 'react'
import {dataDigitalBestSeller } from '../data/contentRec';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ContentRec = ({ images }) => {
    const settings = {
        dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };

      
  return (
    <div className='flex flex-row flex-wrap justify-center items-center m-4 pb-5'>
    {images.map((src, index) => (
      <img key={index} className='m-2' src={src} />
    ))}

</div>
    )
}

export default ContentRec