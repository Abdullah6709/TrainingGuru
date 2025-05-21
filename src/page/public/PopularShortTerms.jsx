import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PopularShortTerms = () => {
  const navigate = useNavigate();

  const handleSeeAllCourses = () => {
    navigate('/allcourses'); // Make sure this route is defined in your router
  };

  return (
    <Box textAlign="center" py={5}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Our Popular Short Terms Courses
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        These courses are in high demand in industry
      </Typography>

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleSeeAllCourses}
        sx={{ mt: 3, textTransform: 'none', fontWeight: 'bold' }}
      >
        See All Courses
      </Button>
    </Box>
  );
};

export default PopularShortTerms;
