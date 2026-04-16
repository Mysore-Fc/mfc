import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'

import coffeeImage1 from '../Assets/coffee.jpg'
import coffeeImage2 from '../Assets/coffee1.jpg'
import coffeeImage3 from '../Assets/coffee2.jpg'

const Banners=[
  {id:1, image:coffeeImage1, title: "Where every sip feels like a warm hug", button: 'click'},
  {id:2, image:coffeeImage2, title: "Where every sip feels like a warm hug", button: 'click'},
  {id:3, image:coffeeImage3, title: "Where every sip feels like a warm hug", button: 'click'}
]

const Banner = () => {
  const[current, setValue]=useState(0);

  useEffect(()=>{
    const time= setInterval(()=>{
      setValue((prev)=>(prev+1)%Banners.length);
    },4000);
    return()=> clearInterval(time);
  }, []);
const previous=()=>{
  setValue((prev)=>(prev===0?Banners.length-1:prev-1));
}
const next=()=>{
  setValue((prev)=>(prev+1)%Banners.length);
}

  return (
    <Box sx={{position:'relative', overflow: 'hidden', width:'100vw', height: '667px'}}>
    {Banners.map((Banner, index)=>(
    <Box key={Banner.id}sx={{
      backgroundImage: `url(${Banner.image})`,
      position:'absolute',
      width: '100%',
      height: '667px',
      left: `${(index - current)*100}%`,
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      overflow: 'hidden',
      zIndex: -1
      }}>
         <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 3,   
        ml: '50px'
      }}>
        <Typography
          sx={{
            color: 'white',
            fontSize: '50px',
            fontWeight: 'bold',
            width: '500px',
            textAlign: 'left'
          }}
        >
         {Banner.title} 
        </Typography>

        <Button variant='contained'>
         {Banner.button} 
        </Button>
      </Box>
    </Box>
    ))}
    <IconButton
    onClick={previous}
    sx={{color: 'white',top: '50%',position: 'absolute'}}>
      <ArrowBackIos />
    </IconButton>
    <IconButton
    onClick={next}
    sx={{color:'white', top: '50%', position: 'absolute', right: 10}}>
      <ArrowForwardIos />
    </IconButton>
    </Box>
  );
}

export default Banner