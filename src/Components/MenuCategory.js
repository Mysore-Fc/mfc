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
    <Box sx={{ maxWidth: 900, mx: 'auto', p: 4 }}>

      <Typography variant="h4" textAlign="center" mb={4}>
        Select Menu Type
      </Typography>

      <Grid container spacing={3}>
        {categories.map((cat) => (
          <Grid item xs={12} sm={6} key={cat.id}>
            <Card
              sx={{
                cursor: 'pointer',
                textAlign: 'center',
                p: 4,
                borderRadius: 3,
                boxShadow: 3,
                '&:hover': {
                  backgroundColor: '#440E03',
                  color: 'white'
                }
              }}
              onClick={() => navigate(`/menu/${cat.type}`)}
            >
              <CardContent>
                <Typography variant="h6">{cat.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Box>
  )
}

export default MenuCategory