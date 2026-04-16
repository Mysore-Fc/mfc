import React from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'

const Example = () => {
  return (
    <Box sx={{ width: '100%', mt: 2}}>
        <Grid container spacing={2}>
           <Grid size={6}>
              <Box sx={{padding: 2, backgroundColor: 'red',textAlign: 'center', borderRadius: 5}}>
                size 6
              </Box>
           </Grid>
             <Grid size={6}>
              <Box sx={{padding: 2, backgroundColor: 'red',textAlign: 'center', borderRadius: 5}}>
                size 6
              </Box>
           </Grid>
        </Grid>
      <Grid container spacing={2} sx={{mt: 2}}>
        
        <Grid size={4}>
          <Box sx={{ padding: 2, backgroundColor: 'pink', textAlign: 'center', borderRadius: 5 }}>
            size 4
          </Box>
        </Grid>

        <Grid size={4}>
          <Box sx={{ padding: 2, backgroundColor: 'pink', textAlign: 'center', borderRadius: 5 }}>
            size 4
          </Box>
        </Grid>
         <Grid size={4}>
          <Box sx={{ padding: 2, backgroundColor: 'pink', textAlign: 'center', borderRadius: 5 }}>
            size 4
          </Box>
        </Grid>

      </Grid>
      <Grid container spacing={2} sx={{mt: 2}}>
        <Grid size={3}>
           <Box sx={{padding: 2, backgroundColor: 'blue', textAlign:'center', borderRadius: 5}}>
             size 3
           </Box>
        </Grid>
        <Grid size={3}>
           <Box sx={{padding: 2, backgroundColor: 'blue', textAlign:'center', borderRadius: 5}}>
             size 3
           </Box>
        </Grid>
        <Grid size={3}>
           <Box sx={{padding: 2, backgroundColor: 'blue', textAlign:'center', borderRadius: 5}}>
             size 3
           </Box>
        </Grid>
        <Grid size={3}>
           <Box sx={{padding: 2, backgroundColor: 'blue', textAlign:'center', borderRadius: 5}}>
             size 3
           </Box>
        </Grid>
           
      </Grid>
      <Grid container spacing={2} sx={{mt: 2}}>
        <Grid size={2}>
            <Box sx={{padding: 2, backgroundColor: 'green', textAlign: 'center', borderRadius: 5}}>
                size 2
            </Box>
        </Grid>
        <Grid size={2}>
            <Box sx={{padding: 2, backgroundColor: 'green', textAlign: 'center',borderRadius: 5}}>
                size 2
            </Box>
        </Grid>
        <Grid size={2}>
            <Box sx={{padding: 2, backgroundColor: 'green', textAlign: 'center',borderRadius: 5}}>
                size 2
            </Box>
        </Grid>
        <Grid size={2}>
            <Box sx={{padding: 2, backgroundColor: 'green', textAlign: 'center',borderRadius: 5}}>
                size 2
            </Box>
        </Grid>
        <Grid size={2}>
            <Box sx={{padding: 2, backgroundColor: 'green', textAlign: 'center',borderRadius: 5}}>
                size 2
            </Box>
        </Grid>
        <Grid size={2}>
            <Box sx={{padding: 2, backgroundColor: 'green', textAlign: 'center',borderRadius: 5}}>
                size 2
            </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Example
