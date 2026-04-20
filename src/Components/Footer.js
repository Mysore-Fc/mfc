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
        sx={{
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 3, sm: 4 }
        }}
      >

        {/* Section 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              sx={{
                fontWeight: 'bold',
                mb: 1,
                fontSize: { xs: 16, md: 20 }
              }}
            >
              Mysore Filter Coffee
            </Typography>

            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.7,
                fontSize: { xs: 13, md: 14 }
              }}
            >
              Serving authentic South Indian filter coffee with traditional
              brewing methods and rich aroma.
            </Typography>
          </Box>
        </Grid>

        {/* Section 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              sx={{
                fontWeight: 'bold',
                mb: 1,
                fontSize: { xs: 16, md: 20 }
              }}
            >
              Connect With Us
            </Typography>

            {/* Instagram */}
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
              <Typography variant="body2">
                mysorefiltercoffeetraditional
              </Typography>
            </Box>

            {/* Location */}
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
                href="https://www.google.com/maps"
                target="_blank"
                sx={{ color: 'white' }}
              >
                <LocationOnIcon />
              </IconButton>
              <Typography variant="body2">
                Mysuru, Karnataka
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Section 3 */}
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              sx={{
                fontWeight: 'bold',
                mb: 1,
                fontSize: { xs: 16, md: 20 }
              }}
            >
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
                style={{
                  border: 0,
                  borderRadius: 10,
                  width: '100%',
                  maxWidth: 350,
                  height: '160px'
                }}
                loading="lazy"
              />
            </Box>
          </Box>
        </Grid>

      </Grid>

      {/* Divider */}
      <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.25)' }} />

      {/* Bottom */}
      <Box sx={{ textAlign: 'center', py: 2 }}>
        <Typography
          variant="body2"
          sx={{ fontSize: { xs: 12, md: 14 } }}
        >
          © {new Date().getFullYear()} Mysore Filter Coffee. All Rights Reserved.
        </Typography>
      </Box>

    </Box>
  )
}

export default Footer