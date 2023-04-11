import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Select from 'react-select'



const Landing = () => {
  return (
    <>
    
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
      </Card>  
    </>
  )
}

export default Landing() 