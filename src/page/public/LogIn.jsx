import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  Link,
  TextField,
  Typography,
  FormControlLabel,
  Paper
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const AdminLogin = () => {
  return (
    <Grid container component="main" sx={{ minHeight: '100vh', mt: { xs: 2, sm: 5 } }}>
      {/* Left Section */}
      <Grid
        item
        xs={12}
        sm={6}
        md={7}
        sx={{
          backgroundColor: '#f8f9fb',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: { xs: 4, sm: 6, md: 12, lg: 20 },
          py: { xs: 4, md: 0 },
          textAlign: { xs: 'center', sm: 'left' }
        }}
      >
        <Typography variant="body2" sx={{ color: 'gray', mb: 1 }}>
          LOG IN TO <Typography component="span" sx={{ color: 'blue', fontWeight: 600 }}>TRAINING GURU</Typography>
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
        <Typography variant="body1" sx={{ mt: 1, color: 'text.secondary' }}>
          join the largest online community for creatives.
        </Typography>
      </Grid>

      {/* Right Section */}
      <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
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
            Admin Login
          </Typography>

          {/* Social Logins */}
          <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} sx={{ mb: 1 }}>
            Login with Google
          </Button>
          <Button fullWidth variant="outlined" startIcon={<FacebookIcon />} sx={{ mb: 2 }}>
            Login with Facebook
          </Button>

          <Divider sx={{ width: '100%', my: 2 }}>OR</Divider>

          {/* Login Form */}
          <TextField
            fullWidth
            label="Enter Email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Enter Password"
            type="password"
            variant="outlined"
            margin="normal"
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              mt: 1,
              mb: 2,
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 1, sm: 0 }
            }}
          >
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ backgroundColor: '#0057ff', color: '#fff', mb: 2 }}
          >
            Sign In
          </Button>

          <Typography variant="body2" textAlign="center">
            Don’t have an account?{' '}
            <Link href="#" variant="body2">
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AdminLogin;
