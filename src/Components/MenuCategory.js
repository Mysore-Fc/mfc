import React from 'react'
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const MenuCategory = () => {
  const navigate = useNavigate()

  const categories = [
    { id: 1, name: 'Full Service', type: 'service' },
    { id: 2, name: 'Self Service', type: 'self' }
  ]

  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: 'auto',
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 3, md: 5 }
      }}
    >

      {/* Title */}
      <Typography
        sx={{
          textAlign: 'center',
          mb: { xs: 3, md: 4 },
          fontWeight: 'bold',
          fontSize: { xs: 22, sm: 26, md: 32 }
        }}
      >
        Select Menu Type
      </Typography>

      {/* Cards */}
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {categories.map((cat) => (
          <Grid item xs={12} sm={6} key={cat.id}>
            <Card
              onClick={() => navigate(`/menu/${cat.type}`)}
              sx={{
                cursor: 'pointer',
                textAlign: 'center',
                py: { xs: 3, md: 5 },
                px: 2,
                borderRadius: 3,
                boxShadow: 3,
                transition: '0.3s',
                
                // Hover only on desktop
                '&:hover': {
                  backgroundColor: { xs: 'inherit', md: '#440E03' },
                  color: { xs: 'inherit', md: 'white' },
                  transform: { md: 'scale(1.05)' }
                }
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: 18, md: 22 }
                  }}
                >
                  {cat.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Box>
  )
}

export default MenuCategory