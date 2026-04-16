import React from 'react'
import { Box, Typography, Grid, Card, CardContent } from '@mui/material'

const Home = () => {
  return (
    <>
      {/* 🔥 Hero Section
      <Box
        sx={{
          height: '40vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#440E03',
          textAlign: 'center'
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Mysore Filter Coffee Traditional
          </Typography>
          <Typography variant="h6">
            Experience the Authentic Taste of South Indian Coffee ☕
          </Typography>
        </Box>
      </Box> */}

      {/* 🔥 About Section */}
      <Box sx={{ px: 6, py: 6, backgroundColor: '#FFF8F5' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#440E03', mb: 3, justifyContent: 'center', display: 'flex'}}>
          Welcome to Our Café
        </Typography>

        <Typography sx={{ fontSize: 18, color: '#333', mb: 3, lineHeight: 1.8 }}>
          Mysore Filter Coffee Traditional is a small-scale cafe located in Rajajinagar, Bengaluru. The cafe was established with the objective of preserving and promoting the authentic taste of traditional South Indian filter coffee. In an era where modern coffee chains are rapidly growing, the café focuses on maintaining traditional brewing techniques and cultural heritage.
The cafe serves students, working professionals, families, and senior citizens from nearby residential and commercial areas. It provides a clean, comfortable, and welcoming environment where customers can enjoy freshly prepared beverages and snacks at affordable prices. Quality, hygiene, and customer satisfaction are the core principles of the business.

        </Typography>

        <Typography sx={{ fontSize: 16, color: '#555', lineHeight: 1.8 }}>
          The cafe serves students, working professionals, families, and senior citizens. It provides
          a clean, comfortable, and welcoming environment where customers can enjoy fresh beverages
          and snacks at affordable prices.
        </Typography>
      </Box>

      {/* 🔥 Cafe Details Section */}
      <Box sx={{ px: 6, py: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#440E03', mb: 4 }}>
          Café Details
        </Typography>

        <Card sx={{ borderRadius: 3, p: 2 }}>
          <CardContent>
            <Typography sx={{ mb: 1 }}>
              <strong>Name:</strong> Mysore Filter Coffee Traditional
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>Location:</strong> Rajajinagar, Bengaluru – 560010
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>Year of Establishment:</strong> 2022
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>Legal Status:</strong> Proprietorship
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>Nature of Business:</strong> Food and Beverage Industry
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>Ownership:</strong> Sole Proprietor
            </Typography>
            <Typography sx={{ mt: 2 }}>
              The cafe operates under a simple organizational structure where the owner manages
              purchasing, finance, supervision, and decision-making.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* 🔥 Specialties Section */}
      <Box sx={{ px: 6, py: 6, backgroundColor: '#FFF8F5' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#440E03', mb: 4 }}>
          Our Specialties
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  ☕ Mysore Filter Coffee
                </Typography>
                <Typography>
                  Authentic traditional coffee with rich aroma and strong taste.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  🥛 Kumbakonam Degree Coffee
                </Typography>
                <Typography>
                  Strong, creamy coffee with thick milk and rich flavor.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  🍵 Tea & Snacks
                </Typography>
                <Typography>
                  Variety of tea, snacks, fast food, and refreshing drinks.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* 🔥 Mission & Vision */}
      <Box sx={{ px: 6, py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#440E03', mb: 2 }}>
              Our Mission
            </Typography>
            <Typography sx={{ lineHeight: 1.8 }}>
             The mission of Mysore Filter Coffee Traditional is to provide customers with high-quality traditional filter coffee prepared using authentic brewing methods. The cafe aims to maintain consistent taste, rich aroma, and proper hygiene standards in every serving. Special attention is given to the selection of quality coffee seeds and fresh dairy products to ensure superior flavour and customer satisfaction.
The cafe focuses on delivering quick, efficient, and friendly service to create a pleasant experience for every customer. It is committed to maintaining cleanliness in preparation and serving areas, ensuring food safety and hygiene at all times. Another important mission of the café is to preserve and promote the cultural heritage of South Indian filter coffee, including the traditional style of serving.

            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#440E03', mb: 2 }}>
              Our Vision
            </Typography>
            <Typography sx={{ lineHeight: 1.8 }}>
              The vision of Mysore Filter Coffee Traditional is to become a well-recognized and trusted traditional café brand in Rajajinagar by consistently delivering authentic taste and superior quality. The cafe aims to preserve the cultural heritage and traditional preparation methods of Mysore filter coffee while adapting to modern service standards and customer expectations.
The organization envisions creating a strong brand identity that represents purity, quality, and tradition. It seeks to build long-term customer loyalty by maintaining consistency in taste, hygiene, and service excellence. The café also aims to be known not only for its coffee but for providing a warm and welcoming environment where customers feel comfortable and valued.
In the long term, Mysore Filter Coffee Traditional plans to expand its presence to nearby localities and potentially open additional branches while maintaining the same traditional standards and quality control. The café aspires to adopt improved management practices, better inventory systems, and innovative service techniques without compromising its cultural values.

            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home