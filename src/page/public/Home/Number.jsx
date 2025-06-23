import React from 'react';
import CountUp from 'react-countup';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

const stats = [
  { number: 30, suffix: '+', label: 'Online Courses' },
  { number: 20, suffix: '+', label: 'Expert Tutors' },
  { number: 1000, suffix: '+', label: 'Total Students' },
  { number: 100, suffix: '+', label: 'Hiring Companies' },
];

const Number = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'blue',
        py: 5,
        px: { xs: 2, sm: 3, md: 12, lg: 12 },
      }}
    >
      <Grid container spacing={7} justifyContent="center">
        {stats.map((item, index) => (
          <Grid item key={index}>
            <Card sx={{ textAlign: 'center', width: 240 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: '2.5rem', fontWeight: 'bold' }}
                  color="primary"
                >
                  <CountUp end={item.number} duration={2.5} />{item.suffix}
                </Typography>
                <Typography
                  sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}
                  color="text.secondary"
                >
                  {item.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Number;
