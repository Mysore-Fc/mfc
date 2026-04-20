import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  TextField,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import Logo1 from '../Assets/Logo.png'
import Login from './Login'
import Signup from './Signup'

const Ex = () => {
  const [openLogin, setOpenLogin] = useState(false)
  const [openSignup, setOpenSignup] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Menu', path: '/service' },
    { text: 'Gallery', path: '/gallery' },
    { text: 'Contact', path: '/contact' }
  ]

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#440E03' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

          {/* LEFT: Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={Logo1} alt="logo" style={{ width: 40, height: 40 }} />
            <Typography
              sx={{
                ml: 1,
                fontSize: { xs: 14, sm: 18, md: 22 },
                fontWeight: 'bold',
                color: 'white'
              }}
            >
              Mysore Filter Coffee
            </Typography>
          </Box>

          {/* CENTER: Menu (Desktop only) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 3,
              alignItems: 'center'
            }}
          >
            <TextField
              placeholder="Search"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{
                bgcolor: 'white',
                px: 2,
                borderRadius: 20,
                height: 35,
                width: { md: 200, lg: 280 }
              }}
            />

            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{ color: 'white' }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* RIGHT: Buttons + Mobile Menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

            {/* Desktop Login */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
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

            {/* Mobile Hamburger */}
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' }, color: 'white' }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* 📱 MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 250 }}>

          {/* Search */}
          <Box sx={{ p: 2 }}>
            <TextField
              fullWidth
              placeholder="Search"
              variant="outlined"
            />
          </Box>

          {/* Menu Items */}
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                onClick={() => setMobileOpen(false)}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>

          {/* Login / Signup */}
          <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button
              variant="contained"
              onClick={() => {
                setOpenLogin(true)
                setMobileOpen(false)
              }}
            >
              Login
            </Button>

            <Button
              variant="contained"
              onClick={() => {
                setOpenSignup(true)
                setMobileOpen(false)
              }}
            >
              Signup
            </Button>
          </Box>

        </Box>
      </Drawer>

      {/* POPUPS */}
      <Login open={openLogin} onClose={() => setOpenLogin(false)} />
      <Signup open={openSignup} onClose={() => setOpenSignup(false)} />
    </>
  )
}

export default Ex