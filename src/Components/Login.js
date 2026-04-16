import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
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

const Login = ({ open, onClose }) => {
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
          Welcome Back ☕
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.9 }}>
          Login to enjoy authentic filter coffee
        </Typography>
      </Box>

      {/* Content */}
      <DialogContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Email"
            fullWidth
            variant="outlined"
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
          />

          <Typography
            variant="body2"
            sx={{
              textAlign: 'right',
              color: '#440E03',
              cursor: 'pointer'
            }}
          >
            Forgot password?
          </Typography>

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
            Login
          </Button>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body2" textAlign="center">
            Don’t have an account?{' '}
            <span
              style={{
                color: '#440E03',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Sign up
            </span>
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default Login
