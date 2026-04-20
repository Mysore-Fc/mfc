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
  IconButton,
  useMediaQuery
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />
})

const Signup = ({ open, onClose }) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      fullScreen={fullScreen}   // ✅ mobile fullscreen
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: { xs: 0, sm: 4 },
          boxShadow: '0 12px 40px rgba(0,0,0,0.25)'
        }
      }}
    >

      {/* Header */}
      <Box
        sx={{
          background: 'linear-gradient(160deg, #440E03, #5a1608)',
          color: 'white',
          p: { xs: 2, sm: 3 },
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

        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: 20, sm: 24 }
          }}
        >
          Create Account ☕
        </Typography>

        <Typography
          sx={{
            opacity: 0.9,
            fontSize: { xs: 13, sm: 14 }
          }}
        >
          Join Mysore Filter Coffee family
        </Typography>
      </Box>

      {/* Content */}
      <DialogContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 1.5, sm: 2 }
          }}
        >
          <TextField label="Full Name" fullWidth size={fullScreen ? 'medium' : 'small'} />
          <TextField label="Email" fullWidth size={fullScreen ? 'medium' : 'small'} />
          <TextField label="Phone Number" fullWidth size={fullScreen ? 'medium' : 'small'} />
          <TextField label="Password" type="password" fullWidth size={fullScreen ? 'medium' : 'small'} />
          <TextField label="Confirm Password" type="password" fullWidth size={fullScreen ? 'medium' : 'small'} />

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 1,
              py: { xs: 1.2, sm: 1 },
              fontWeight: 'bold',
              fontSize: { xs: 14, sm: 15 },
              backgroundColor: '#440E03',
              borderRadius: 3,
              '&:hover': { backgroundColor: '#5a1608' }
            }}
          >
            Sign Up
          </Button>

          <Divider sx={{ my: 2 }} />

          <Typography
            textAlign="center"
            sx={{ fontSize: { xs: 12, sm: 13 } }}
          >
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