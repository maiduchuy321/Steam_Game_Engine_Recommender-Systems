import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ContentRec = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <Slider {...settings}>
            <div className='flex flex-row flex-wrap justify-center items-center m-4 pb-5'>

            </div>
    </Slider>
    )
}

export default ContentRec