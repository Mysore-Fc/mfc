import React from 'react'
import { Box, Typography, Grid, Card, CardContent } from '@mui/material'

const Home = () => {
  return (
    <>

      {/* 🔥 About Section */}
      <Box sx={{ px: { xs: 2, sm: 3, md: 6 }, py: { xs: 3, md: 6 }, backgroundColor: '#FFF8F5' }}>
        <Typography
          sx={{
            fontWeight: 'bold',
            color: '#440E03',
            mb: 3,
            textAlign: 'center',
            fontSize: { xs: 22, sm: 26, md: 32 }
          }}
        >
          Welcome to Our Café
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 14, md: 18 },
            color: '#333',
            mb: 3,
            lineHeight: 1.8,
            textAlign: 'justify'
          }}
        >
          Mysore Filter Coffee Traditional is a small-scale cafe located in Rajajinagar, Bengaluru.
          The cafe was established with the objective of preserving and promoting the authentic taste
          of traditional South Indian filter coffee.
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 13, md: 16 },
            color: '#555',
            lineHeight: 1.8,
            textAlign: 'justify'
          }}
        >
          The cafe serves students, working professionals, families, and senior citizens. It provides
          a clean, comfortable, and welcoming environment where customers can enjoy fresh beverages
          and snacks at affordable prices.
        </Typography>
      </Box>

      {/* 🔥 Cafe Details */}
      <Box sx={{ px: { xs: 2, sm: 3, md: 6 }, py: { xs: 3, md: 6 } }}>
        <Typography
          sx={{
            fontWeight: 'bold',
            color: '#440E03',
            mb: 4,
            fontSize: { xs: 22, md: 30 }
          }}
        >
          Café Details
        </Typography>

        <Card sx={{ borderRadius: 3 }}>
          <CardContent>
            {[
              'Name: Mysore Filter Coffee Traditional',
              'Location: Rajajinagar, Bengaluru – 560010',
              'Year of Establishment: 2022',
              'Legal Status: Proprietorship',
              'Nature of Business: Food and Beverage Industry',
              'Ownership: Sole Proprietor'
            ].map((item, i) => (
              <Typography key={i} sx={{ mb: 1, fontSize: { xs: 13, md: 15 } }}>
                <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
              </Typography>
            ))}

            <Typography sx={{ mt: 2, fontSize: { xs: 13, md: 15 } }}>
              The cafe operates under a simple organizational structure where the owner manages
              purchasing, finance, supervision, and decision-making.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* 🔥 Specialties */}
      <Box sx={{ px: { xs: 2, sm: 3, md: 6 }, py: { xs: 3, md: 6 }, backgroundColor: '#FFF8F5' }}>
        <Typography
          sx={{
            fontWeight: 'bold',
            color: '#440E03',
            mb: 4,
            fontSize: { xs: 22, md: 30 }
          }}
        >
          Our Specialties
        </Typography>

        <Grid container spacing={3}>
          {[
            {
              title: '☕ Mysore Filter Coffee',
              desc: 'Authentic traditional coffee with rich aroma and strong taste.'
            },
            {
              title: '🥛 Kumbakonam Degree Coffee',
              desc: 'Strong, creamy coffee with thick milk and rich flavor.'
            },
            {
              title: '🍵 Tea & Snacks',
              desc: 'Variety of tea, snacks, fast food, and refreshing drinks.'
            }
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ borderRadius: 3, height: '100%' }}>
                <CardContent>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      fontSize: { xs: 16, md: 18 }
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: 13, md: 15 } }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 🔥 Mission & Vision */}
      <Box sx={{ px: { xs: 2, sm: 3, md: 6 }, py: { xs: 3, md: 6 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontWeight: 'bold',
                color: '#440E03',
                mb: 2,
                fontSize: { xs: 20, md: 26 }
              }}
            >
              Our Mission
            </Typography>

            <Typography sx={{ lineHeight: 1.8, fontSize: { xs: 13, md: 15 } }}>
              The mission is to provide high-quality traditional filter coffee with authentic taste,
              hygiene, and excellent service.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontWeight: 'bold',
                color: '#440E03',
                mb: 2,
                fontSize: { xs: 20, md: 26 }
              }}
            >
              Our Vision
            </Typography>

            <Typography sx={{ lineHeight: 1.8, fontSize: { xs: 13, md: 15 } }}>
              To become a recognized traditional café brand while maintaining quality, heritage,
              and customer satisfaction.
            </Typography>
          </Grid>
        </Grid>
      </Box>

    </>
  )
}

export default Home