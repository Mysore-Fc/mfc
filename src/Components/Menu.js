import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button
} from '@mui/material'

const menuData = {
  // keep your same data
}

const Menu = () => {
  const { type } = useParams()
  const navigate = useNavigate()

  const categories = menuData[type]

  if (!categories) {
    return (
      <Typography textAlign="center" mt={5}>
        Menu not found
      </Typography>
    )
  }

  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: 'auto',
        px: { xs: 2, sm: 3, md: 5 },
        py: { xs: 3, md: 5 }
      }}
    >

      {/* 🔙 Back Button */}
      <Button
        variant="outlined"
        sx={{
          mb: { xs: 2, md: 3 },
          fontSize: { xs: 12, md: 14 },
          borderColor: '#440E03',
          color: '#440E03',
          '&:hover': {
            backgroundColor: '#440E03',
            color: 'white'
          }
        }}
        onClick={() => navigate('/service')}
      >
        ← Back
      </Button>

      {/* Title */}
      <Typography
        sx={{
          textAlign: 'center',
          mb: { xs: 3, md: 4 },
          fontWeight: 'bold',
          fontSize: { xs: 22, sm: 26, md: 32 }
        }}
      >
        {type === 'service' ? 'Full Service Menu' : 'Self Service Menu'}
      </Typography>

      {/* 🔥 CATEGORY LOOP */}
      {Object.keys(categories).map((category) => (
        <Box key={category} sx={{ mb: { xs: 4, md: 5 } }}>

          {/* Category Title */}
          <Typography
            sx={{
              mb: 2,
              pl: 2,
              fontWeight: 'bold',
              borderLeft: '5px solid #440E03',
              fontSize: { xs: 18, md: 22 }
            }}
          >
            {category}
          </Typography>

          {/* Items */}
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {categories[category].map((item) => (
              <Grid
                item
                xs={12}     // mobile → 1 per row
                sm={6}      // tablet → 2
                md={4}      // desktop → 3
                key={item.id}
              >
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 2,
                    height: '100%',
                    transition: '0.3s',
                    '&:hover': {
                      transform: { xs: 'none', md: 'scale(1.05)' } // disable zoom on mobile
                    }
                  }}
                >
                  <CardContent>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: 15, md: 17 }
                      }}
                    >
                      {item.name}
                    </Typography>

                    <Typography
                      sx={{
                        color: '#666',
                        fontSize: { xs: 13, md: 14 },
                        mt: 0.5
                      }}
                    >
                      {item.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Box>
      ))}

    </Box>
  )
}

export default Menu