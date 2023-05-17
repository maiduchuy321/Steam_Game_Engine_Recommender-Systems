import React from 'react'
import {dataDigitalBestSeller } from '../data/contentRec';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ContentRec = () => {
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
        <div className='m-8'>
        <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="card">
            <img className='min-w-[252px] min-h-[141.95px] max-w-[252px] max-h-[141.95px]'
                src={
                  item.linkImg}
                alt={item.title}
            />
          </div>
        ))}
        </Slider>
        </div>
    )
}

export default ContentRec