import React from 'react'

const Header = () => {
  return (
    <div className=''>
        <div className='py-5'>
            <img className=' mx-auto' src="https://steamstore-a.akamaihd.net/public/shared/images/header/logo_steam.svg?t=962016"></img>
        </div>

        <h1 className='items-center md:text-3xl text-4xl text-center text-[#fafafa]'>
            Steam Games Recommendation System
        </h1>
        <p>Better than Steam Labs'. shhh</p>
        
    </div>
  )
}

export default Header