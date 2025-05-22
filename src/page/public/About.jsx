import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import AbNumber from './AbNumber'
import Vision from './Vision'
import Mission from './Mission'

function About() {
  return (
    <>
      {/* Top Blue Section */}
      <Box
        sx={{
          backgroundColor: '#0d6efd',
          color: 'white',
          minHeight: '70vh',
          px: 3,
          py: 5,
        }}
      >
        <Typography mt={15} variant="h3" textAlign="center">
          What is Training Guru?
        </Typography>

        <Typography mt={5} variant="body2" textAlign="center" sx={{ lineHeight: 1.8 }}>
          Training Guru, an IT training institute in Noida, offers top-quality courses in various IT <br />
          fields with certificates, job placements, and scholarships guaranteed for students. It <br />
          operates as a subsidiary of Spirale Group, a reputable HR recruitment firm in Noida.
        </Typography>

        {/* Centered Button */}
        <Box mt={5} textAlign="center">
          <Button 
            variant="contained" 
            color="secondary" 
            href="https://www.trainingguru.in/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Get in Touch
          </Button>
        </Box>
      </Box>
      <AbNumber />
      <Vision />
      <Mission />
    </>
  )
}

export default About
