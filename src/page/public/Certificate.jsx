import React from 'react'
import {Box, Typography} from "@mui/material";
import DetailsForm from './DetailsForm';

const Certificate = () => {
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
             Get Your Certificate
            </Typography>
    
            <Typography mt={1} variant="h6" textAlign="center" sx={{ lineHeight: 1.8 }}>
             In addition to offering top-notch IT training and placement assistance, Training Guru <br />
             also provides industry-recognized certifications to help you enhance your skills and <br />
             stand out in the job market. Our certification programs are designed to meet the <br />
             needs of both beginners and experienced professionals, and cover a range of IT <br />
             disciplines. With our certifications, you can validate your expertise, gain recognition in <br />
             your field, and open up new opportunities for career growth. Join us at Training Guru <br />
             and take your career to the next level!
           </Typography>
          </Box>
          <box>
            <DetailsForm />
          </box>
    </>
  )
}

export default Certificate
