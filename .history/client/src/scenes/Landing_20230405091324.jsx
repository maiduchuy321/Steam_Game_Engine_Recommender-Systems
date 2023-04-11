import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Select from 'react-select'
import { gameName, ratingGame } from '../data/gameName.tsx';
// import { gameName } from '../data/gameName.jsx';


const chooseGame = [
  {
    value: 'gameName',
    label: 'Choose a game you like',
  },
  ...gameName,
];



const Landing = () => {
  return (
    <>
    <div className='card mx-auto my-4 max-w-[80%] bg-[#f2f2f2] p-4'>
      <div className='card-body'>
        <div className='card-body-header text-[#737373]'>
            <h1 className='text-head text-center mb-4'>
              Video Game Recommendation Engine
            </h1>
            <h3 className='text-[1.25rem] text-center text-[#737373]'>
              Select five game titles you've enjoyed to get started!
            </h3>
        </div>
        <hr className='my-4' />

        <div className='card-body-container'>

          <form>
            <div id='card-input-1' className='card-body-input p-4'>
              <div className='flex flex-row justify-center'>
                <label>Game 1:</label>

                <Select className='p-2 basis-3/5'
                  defaultValue={chooseGame[0]}
                  isClearable
                  isSearchable
                  name="game"
                  options={chooseGame}
                />

                <Select className='p-2'
                  isClearable
                  isSearchable
                  name="rating"
                  options={ratingGame}
                />

                
              </div>
            </div>
            <div id='card-input-2' className='card-body-input p-4'>
              <label className='mb-2' id="input1">Game 1:</label>
              <div className='flex flex-row justify-center'>
                <Select className='p-2 basis-3/4'
                  defaultValue={chooseGame[0]}
                  isClearable
                  isSearchable
                  name="game"
                  options={chooseGame}
                />

                <Select className='p-2'
                  isClearable
                  isSearchable
                  name="rating"
                  options={ratingGame}
                />

                
              </div>
            </div>
            <div id='card-input-3' className='card-body-input p-4'>
              <label className='mb-2' id="input1">Game 1:</label>
              <div className='flex flex-row justify-center'>
                <Select className='p-2 basis-3/4'
                  defaultValue={chooseGame[0]}
                  isClearable
                  isSearchable
                  name="game"
                  options={chooseGame}
                />

                <Select className='p-2'
                  isClearable
                  isSearchable
                  name="rating"
                  options={ratingGame}
                />

                
              </div>
            </div>
            <div id='card-input-4' className='card-body-input p-4'>
              <label className='mb-2' id="input1">Game 1:</label>
              <div className='flex flex-row justify-center'>
                <Select className='p-2 basis-3/4'
                  defaultValue={chooseGame[0]}
                  isClearable
                  isSearchable
                  name="game"
                  options={chooseGame}
                />

                <Select className='p-2'
                  isClearable
                  isSearchable
                  name="rating"
                  options={ratingGame}
                />

                
              </div>
            </div>
            <div id='card-input-5' className='card-body-input p-4'>
              <label className='mb-2' id="input1">Game 1:</label>
              <div className='flex flex-row justify-center'>
                <Select className='p-2 basis-3/4'
                  defaultValue={chooseGame[0]}
                  isClearable
                  isSearchable
                  name="game"
                  options={chooseGame}
                />

                <Select className='p-2'
                  isClearable
                  isSearchable
                  name="rating"
                  options={ratingGame}
                />

                
              </div>
            </div>

      
              <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing