import React from 'react'

const GameSugget = ({ images }) => {
  return (
    <div className='grid grid-cols-3 gap-2 items-center m-4'>
        {images.map((src, index) => (
          <img key={index} className='m-2' src={src} />
        ))}

    </div>
  )
}

export default GameSugget