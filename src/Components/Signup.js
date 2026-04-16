import React from 'react'
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Box,
  Slide,
  Typography,
  Divider,
  IconButton
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />
})

const Signup = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      keepMounted
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          boxShadow: '0 12px 40px rgba(0,0,0,0.25)'
        }
      }}
    >
      {/* Header */}
      <Box
        sx={{
          background:
            'linear-gradient(160deg, #440E03, #5a1608)',
          color: 'white',
          p: 3,
          position: 'relative',
          textAlign: 'center'
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'white'
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h5" fontWeight="bold">
          Create Account ☕
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.9 }}>
          Join Mysore Filter Coffee family
        </Typography>
      </Box>

      {/* Content */}
      <DialogContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Full Name" fullWidth />
          <TextField label="Email" fullWidth />
          <TextField label="Phone Number" fullWidth />
          <TextField label="Password" type="password" fullWidth />
          <TextField label="Confirm Password" type="password" fullWidth />

          <Button
            variant="contained"
            sx={{
              mt: 1,
              py: 1.2,
              fontWeight: 'bold',
              backgroundColor: '#440E03',
              borderRadius: 3,
              '&:hover': { backgroundColor: '#5a1608' }
            }}
          >
            Sign Up
          </Button>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body2" textAlign="center">
            Already have an account?{' '}
            <span
              style={{
                color: '#440E03',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Login
            </span>
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default Signup
