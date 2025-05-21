import React from 'react';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0d6efd',
        color: 'white',
        mt: 'auto',
        pt: 6,
        pb: 3,
        px: { xs: 3, md: 10 },
      }}
    >
      <Grid container spacing={4}>
        {/* About Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            We provide educational opportunities and scholarships to empower learners and build a brighter future.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="#" color="inherit" underline="hover">Home</Link>
            <Link href="#" color="inherit" underline="hover">Courses</Link>
            <Link href="#" color="inherit" underline="hover">Scholarships</Link>
            <Link href="#" color="inherit" underline="hover">Contact</Link>
          </Box>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton color="inherit" href="#"><Facebook /></IconButton>
            <IconButton color="inherit" href="#"><Twitter /></IconButton>
            <IconButton color="inherit" href="#"><Instagram /></IconButton>
            <IconButton color="inherit" href="#"><LinkedIn /></IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box mt={4} textAlign="center">
        <Typography variant="body2">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
