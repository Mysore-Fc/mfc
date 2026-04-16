import { Button, Typography, Box, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

import coffeeImage1 from '../Assets/coffee.jpg'
import coffeeImage2 from '../Assets/coffee1.jpg'
import coffeeImage3 from '../Assets/coffee2.jpg'

const Banners = [
  {
    id: 1,
    image: coffeeImage1,
    title: "Where every sip feels like a warm hug",
    button: "Click"
  },
  {
    id: 2,
    image: coffeeImage2,
    title: "Freshly brewed happiness in every cup",
    button: "Click"
  },
  {
    id: 3,
    image: coffeeImage3,
    title: "Start your day with perfect coffee",
    button: "Click"
  }
]

const Banner = () => {
  const [current, setCurrent] = useState(0)

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Banners.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Previous slide
  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? Banners.length - 1 : prev - 1
    )
  }

  // Next slide
  const next = () => {
    setCurrent((prev) => (prev + 1) % Banners.length)
  }

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: { xs: '400px', md: '667px' }
      }}
    >

      {/* Slides */}
      {Banners.map((item, index) => (
        <Box
          key={item.id}
          sx={{
            backgroundImage: `url(${item.image})`,
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: `${(index - current) * 100}%`,
            transition: 'all 0.8s ease-in-out',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Box sx={{ ml: { xs: 3, md: 8 } }}>
            <Typography
              sx={{
                color: 'white',
                fontSize: { xs: 25, md: 50 },
                fontWeight: 'bold',
                width: { xs: '90%', md: 500 }
              }}
            >
              {item.title}
            </Typography>

            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: '#440E03',
                '&:hover': { backgroundColor: '#2d0902' }
              }}
            >
              {item.button}
            </Button>
          </Box>
        </Box>
      ))}

      {/* Left Button */}
      <IconButton
        onClick={previous}
        sx={{
          color: 'white',
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.3)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' }
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* Right Button */}
      <IconButton
        onClick={next}
        sx={{
          color: 'white',
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.3)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' }
        }}
      >
        <ArrowForwardIos />
      </IconButton>

    </Box>
  )
}

export default Banner 