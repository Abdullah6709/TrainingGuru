import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const courses = [
  {
    title: 'Master in Java Development',
    icon: <img src="src/assets/svg/java.svg" alt="Java Icon" width={50} />,
  },
  {
    title: 'Master in React Development',
    icon: <img src="src/assets/react.svg" alt="React Icon" width={50} />,
  },
  {
    title: 'Master in Apps Development',
    icon: <img src="src/assets/svg/mobileap.svg" alt="Mobile App Icon" width={50} />,
  },
  {
    title: 'Master in Python Development',
    icon: <img src="src/assets/svg/python.svg" alt="Python Icon" width={50} />,
  },
];

const CourseCards = () => {
  const navigate = useNavigate(); 

  const handleSeeAllCourses = () => {
    navigate('/allcourses'); 
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        py: 5,
        px: { xs: 2, sm: 3, md: 12, lg: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Cards Section */}
        <Grid container spacing={2} justifyContent="center">
          {courses.map((course, index) => (
            <Grid size={{xs:12, sm:6, md:3}} key={index}>
              <Card
                sx={{
                  height: 200,
                  textAlign: 'center',
                  p: 1,
                  boxShadow: 2,
                  borderRadius: 2,
                  backgroundColor: '#fff',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: '0.3s',
                  },
                }}
              >
                <CardContent >
                    {course.icon}
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    {course.title}
                  </Typography>
                  <Button variant="outlined" size="small">
                    View More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer CTA Section */}
      <Box textAlign="center" mt={6}>
        <Typography variant="h4" gutterBottom>
          Our Popular Courses
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          These courses are in high demand in the industry
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSeeAllCourses}
        >
          See All Courses
        </Button>
      </Box>
    </Box>
  );
};

export default CourseCards;
