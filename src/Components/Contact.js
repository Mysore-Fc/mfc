import React from 'react'
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Divider
} from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const Contact = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FFF1E6 0%, #FFF7F2 100%)',
        px: { xs: 2, sm: 3, md: 8 },
        py: { xs: 4, md: 6 }
      }}
    >

      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
        <Typography
          sx={{
            fontWeight: 'bold',
            color: '#440E03',
            mb: 1,
            fontSize: { xs: 24, sm: 28, md: 36 }
          }}
        >
          Let’s Talk Coffee ☕
        </Typography>

        <Typography
          sx={{ fontSize: { xs: 13, md: 16 }, color: '#666' }}
        >
          Have a question, feedback, or just want to say hello?
        </Typography>
      </Box>

      {/* Main Content */}
      <Grid container spacing={{ xs: 3, md: 5 }}>

        {/* LEFT PANEL */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={6}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              background: 'linear-gradient(160deg, #440E03, #5a1608)',
              color: 'white',
              height: '100%'   // responsive instead of fixed height
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                mb: 3,
                fontSize: { xs: 18, md: 22 }
              }}
            >
              Mysore Filter Coffee Traditional
            </Typography>

            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.3)', mb: 3 }} />

            <InfoRow icon={<PhoneIcon />} text="+91 98765 43210" />
            <InfoRow icon={<EmailIcon />} text="mysorecoffee@gmail.com" />
            <InfoRow
              icon={<LocationOnIcon />}
              text={
                <>
                  No. 617/T, 36th Cross,<br />
                  12th Main Road, Rajajinagar,<br />
                  Bengaluru – 560010
                </>
              }
            />

            <Typography
              sx={{
                mt: 3,
                fontStyle: 'italic',
                opacity: 0.9,
                fontSize: { xs: 13, md: 14 }
              }}
            >
              “Every cup tells a story.”
            </Typography>
          </Paper>
        </Grid>

        {/* RIGHT FORM */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={6}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                mb: 1,
                fontSize: { xs: 18, md: 22 }
              }}
            >
              Send Us a Message
            </Typography>

            <Typography
              sx={{
                mb: 3,
                color: '#666',
                fontSize: { xs: 13, md: 14 }
              }}
            >
              We’ll get back to you as soon as possible ☕
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Your Name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Phone Number" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Email Address" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Message"
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              fullWidth   // better for mobile
              sx={{
                mt: 4,
                py: 1.2,
                fontWeight: 'bold',
                borderRadius: 5,
                fontSize: { xs: 14, md: 15 },
                backgroundColor: '#440E03',
                '&:hover': {
                  backgroundColor: '#5a1608'
                }
              }}
            >
              Send Message
            </Button>
          </Paper>
        </Grid>

      </Grid>

      {/* MAP */}
      <Box sx={{ mt: { xs: 5, md: 7 } }}>
        <Paper elevation={5} sx={{ borderRadius: 4, overflow: 'hidden' }}>
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Mysore%20Filter%20Coffee%20Traditional,%20Rajajinagar,%20Bengaluru&output=embed"
            style={{
              width: '100%',
              height: '100%',
              minHeight: '250px'
            }}
            loading="lazy"
          />
        </Paper>
      </Box>

    </Box>
  )
}

/* Info Row */
const InfoRow = ({ icon, text }) => (
  <Box
    sx={{
      display: 'flex',
      gap: 2,
      mb: 2.5,
      alignItems: 'flex-start'
    }}
  >
    {icon}
    <Typography sx={{ fontSize: { xs: 13, md: 14 } }}>
      {text}
    </Typography>
  </Box>
)

export default Contact