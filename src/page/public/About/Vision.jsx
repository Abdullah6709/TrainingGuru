import { Box, Typography } from '@mui/material';
import React from 'react';
import v1 from '../../../assets/images/vision/vision.webp';

function Vision() {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        color: '#333',
        px: { xs: 2, md: 10 },
        py: 8,
      }}
    >
      {/* Flex Container */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
        }}
      >
        {/* Image Section */}
        <Box
          component="img"
          src={v1}
          alt="Our Vision"
          sx={{
            width: { xs: '100%', md: '50%' },
            borderRadius: 2,
            objectFit: 'cover',
          }}
        />

        {/* Text Content */}
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Typography variant="h3" mb={3}>
            Our Vision
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Training Guru's vision is to empower human resources by equipping them with the latest and most in-demand IT skills through our comprehensive training programs. Our goal is to ensure that our students receive the best education possible, both online and offline, in order to help them achieve their professional goals. <br /><br />
            We are committed to providing quality training that not only enhances their skills but also increases their employability, as evidenced by our guaranteed placements and scholarships. As a sub-company of Spirale Group, a well-known HR hiring and recruiting firm in Noida, we are dedicated to bridging the skills gap and creating a workforce that is competent and confident in the ever-evolving world of technology.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Vision;
