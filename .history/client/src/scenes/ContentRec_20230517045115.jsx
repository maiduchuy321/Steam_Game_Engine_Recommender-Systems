import React from 'react'
import {dataDigitalBestSeller } from '../data/contentRec';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ContentRec = ({ images }) => {

  return (
    <div className='flex flex-row flex-wrap justify-center items-center m-4 pb-5'>
    {images.map((src, index) => (
      <img key={index} className='m-2' src={src} />
    ))}

</div>
    )
}

export default ContentRec