import React from 'react'
import defaultImg0 from '../assets/default_img.png'
import defaultImg1 from '../assets/default_img1.png'
import defaultImg2 from '../assets/default_img2.png'
import defaultImg3 from '../assets/default_img3.png'
import defaultImg4 from '../assets/default_img4.png'
const GameSugget = () => {
  return (
    <div className='grid grid-cols-3 gap-4 items-center'>
        <img className='m-2 ' src={defaultImg0}/>
        <img className='m-2 ' src={defaultImg1}/>
        <img className='m-2 ' src={defaultImg2}/>
        <img className='m-2 ' src={defaultImg3}/>
        <img className='m-2 ' src={defaultImg4}/>

    </div>
  )
}

export default GameSugget