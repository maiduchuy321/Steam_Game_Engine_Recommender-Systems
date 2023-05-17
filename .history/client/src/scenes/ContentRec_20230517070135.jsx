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
      autoplay: true,
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
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
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
        <div className='m-8'>
        <Slider {...settings}>
            {images.map((src, index) => (
                <div className='card '>
                    <img key={index} className='min-h-[200px] p-2' src={src} />
                </div>
            ))}
        </Slider>
        </div>
    )
}

export default ContentRec