import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import ScholarshipForm from './ScholarshipForm';

const Getscholarship = () => {
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
          Register for scholarship
        </Typography>

        <Typography mt={5} variant="body2" textAlign="center" sx={{ lineHeight: 1.8 }}>
          Acquiring a scholarship will eventually uplift your academic and career objectives by <br />
          diminishing any financial fence. Obtaining a scholarship will help your financial <br />
          concerns. Thus, it will offer you more time to study, acquire knowledge and secure <br />
          better marks.
        </Typography>
      </Box>

      {/* White Background Form Section */}
      <Box
        sx={{
          backgroundColor: 'white',
          color: 'black',
          minHeight: '70vh',
          px: 3,
          py: 2,
        }}
      >
        <ScholarshipForm />
      </Box>

      {/* Bottom Info Section in One Row */}
      <Box sx={{ bgcolor: '#f9f9f9', py: 6, px: { xs: 2, md: 6 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: 'flex-start',
            justifyContent: 'center',
            maxWidth: 1200,
            mx: 'auto',
          }}
        >
          {/* Left Column */}
          <Box flex={1}>
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Every brilliant student has the opportunity to obtain a scholarship.
            </Typography>
            <Typography variant="body2" lineHeight={1.8} mb={2}>
              Receiving a scholarship can significantly boost your academic and career goals by removing any financial barriers.
              By obtaining a scholarship, you can alleviate financial worries, allowing you to focus on your studies, gain knowledge, and achieve better grades.
              This can provide you with more time and resources to invest in your education and propel you towards a brighter future.
            </Typography>
          </Box>

          {/* Right Column */}
          <Box flex={1}>
            <Typography variant="h5" gutterBottom fontWeight={600}>
              The Benefits of Getting a Scholarship
            </Typography>
            <Typography variant="body2" lineHeight={1.8}>
              Nowadays, education has become one of the most costly assets & important.
              Trainingguru helps students to cover their financial aid who are looking for financial help to pursue the career of their dreams that needs numerous years of education and counseling assistance.
            </Typography>
          </Box>
        </Box>
        
      </Box>
      <Box>
        <Typography variant='h4' textAlign='center' mt={5} fontWeight={600}>
          Advantages of Receiving a Scholarship
        </Typography>
        <Typography variant='body2' textAlign='center' mt={2} mb={5} lineHeight={1.8}>
          In today's world, education is a crucial and expensive asset. At Training Guru, we understand the financial burden that students may <br />
face while pursuing their dreams of a career that requires extensive education and guidance. We offer financial aid to eligible <br />
students, along with counseling assistance to help them achieve their goals. Our aim is to make quality education accessible and <br />
affordable for all, regardless of their financial background. Trust us to support you in your pursuit of a successful career, and let us
<br />
help you pave the way to a brighter future.
        </Typography>
      </Box>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3, py: 5 }}>
      <Grid container spacing={6} justifyContent="center">
        {/* First Grid Item */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom>
            Saves you from Debt
          </Typography>
          <Typography variant="body2" mb={3}>
            Obtaining a scholarship will eventually save you from taking <br />
            education loans.
          </Typography>

          <Typography variant="h4" gutterBottom>
            Debt-free solution
          </Typography>
          <Typography variant="body2">
            Securing a scholarship can ultimately help you avoid the need to <br />
            take out education loans.
          </Typography>
        </Grid>

        {/* Second Grid Item */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>
            Opportunity to earn education
          </Typography>
          <Typography variant="body2" mb={3} lineHeight={1.8}>
            You choose your desired field as per your abilities.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Education earning opportunity available
          </Typography>
          <Typography variant="body2">
            Select the field of your choice based on your abilities.
          </Typography>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default Getscholarship;
