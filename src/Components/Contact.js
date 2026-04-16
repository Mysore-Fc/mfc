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
        background:
          'linear-gradient(135deg, #FFF1E6 0%, #FFF7F2 100%)',
        px: { xs: 2, md: 8 },
        py: 6
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            color: '#440E03',
            mb: 1
          }}
        >
          Let’s Talk Coffee ☕
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Have a question, feedback, or just want to say hello?
        </Typography>
      </Box>

      {/* Main Content */}
      <Grid container spacing={5} alignItems="stretch" sx={{flexWrap: 'nowrap'}}>

        {/* Left Info Panel */}
        <Grid item  md={4}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              height: '368px',
              borderRadius: 4,
              background:
                'linear-gradient(160deg, #440E03, #5a1608)',
              color: 'white'
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
              Mysore Filter Coffee Traditional
            </Typography>

            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.3)', mb: 3 }} />

            <InfoRow
              icon={<PhoneIcon />}
              text="+91 98765 43210"
            />

            <InfoRow
              icon={<EmailIcon />}
              text="mysorecoffee@gmail.com"
            />

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
                mt: 4,
                fontStyle: 'italic',
                opacity: 0.9
              }}
            >
              “Every cup tells a story.”
            </Typography>
          </Paper>
        </Grid>

        {/* Right Form */}
        <Grid item  md={8} >
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 4,
              backgroundColor: 'white'
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', mb: 1 }}
            >
              Send Us a Message
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              We’ll get back to you as soon as possible ☕
            </Typography>

            <Grid container spacing={3}>
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
              sx={{
                mt: 4,
                backgroundColor: '#440E03',
                px: 5,
                py: 1.2,
                borderRadius: 5,
                fontWeight: 'bold',
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

      {/* Map */}
      <Box sx={{ mt: 7, p: 5 }}>
        <Paper elevation={5} sx={{ borderRadius: 4, overflow: 'hidden'}}>
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Mysore%20Filter%20Coffee%20Traditional,%20Rajajinagar,%20Bengaluru&output=embed"
            width="100%"
            height="320"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </Paper>
      </Box>
    </Box>
  )
}

/* Reusable Info Row */
const InfoRow = ({ icon, text }) => (
  <Box
    sx={{
      display: 'flex',
      gap: 2,
      mb: 3,
      alignItems: 'flex-start'
    }}
  >
    {icon}
    <Typography>{text}</Typography>
  </Box>
)

export default Contact
