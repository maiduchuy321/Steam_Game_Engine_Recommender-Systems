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



const options = ['Option 1', 'Option 2'];


const Landing = () => {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
    {/* <div className='card-body mx-auto max-w-[80%]'> 


    </div> */}
      <Card sx={{ mx: 'auto', maxWidth: '80%', backgroundColor: '#f2f2f2'  }}>
      <CardContent>
        <Typography sx={{ fontSize: 'calc(1.375rem + 1.5vw)', textAlign: 'center' }} gutterBottom>
          Video Game Recommendation Engine
        </Typography>
        <Typography sx={{ fontSize: '1.25rem', textAlign: 'center' }} >
          Select three game titles you've enjoyed to get started!
        </Typography>
      </CardContent>
      <Divider/>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
    </div>
      <CardActions>
        
      </CardActions>
    </Card>  
    </>
  )
}

export default Landing() 