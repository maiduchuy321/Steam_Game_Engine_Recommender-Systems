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
            <div id='card-input-1' className='card-body-input px-4 pt-2'>
              <div className='flex flex-row justify-center items-center'>
                <label>Game 1:</label>

                <Select className='p-2 basis-[70%]'
                  defaultValue={chooseGame[0]}
                  isClearable
                  isSearchable
                  name="game"
                  options={chooseGame}
                />

                <Select className='p-2 min-w-[120px] max-w-[120px]'
                  isClearable
                  isSearchable
                  name="rating"
                  options={ratingGame}
                />

                
              </div>
            </div>
            <div id='card-input-2' className='card-body-input px-4 pt-2'>
              <div className='flex flex-row justify-center items-center'>
                <label>Game 2:</label>

                <Select className='p-2 basis-[70%]'
                  defaultValue={chooseGame[0]}
                  isClearable
                  isSearchable
                  name="game"
                  options={chooseGame}
                />

                <Select className='p-2 min-w-[120px] max-w-[120px]'
                  isClearable
                  isSearchable
                  name="rating"
                  options={ratingGame}
                />

                
              </div>
            </div>
            <div id='card-input-3' className='card-body-input px-4 pt-2'>
              <div className='flex flex-row justify-center items-center'>
                <label>Game 3:</label>

                <Select className='p-2 basis-[70%]'
                  defaultValue={chooseGame[0]}
                  isClearable
                  isSearchable
                  name="game"
                  options={chooseGame}
                />

                <Select className='p-2 min-w-[120px] max-w-[120px]'
                  isClearable
                  isSearchable
                  name="rating"
                  options={ratingGame}
                />

                
              </div>
            </div>
            <div id='card-input-4' className='card-body-input px-4 pt-2'>
              <div className='flex flex-row justify-center items-center'>
                <label>Game 4:</label>

                <Select className='p-2 basis-[70%]'
                  defaultValue={chooseGame[0]}
                  isClearable
                  isSearchable
                  name="game"
                  options={chooseGame}
                />

                <Select className='p-2 min-w-[120px] max-w-[120px]'
                  isClearable
                  isSearchable
                  name="rating"
                  options={ratingGame}
                />

                
              </div>
            </div>
            <div id='card-input-5' className='card-body-input px-4 pt-2'>
              <div className='flex flex-row justify-center items-center'>
                <label>Game 5:</label>

                <Select className='p-2 basis-[70%]'
                  defaultValue={chooseGame[0]}
                  isClearable
                  isSearchable
                  name="game"
                  options={chooseGame}
                />

                <Select className='p-2 min-w-[120px] max-w-[120px]'
                  isClearable
                  isSearchable
                  name="rating"
                  options={ratingGame}
                />

                
              </div>
            </div>

            <div className="flex flex-row justify-center mt-3">
              <div className="shrink-0 w-1/6 mb-2 px-2 text-center">
                <button id="getRecommendationsButton" type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Submit</button>
              </div>
              <div class="shrink-0 w-1/6">
                <button id="resetRecommendationsButton" className="btn btn-secondary w-100">Reset</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing