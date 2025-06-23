import React from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import scholarshipImg from '../../../assets/images/form/167794.jpg';

const ScholarshipForm = () => {
  const [education, setEducation] = React.useState('');
  const [technology, setTechnology] = React.useState('');

  const handleEducationChange = (event) => {
    setEducation(event.target.value);
  };

  const handleTechnologyChange = (event) => {
    setTechnology(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        mx: 'auto',
        my: 1,
        boxShadow: 4,
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      {/* Left: Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          flex: 1,
          p: 4,
          bgcolor: '#0d6efd',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          '& .MuiInputBase-input': { color: 'white' },
          '& .MuiInputLabel-root': { color: 'white' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
            '&:hover fieldset': { borderColor: 'white' },
            '&.Mui-focused fieldset': { borderColor: 'white' },
          },
          '& .MuiSelect-icon': { color: 'white' },
        }}
      >
        <Typography variant="h5" textAlign="center" mb={2}>
          Scholarship Registration
        </Typography>

        <TextField label="Name" placeholder="Enter your name" required />
        <TextField label="Email" type="email" placeholder="Enter your email" required />
        <TextField label="Contact no" type="tel" placeholder="Enter your mobile no." required />

        <FormControl fullWidth required>
          <InputLabel id="education-label">Education</InputLabel>
          <Select
            labelId="education-label"
            value={education}
            label="Education"
            onChange={handleEducationChange}
          >
            <MenuItem value=""><em>Select your education</em></MenuItem>
            <MenuItem value="highschool">High School</MenuItem>
            <MenuItem value="bachelor">Bachelor's Degree</MenuItem>
            <MenuItem value="master">Master's Degree</MenuItem>
            <MenuItem value="phd">PhD</MenuItem>
          </Select>
        </FormControl>

        <TextField label="College Name" placeholder="Enter your college name" required />

        <FormControl fullWidth required>
          <InputLabel id="technology-label">Technology</InputLabel>
          <Select
            labelId="technology-label"
            value={technology}
            label="Technology"
            onChange={handleTechnologyChange}
          >
            <MenuItem value=""><em>Select your technology</em></MenuItem>
            <MenuItem value="computerScience">Computer Science</MenuItem>
            <MenuItem value="informationTech">Information Technology</MenuItem>
            <MenuItem value="electronics">Electronics</MenuItem>
            <MenuItem value="mechanical">Mechanical</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" size="large" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>

      {/* Right: Image */}
      <Box
        sx={{
          flex: 1,
          height: { xs: 200, md: 'auto' },
          backgroundImage: `url(${scholarshipImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Box>
  );
};

export default ScholarshipForm;
