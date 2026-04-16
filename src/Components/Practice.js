import React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const Practice = () => {
  return (
  <>
  <Container maxWidth="sm">
  <Box sx={{p: 1, border: '2px dotted black', width: 100, height: 100, margin: 10, bgcolor: 'pink', '&:hover':{bgcolor:'blue'}}}>React</Box>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
      <Box sx={{flexGrow: 1}}>
    <Grid container spacing={5}>
        <Grid size={5}>
            <items>size=5</items>
        </Grid>
        <Grid size={8}>
            <items>size=8</items>
        </Grid>
        <Grid size={1}>
            <items>size=1</items>
        </Grid>
        <Grid size={4}>
            <items>size=4</items>
        </Grid>
        <Grid size={7}>
            <items>size=7</items>
        </Grid>
        <Grid size={2}>
            <items>size=2</items>
            <items>size=1</items>
        </Grid>
    </Grid>
  </Box>
  {/* <Box sx={}}>

  </Box> */}
  {/* <Stack spacing={2} direction="row" >
  <Button variant="contained">Submit</Button>
  <Button variant="outlined">Close</Button>
  <Button variant="text">Open</Button>
  <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
  <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
  </Stack> */}
  </>
  
  )
}

export default Practice