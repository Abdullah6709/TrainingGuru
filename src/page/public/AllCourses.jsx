import React, { useState } from 'react';
import {
  Box, Grid, Typography, Paper, Radio, RadioGroup,
  FormControlLabel, Button, Card, CardContent, CardActions
} from '@mui/material';

import C1 from '../../assets/images/courses/java-development.png';
import C2 from '../../assets/images/courses/java-development.png';
import C3 from '../../assets/images/courses/java-development.png';
import C4 from '../../assets/images/courses/java-development.png';
import C5 from '../../assets/images/courses/java-development.png';
import C6 from '../../assets/images/courses/java-development.png';

const categories = [
  'All Courses',
  'Java Courses',
  'Website Development',
  'Python Courses',
  'Mobile Application Development',
  'PHP Full-Stack Development',
];

const courses = [
  {
    id: 1,
    img: C1,
    title: 'Core Java Development',
    description: 'This Core Java Development course builds fundamental programming skills essential for software development and career growth.',
    category: 'Java Courses',
  },
  {
    id: 2,
    img: C2,
    title: 'Advance Java Development',
    description: "Advanced Java course enhances an individual's skills, employability, and potential for higher salaries.",
    category: 'Java Courses',
  },
  {
    id: 3,
    img: C3,
    title: 'Fullstack Java Development',
    description: 'Java Fullstack courses offer comprehensive skills to develop end-to-end web applications with Java technologies.',
    category: 'Java Courses',
  },
  {
    id: 4,
    img: C4,
    title: 'Core Python Development',
    description: 'Python course offers training, certification, placements, and scholarships for students interested in core development.',
    category: 'Python Courses',
  },
  {
    id: 5,
    img: C5,
    title: 'Advance Python Development',
    description: 'Advance Python course offers expert-level training in Python development with practical projects and industry applications.',
    category: 'Python Courses',
  },
  {
    id: 6,
    img: C6,
    title: 'Python Full-Stack Development',
    description: 'Python full-stack course includes Flask, Django, HTML/CSS, JavaScript, React, and database skills for you.',
    category: 'Python Courses',
  },
  {
    id: 7,
    img: C1,
    title: 'Website Development With JAVA',
    description: 'Java web development uses JSP, Servlets, Spring, and Hibernate for building dynamic web applications efficiently',
    category: 'Website Development',
  },
  {
    id: 8,
    img: C2,
    title: 'Website Development With Python',
    description: "Python web dev course covers Flask, Django, HTML, CSS, and JS for building dynamic websites.",
    category: 'Website Development',
  },
  {
    id: 9,
    img: C3,
    title: 'Website Development With PHP',
    description: 'PHP course covers website development technologies for practical skills and career advancement.',
    category: 'PHP Full-Stack Development',
  },
  {
    id: 10,
    img: C4,
    title: 'Website Development with MERN Stack (React.js)',
    description: 'MERN stack uses MongoDB, Express, React, Node.js. It enables full-stack JavaScript development for web applications.',
    category: 'Website Development',
  },
  {
    id: 11,
    img: C5,
    title: 'Website Development with MERN Stack (Angular.js)',
    description: 'Advance Python course offers expert-level training in Python development with practical projects and industry applications.',
    category: 'Website Development',
  },
  {
    id: 12,
    img: C6,
    title: 'IOS Development with React Native',
    description: 'React-based Android Development course covers modern technologies for building high-performance mobile apps with user-friendly interfaces.',
    category: 'Mobile Application Development',
  },
];

const TrendingCoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Courses');

  const filteredCourses =
    selectedCategory === 'All Courses'
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <Box sx={{ px: 2, mt: 13 }}>
      <Grid container spacing={2}>
        {/* Sidebar */}
        <Grid size={{xs:12, md:3}}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              position: { md: 'sticky' },
              top: { md: 104 },
            }}
          >
            <Typography variant="overline" color="text.secondary">
              Courses
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              All Courses
            </Typography>
            <RadioGroup
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category, index) => (
                <FormControlLabel
                  key={index}
                  value={category}
                  control={<Radio />}
                  label={category}
                />
              ))}
            </RadioGroup>
          </Paper>
        </Grid>

        {/* Main Content */}
        <Grid size={{xs:12, md:9}}>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Trending courses
          </Typography>
          <Grid container spacing={2}>
            {filteredCourses.map((course) => (
              <Grid size={{xs:12,sm:6, md:4}} key={course.id} >
                <Card
                  elevation={3}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <CardContent>
                    <Box mb={2} display="flex" alignItems="center" gap={2}>
                      <img
                        src={course.img}
                        alt={course.title}
                        width={100}
                        height={100}
                        style={{ borderRadius: 4, objectFit: 'cover' }}
                      />
                      <Typography variant="subtitle1" fontWeight="bold">
                        {course.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {course.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" fullWidth>
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrendingCoursesPage;
