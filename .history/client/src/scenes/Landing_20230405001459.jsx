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
import { colourOptions } from '../data/data';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const filterOptions = (
  candidate,
  input
) => {
  if (input) {
    return candidate.value === customOptions[0].value;
  }
  return true;
};

const customOptions = [
  {
    value: 'custom',
    label: 'Using a custom filter to always display this option on search',
  },
  ...colourOptions,
];


const Landing = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  return (
    <>
    <div className='card mx-auto my-4 max-w-[80%] bg-[#f2f2f2] p-4'>
      <div className='card-body'>
        <div className='card-body-header text-[#737373]'>
            <h1 className='text-head text-center mb-4'>
              Video Game Recommendation Engine
            </h1>
            <h3 className='text-[1.25rem] text-center text-[#737373]'>
              Select three game titles you've enjoyed to get started!
            </h3>
        </div>
        <hr className='my-4' />

        <div className='card-body-container'>
        <form>
      <label htmlFor="input1">Input 1:</label>
      <input
        type="text"
        id="input1"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
       <Select
    defaultValue={customOptions[0]}
    isClearable
    isSearchable
    name="color"
    options={customOptions}
    filterOption={filterOptions}
  />
      <br />

      <label htmlFor="input2">Input 2:</label>
      <input
        type="text"
        id="input2"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <br />

      <label htmlFor="input3">Input 3:</label>
      <input
        type="text"
        id="input3"
        value={input3}
        onChange={(e) => setInput3(e.target.value)}
      />
      <br />

      <button type="submit">Submit</button>
    </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing