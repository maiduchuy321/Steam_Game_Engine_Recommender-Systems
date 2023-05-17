import React from 'react'

const ContentRec = ({ images }) => {
  return (
    <div className='flex flex-row flex-wrap justify-center items-center m-4 pb-5'>
    {images.map((src, index) => (
      <img key={index} className='m-4' src={src} />
    ))}

</div>
  )
}

export default ContentRec