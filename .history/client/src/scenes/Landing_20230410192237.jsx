import React, { useState, useEffect } from 'react';
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
import GameSugget from "./GameSugget";

import { gameName, ratingGame } from '../data/gameName.tsx';
import defaultImg0 from '../assets/default_img.png'
import defaultImg1 from '../assets/default_img1.png'
import defaultImg2 from '../assets/default_img2.png'
import defaultImg3 from '../assets/default_img3.png'
import defaultImg4 from '../assets/default_img4.png'

const chooseGame = [
  {
    value: 'gameName',
    label: 'Choose a game you like',
  },
  ...gameName,
];



const Landing = () => {
  const [game1, setGame1] = useState(null);
  const [rating1, setRating1] = useState(null);
  const [game2, setGame2] = useState(null);
  const [rating2, setRating2] = useState(null);
  const [game3, setGame3] = useState(null);
  const [rating3, setRating3] = useState(null);
  const [game4, setGame4] = useState(null);
  const [rating4, setRating4] = useState(null);
  const [game5, setGame5] = useState(null);
  const [rating5, setRating5] = useState(null);
  const [formDataValues, setFormDataValues] = useState(null);
  const [images, setImages] = useState([
    defaultImg0,
    defaultImg1,
    defaultImg2,
    defaultImg3,
    defaultImg4
  ])
 const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      response1: [game1.value, rating1.value],
      response2: [game2.value, rating2.value],
      response3: [game3.value, rating3.value],
      response4: [game4.value, rating4.value],
      response5: [game5.value, rating5.value]
    };
    setFormDataValues(formData);
  }

  // console.log(formDataValues);
  useEffect(() => {
    fetch('http://127.0.0.1:5000/', {
          'method': 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataValues),
          mode:"no-cors"
        })

        .then(response => {
          return response.json()
        })
          .catch((error) => {
          // console.log("Error")
          console.log(error)
          })
  }, [formDataValues]);


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

          <form onSubmit={handleSubmit}>
            <div id='card-input-1' className='card-body-input px-4 pt-2'>
              <div className='flex flex-row justify-center items-center'>
                <label>Game 1:</label>

                <Select className='p-2 basis-[70%]'
                  defaultValue={chooseGame[0]}
                  isClearable
                  isSearchable
                  name="game"
                  options={chooseGame}
                  labelField = "label"
                  valueField = "value"
                  onChange={game1 => setGame1(game1)}
                />

                <Select className='p-2 min-w-[120px] max-w-[120px]'
                  isClearable
                  isSearchable
                  name="rating"
                  options={ratingGame}
                  onChange={rating1 => setRating1(rating1)}

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
                  onChange={game2 => setGame2(game2)}
                />

                <Select className='p-2 min-w-[120px] max-w-[120px]'
                  isClearable
                  isSearchable
                  name="rating"
                  options={ratingGame}
                  onChange={rating2 => setRating2(rating2)}
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
                  onChange={game3 => setGame3(game3)}
                />

                <Select className='p-2 min-w-[120px] max-w-[120px]'
                  isClearable
                  isSearchable
                  name="rating"
                  options={ratingGame}
                  onChange={rating3 => setRating3(rating3)}
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
                  onChange={game4 => setGame4(game4)}
                />
                <Select className='p-2 min-w-[120px] max-w-[120px]'
                  isClearable
                  isSearchable
                  name="rating"
                  options={ratingGame}
                  onChange={rating4 => setRating4(rating4)}
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
                  onChange={game5 => setGame5(game5)}
                />

                <Select className='p-2 min-w-[120px] max-w-[120px]'
                  isClearable
                  isSearchable
                  name="rating"
                  options={ratingGame}
                  onChange={rating5 => setRating5(rating5)}
                />

                
              </div>
            </div>

            <div className="flex flex-row justify-center mt-3">
              <div className="min-w-[100px] shrink-0 w-1/6 mb-2 px-2 text-center">
                <button id="getRecommendationsButton" type='submit' className="w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-black-700 rounded">Submit</button>
              </div>
              <div className="min-w-[100px] shrink-0 w-1/6 mb-2 px-2 text-center">
                <button id="resetRecommendationsButton" type='reset' className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-black-700 rounded">Reset</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>

    <GameSugget images={images} />

    </>
  )
}

export default Landing