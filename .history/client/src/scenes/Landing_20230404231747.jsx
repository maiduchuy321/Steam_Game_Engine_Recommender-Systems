import React, { useState } from 'react';

const Landing = () => {
  return (
    <>
    <div className='card mx-auto max-w-[80%] bg-[#f2f2f2]'>
      <div className='card-body'>
        <div className='card-body-header'>
            <h1 className='text-head text-center mb-4'>
              Video Game Recommendation Engine
            </h1>
            <h3 className='text-[1.25rem] text-center'>
              Select three game titles you've enjoyed to get started!
            </h3>
        </div>
        <hr />
      </div>
    </div>
    </>
  )
}

export default Landing