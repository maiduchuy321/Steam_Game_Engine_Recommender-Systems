import React, { useState} from 'react'
import Select from 'react-select'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

const options = ['Option 1', 'Option 2'];

export default function ControllableStates() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
}

const Landing = () => {
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
      <Divider></Divider>
      <CardActions>
        <Autocomplete
          id="clear-on-escape"
          clearOnEscape
          renderInput={(options) => (
            <TextField {...options} label="clearOnEscape" variant="standard" />
          )}
      />
      </CardActions>
    </Card>  
    </>
  )
}

export default Landing