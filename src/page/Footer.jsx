import React from 'react';
import { Box, Typography, Grid, Link, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import Nav from '../assets/images/navbar/tg_logo.png';
const Footer = () => {
  const handleClick = () => {
    navigate("/");
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0d6efd',
        color: '#fff',
        mt: 'auto',
        pt: 6,
        pb: 4,
        px: { xs: 3, md: 10 },
      }}
    >
      <Grid container spacing={5}>
        {/* About Section */}
        <Grid item xs={12} md={2.4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2,
              
           }}>
            About Us
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
            We provide educational opportunities and scholarships to <br />
              empower learners and build a brighter future.
          </Typography>
          
<Box onClick={handleClick} display="flex" alignItems="center" mt={3}
 gap={2}>
            <img src={Nav} alt="Logo" style={{ height: 60 }} />
          </Box>

        </Grid>
        {/* Quick Links */}
        <Grid item xs={12} md={2.4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {['Home', 'Courses', 'Scholarships', 'Contact'].map((text) => (
              <Link
                key={text}
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  transition: 'color 0.3s',
                  '&:hover': {
                    color: '#ffc107',
                  },
                }}
              >
                {text}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Follow Us */}
        <Grid item xs={12} md={2.4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, index) => (
              <IconButton
                key={index}
                color="inherit"
                href="#"
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={2.4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Contact Info
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
            📍 A-45, Sector 2, Noida, UP<br />
            📞 +91 9876543210<br />
            ✉️ info@trainingguru.in
          </Typography>
        </Grid>

        {/* Popular Courses */}
        <Grid item xs={12} md={2.4}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
           Popular Courses
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {['Full Stack Development', 'Python with AI', 'React & Node.js', 'MERN Stack'].map((course) => (
              <Link
                key={course}
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  transition: 'color 0.3s',
                  '&:hover': {
                    color: '#ffc107',
                  },
                }}
              >
                {course}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', my: 4 }} />

      {/* Footer Bottom */}
      <Box textAlign="center">
        <Typography variant="body2" sx={{ fontSize: 13 }}>
          © {new Date().getFullYear()} Training Guru. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
