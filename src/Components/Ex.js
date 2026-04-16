import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  TextField
} from '@mui/material'
import { Link } from 'react-router-dom'
import Logo1 from '../Assets/Logo.png'
import Login from './Login'
import Signup from './Signup'

const Ex = () => {
  const [openLogin, setOpenLogin] = useState(false)
  const [openSignup, setOpenSignup] =useState(false)

  return (
    <>
      <Box>
        <AppBar position="static" sx={{ backgroundColor: '#440E03' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={Logo1} alt="logo" style={{ width: 50, height: 50 }} />
              <Typography sx={{ ml: 2, fontSize: 22, fontWeight: 'bold', color: 'white' }}>
                Mysore Filter Coffee Traditional
              </Typography>
            </Box>

            {/* Menu */}
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
              <TextField
                placeholder="Search"
                variant="standard"
                InputProps={{ disableUnderline: true }}
                sx={{
                  bgcolor: 'white',
                  px: 2,
                  borderRadius: 20,
                  height: 35,
                  width: 280
                }}
              />
              <Button component={Link} to="/" sx={{ color: 'white' }}>Home</Button>
              <Button component={Link} to="/service" sx={{ color: 'white' }}>Menu</Button>
              <Button component={Link} to="/gallery" sx={{ color: 'white' }}>Gallery</Button>
              <Button component={Link} to="/contact" sx={{ color: 'white' }}>Contact</Button>
            </Box>

            {/* Login / Signup */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: 'white', color: '#440E03', borderRadius: 4 }}
                onClick={() => setOpenLogin(true)}  
              >
                Login
              </Button>

              <Button
                variant="contained"
                sx={{ backgroundColor: 'white', color: '#440E03', borderRadius: 4 }}
                onClick={() => setOpenSignup(true)}
              >
                Signup
              </Button>
            </Box>

          </Toolbar>
        </AppBar>
      </Box>

      {/* 🔐 LOGIN POPUP */}
      <Login
        open={openLogin}
        onClose={() => setOpenLogin(false)}
      />
      <Signup
      open={openSignup}
      onClose={() => setOpenSignup(false)}
      />
    </>
  )
}

export default Ex
