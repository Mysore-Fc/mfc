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
  service: {
    "☕ Filter Coffee": [
      { id: 1, name: 'Mysore Filter Coffee', price: '₹35' },
      { id: 2, name: 'Kumbakonam Coffee', price: '₹45' },
      { id: 3, name: 'Black Coffee', price: '₹25' },
      { id: 4, name: 'Honey Black Coffee', price: '₹45' },
      { id: 5, name: 'Karuppatti Coffee', price: '₹49' },
      { id: 6, name: 'Horlicks', price: '₹35' },
      { id: 7, name: 'Boost', price: '₹35' }
    ],

    "🍵 Tea Magic": [
      { id: 10, name: 'Tea', price: '₹25' },
      { id: 11, name: 'Black Tea', price: '₹25' },
      { id: 12, name: 'Ginger Tea', price: '₹35' },
      { id: 13, name: 'Masala Tea', price: '₹35' },
      { id: 14, name: 'Lemon Tea', price: '₹29' },
      { id: 15, name: 'Green Tea', price: '₹29' },
      { id: 16, name: 'Honey Lemon Tea', price: '₹39' },
      { id: 55, name: 'Ginger Honey Lemon Tea', price: '₹49' },
      { id: 11, name: 'Honey Green Tea Tea', price: '₹39' },
      { id: 12, name: 'Ginger Jaggery Tea', price: '₹39' },
      { id: 13, name: 'Masala Jaggery Tea', price: '₹39' },
    ],

    "🥤 Fresh Juices": [
      { id: 20, name: 'Lemon Juice', price: '₹25' },
      { id: 21, name: 'Orange Juice', price: '₹49' },
      { id: 22, name: 'Watermelon Juice', price: '₹49' },
      { id: 23, name: 'Pineapple Juice', price: '₹49' },
      { id: 24, name: 'Mosambi Juice', price: '₹49' }
    ],

    "🍹 Milkshakes": [
      { id: 30, name: 'Vanilla Milkshake', price: '₹60' },
      { id: 31, name: 'Chocolate Milkshake', price: '₹70' },
      { id: 32, name: 'Strawberry Milkshake', price: '₹65' },
      { id: 33, name: 'Oreo Milkshake', price: '₹80' },
      { id: 34, name: 'Kitkat Milkshake', price: '₹85' }
    ],

    "🍜 Snacks & Fast Food": [
      { id: 40, name: 'Veg Sandwich', price: '₹49' },
      { id: 41, name: 'Paneer Sandwich', price: '₹89' },
      { id: 42, name: 'French Fries', price: '₹79' },
      { id: 43, name: 'Veg Maggie', price: '₹49' },
      { id: 44, name: 'Cheese Maggie', price: '₹75' },
      { id: 45, name: 'White Sauce Pasta', price: '₹149' },
      { id: 46, name: 'Paneer Pizza', price: '₹119' }
    ],

    "🍨 Ice Cream": [
      { id: 50, name: 'Vanilla', price: '₹49' },
      { id: 51, name: 'Chocolate', price: '₹49' },
      { id: 52, name: 'Strawberry', price: '₹49' },
      { id: 53, name: 'Butterscotch', price: '₹49' },
      { id: 54, name: 'Blackcurrant', price: '₹55' }
    ]
  },

  self: {
    "☕ Coffee": [
      { id: 101, name: 'Mysore Filter Coffee', price: '₹20' },
      { id: 102, name: 'Kumbakonam Coffee', price: '₹30' },
      { id: 103, name: 'Black Coffee', price: '₹20' },
      { id: 104, name: 'Honey Black Coffee', price: '₹30' },
      { id: 105, name: 'Karuppatti Coffee', price: '₹35' },
      { id: 106, name: 'Jaggery Coffee', price: '₹25' }
    ],

    "🍵 Tea": [
      { id: 107, name: 'Tea', price: '₹15' },
      { id: 108, name: 'Jaggery Tea', price: '₹20' },
      { id: 109, name: 'Ginger Tea', price: '₹20' },
      { id: 110, name: 'Ginger Jaggery Tea', price: '₹25' },
      { id: 111, name: 'Masala Tea', price: '₹20' },
      { id: 112, name: 'Masala Jaggery Tea', price: '₹25' },
      { id: 113, name: 'Lemon Tea', price: '₹20' },
      { id: 114, name: 'Honey Lemon Tea', price: '₹25' },
      { id: 115, name: 'Green Tea', price: '₹20' }
    ],

    "🥤 Drinks & Specials": [
      { id: 116, name: 'Healthy Malt', price: '₹35' }
    ],

    "🥪 Snacks": [
      { id: 120, name: 'Bun Butter Jam', price: '₹35' },
      { id: 121, name: 'Cova Bun', price: '₹35' }
    ]
  }
}

const Menu = () => {
  const { type } = useParams()
  const navigate = useNavigate()

  const categories = menuData[type]

  // ❗ Error handling
  if (!categories) {
    return (
      <Typography textAlign="center" mt={5}>
        Menu not found
      </Typography>
    )
  }

  return (
    <Box sx={{ maxWidth: 1100, mx: 'auto', p: 4 }}>

      {/* 🔙 Back Button */}
      <Button
        variant="outlined"
        sx={{
          mb: 3,
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
      <Typography variant="h4" textAlign="center" mb={4}>
        {type === 'service' ? 'Full Service Menu' : 'Self Service Menu'}
      </Typography>

      {/* 🔥 CATEGORY LOOP */}
      {Object.keys(categories).map((category) => (
        <Box key={category} sx={{ mb: 5 }}>

          {/* Category Title */}
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              borderLeft: '6px solid #440E03',
              pl: 2,
              fontWeight: 'bold'
            }}
          >
            {category}
          </Typography>

          {/* Items */}
          <Grid container spacing={3}>
            {categories[category].map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 2,
                    '&:hover': {
                      transform: 'scale(1.05)',
                      transition: '0.3s'
                    }
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography color="text.secondary">
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