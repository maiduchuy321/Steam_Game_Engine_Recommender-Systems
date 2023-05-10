import React from 'react'

const GameSugget = ({ images }) => {
  return (
    <div className='flex flex-row flex-wrap flex-start px-[60px] items-center m-4'>
        {images.map((src, index) => (
          <img key={index} className='m-2' src={src} />
        ))}

    </div>
  )
}

export default GameSugget