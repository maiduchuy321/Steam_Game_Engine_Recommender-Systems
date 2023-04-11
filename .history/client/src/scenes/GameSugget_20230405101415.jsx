import React from 'react'
import defaultImg0 from '../assets/default_img.png'
import defaultImg1 from '../assets/default_img1.png'
import defaultImg2 from '../assets/default_img2.png'
import defaultImg3 from '../assets/default_img3.png'
import defaultImg4 from '../assets/default_img4.png'
const GameSugget = () => {
  return (
    <div className='flex flex-wrap'>
        <img className='w-[460px] h-[215px]' src={defaultImg0}/>
        <img className='w-[460px] h-[215px]' src={defaultImg1}/>
        <img className='w-[460px] h-[215px]' src={defaultImg2}/>
        <img className='w-[460px] h-[215px]' src={defaultImg3}/>
        <img className='w-[460px] h-[215px]' src={defaultImg4}/>

    </div>
  )
}

export default GameSugget