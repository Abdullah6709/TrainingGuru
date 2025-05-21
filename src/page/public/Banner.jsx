import {
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import MYIMG from '../../assets/images/banner/bnr.png'

const Banner = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 4,
        mt:10,
        py: 5,
        px: { xs: 2, sm: 3, md: 12, lg: 12 },
        backgroundColor: '#0d6efd',
        color: 'white', // Make all child text white
      }}
    >
      <Grid container alignItems="center" spacing={18}>
        {/* Text Content on the Left */}
        <Grid item xs={12} md={6}>
          <Typography variant="h2" component="h1" gutterBottom>
            Training Guru is a <br />
            community <br />
            for creative people.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Learn from expert professionals and <br />
            join the largest online community for creatives.
          </Typography>

          {/* Search Bar with Search Icon */}
          <Box sx={{ mt: 3 }}>
            <TextField
              fullWidth
              variant="outlined"
              label="What courses do you need?"
              placeholder="Search courses..."
              size="medium"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'white' }} />
                  </InputAdornment>
                ),
                style: { color: 'white' }, // Input text color
              }}
              InputLabelProps={{
                style: { color: 'white' }, // Label color
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            />
          </Box>
        </Grid>

        {/* Image on the Right */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={MYIMG}
            alt="Banner"
            sx={{
              width: '100%',
              maxWidth: '500px',
              display: 'block',
              ml: 'auto',
              border: '1px 2px 3px 4px solid white',
              borderRadius: '8px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Banner
