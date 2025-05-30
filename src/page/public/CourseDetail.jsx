import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Chip,
  Divider,
  useTheme,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CourseData from '../../data/CourseData';

export default function CourseDetailPage() {
  const { id } = useParams();
  const course = CourseData.find(c => c.id === parseInt(id));
  const theme = useTheme();

  if (!course) {
    return (
      <Box sx={{ maxWidth: 800, mx: 'auto', p: 2, textAlign: 'center', mt: 15 }}>
        <Typography variant="h5" color="error">Course not found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', p: 3, mt: { xs: 8, md: 15 } }}>
      {/* Header Card */}
      <Card
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          boxShadow: 6,
          borderRadius: 3,
          mb: 6,
          
        }}
      >
        <CardMedia
          component="img"
          image={course.img}
          alt={course.title}
          sx={{
            width: { xs: '100%', md: 400 },
            height: { xs: 200, md: 'auto' },
            objectFit: 'cover',
          }}
        />
        <Box sx={{ flex: 1, p: 3 }}>
          <CardContent>
            <Typography variant="h4" fontWeight={600} gutterBottom>
              {course.title}
            </Typography>
            <Chip label={course.category} color="primary" sx={{ mb: 2 }} />
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {course.description}
            </Typography>
            <Button variant="contained" size="large" sx={{ borderRadius: 8 }}>
              Enroll Now
            </Button>
          </CardContent>
        </Box>
      </Card>

      {/* About This Course */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          About This Course
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {course.fulldesc}
        </Typography>
      </Box>

      {/* What You'll Learn */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          What You'll Learn
        </Typography>
        <List>
          {course.learningOutcomes.map((text, index) => (
            <ListItem key={index} disablePadding sx={{ mb: 1 }}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Course Details */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Course Details
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <List>
          <ListItem>
            <ListItemText
              primary="Category"
              secondary={course.category}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Skill Level"
              secondary={
                course.title.includes('Core')
                  ? 'Beginner'
                  : course.title.includes('Advance')
                  ? 'Advanced'
                  : 'Intermediate'
              }
            />
          </ListItem>
        </List>
      </Box>

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            px: 6,
            py: 2,
            borderRadius: 50,
            backgroundColor: '#013967',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#0a4f83',
            },
          }}
        >
          Start Learning Now
        </Button>
      </Box>
    </Box>
  );
}
