import { Box, Typography } from '@mui/material';
import React from 'react';
import v1 from '../../assets/images/vision/mission.webp';

function Mission() {
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

        {/* Text Content */}
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Typography variant="h3" mb={3}>
            Our Mission
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
       At Training Guru, our mission is to empower individuals with the knowledge and skills they need to succeed in the IT industry. We strive to provide the best training courses, both online and offline, to our students, and ensure that they are equipped with industry-relevant certifications and guaranteed placements. As a sub company of Spirale <br /><br />
           Group, we have access to a wealth of expertise in HR hiring and recruiting, allowing us to guide our students towards fulfilling and rewarding careers. We are dedicated to helping our students reach their full potential and achieve their goals in the dynamic world of IT.
          </Typography>
        </Box>
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

      </Box>
      
    </Box>
  );
}

export default Mission;
