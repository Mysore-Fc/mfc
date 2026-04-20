import React from 'react'
import { Box, Typography, Grid } from '@mui/material'

const images = [
  // keep your same image array
]

const Gallery = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 6 }, py: { xs: 3, md: 5 }, backgroundColor: '#FFF7F2' }}>

      {/* Heading */}
      <Typography
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          mb: { xs: 3, md: 5 },
          color: '#440E03',
          fontSize: { xs: 22, sm: 26, md: 32 }
        }}
      >
        ☕ Cafe Gallery
      </Typography>

      {/* Image Grid */}
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {images.map((img, index) => (
          <Grid
            item
            xs={6}     // mobile → 2 images
            sm={4}     // tablet → 3 images
            md={3}     // desktop → 4 images
            key={index}
          >
            <Box
              sx={{
                overflow: 'hidden',
                borderRadius: 3,
                boxShadow: 2
              }}
            >
              <Box
                component="img"
                src={img}
                alt={`gallery-${index}`}
                sx={{
                  width: '100%',
                  height: {
                    xs: 140,
                    sm: 180,
                    md: 200
                  },
                  objectFit: 'cover',
                  transition: '0.4s ease'
                }}
              />

              {/* Hover Effect */}
              <Box
                sx={{
                  position: 'relative',
                  top: '-100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: '0.4s',
                  background: 'rgba(0,0,0,0.3)',
                  color: 'white',
                  fontSize: 14,
                  '&:hover': {
                    opacity: 1
                  }
                }}
              >
                View
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

    </Box>
  )
}

export default Gallery