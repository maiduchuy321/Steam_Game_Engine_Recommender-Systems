import React from 'react'
import defaultImg0 from '../assets/default_img.png'
import defaultImg1 from '../assets/default_img1.png'
import defaultImg2 from '../assets/default_img2.png'
import defaultImg3 from '../assets/default_img3.png'
import defaultImg4 from '../assets/default_img4.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ContentRec = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

      
  return (
        <>
        <Slider {...settings}>
            <div className=''>
                <img  src={defaultImg0} />
                <img  src={defaultImg1} />
                <img  src={defaultImg2} />
                <img  src={defaultImg3} />
                <img  src={defaultImg4} />
            </div>
        </Slider>
        </>
    )
}

export default ContentRec