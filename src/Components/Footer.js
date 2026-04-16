import React from 'react'
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Divider
} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#440E03', color: 'white', mt: 6 }}>

      {/* Top Section */}
      <Grid
        container
        spacing={4}
        sx={{ px: { xs: 3, md: 8 }, py: 4 }}
        alignItems="flex-start"
      >

        {/* Section 1: Brand */}
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Mysore Filter Coffee
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
              Serving authentic South Indian filter coffee with traditional
              brewing methods and rich aroma.
            </Typography>
          </Box>
        </Grid>

        {/* Section 2: Social */}
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Connect With Us
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                alignItems: 'center',
                gap: 1
              }}
            >
              <IconButton
                href="https://www.instagram.com/mysorefiltercoffeetraditional/?hl=en"
                target="_blank"
                sx={{ color: 'white' }}
              >
                <InstagramIcon />
              </IconButton>
              <Typography variant="body2">mysorefiltercoffeetraditional</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                alignItems: 'center',
                gap: 1,
                mt: 1
              }}
            >
               <IconButton
                href="https://www.google.com/maps/dir/12.9662976,77.5585792/12.9916176,77.5545894/@12.9779896,77.5504136,15z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
                target="_blank"
                sx={{ color: 'white' }}
              >
              <LocationOnIcon />
              </IconButton>
              <Typography variant="body2">Mysuru, Karnataka</Typography>
            </Box>
          </Box>
        </Grid>

        {/* Section 3: Map */}
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Visit Our Cafe
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}
            >
              <iframe
                title="location"
                src="https://www.google.com/maps?q=Mysore%20Filter%20Coffee%20Traditional,%20Rajajinagar,%20Bengaluru&output=embed"
                width="100%"
                height="150"
                style={{ border: 0, borderRadius: 10, maxWidth: 320 }}
                loading="lazy"
              ></iframe>
            </Box>
          </Box>
        </Grid>

      </Grid>

      {/* Divider */}
      <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.25)' }} />

      {/* Bottom Section */}
      <Box sx={{ textAlign: 'center', py: 2 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Mysore Filter Coffee. All Rights Reserved.
        </Typography>
      </Box>

    </Box>
  )
}

export default Footer
