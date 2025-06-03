import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const SignupForm = () => {
  return (
    <Grid container  component="main" sx={{ minHeight: '100vh', mt: { xs: 2, md: 15 }, mr: { md: 15 } }}>
      {/* Left Section */}
      <Grid
      size={{xs:12, sm:6, md:7}}
       
        sx={{
         // backgroundColor: '#f8f9fb',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: { xs: 4, sm: 6, md: 12, lg: 20 },
          py: { xs: 4, sm: 8 },
          textAlign: { xs: 'center', sm: 'left' }
        }}
      >
        <Typography variant="body2" sx={{ color: 'gray', mb: 1 }}>
          SIGN UP TO{' '}
          <Typography component="span" sx={{ color: 'blue', fontWeight: 600 }}>
            TRAINING GURU
          </Typography>
        </Typography>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Connect with the
        </Typography>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          best professionals
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, color: 'text.secondary' }}>
          Learn from expert professionals and
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          join the largest online community for creatives.
        </Typography>
      </Grid>

      {/* Right Section (Signup Form) */}
      <Grid size={{xs:12, sm:6, md:5}} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: { xs: 4, sm: 8 },
            mx: { xs: 4, sm: 6, md: 12 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component="h1" variant="h6" sx={{ mb: 2 }}>
            Create Account
          </Typography>

       
          <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} sx={{ mb: 1 }}>
            Sign up with Google
          </Button>
          <Button fullWidth variant="outlined" startIcon={<FacebookIcon />} sx={{ mb: 2 }}>
            Sign up with Facebook
          </Button>

          {/* OR Divider */}
          <Divider sx={{ width: '100%', my: 2 }}>OR</Divider>

          {/* Form Fields */}
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <Grid size={{xs:12, sm:6}}>
              <TextField fullWidth label="First Name" variant="outlined" />
            </Grid>
            <Grid size={{xs:12, sm:6}}>
              <TextField fullWidth label="Last Name" variant="outlined" />
            </Grid>
            <Grid size={{xs:12}}>
              <TextField fullWidth label="Mobile Number" variant="outlined" />
            </Grid>
            <Grid size={{xs:12}}>
              <TextField fullWidth label="Email Address" variant="outlined" />
            </Grid>
            <Grid size={{xs:12}}>
              <TextField
                fullWidth
                type="password"
                label="Password"
                variant="outlined"
              />
            </Grid>
            <Grid size={{xs:12}}>
              <TextField fullWidth label="Course Name" variant="outlined" />
            </Grid>
            <Grid size={{xs:12}}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label={
                  <Typography variant="body2">
                    I agree to the{' '}
                    <Link href="#" underline="hover">
                      Terms & Conditions
                    </Link>
                  </Typography>
                }
              />
            </Grid>
            <Grid size={{xs:12}}>
              <Button
                fullWidth
                variant="contained"
                sx={{ backgroundColor: '#0057ff', color: '#fff', py: 1.2 }}
              >
                Sign Up
              </Button>
            </Grid>
            <Grid size={{xs:12}}>
              <Typography variant="body2" textAlign="center">
                Already have an account?{' '}
                <Link href="#" variant="body2">
                  Sign In
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignupForm;
