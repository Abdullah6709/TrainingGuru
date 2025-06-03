import React from 'react';
import { Grid, Typography, TextField, Button, Box } from '@mui/material';
const GetInTouch = () => {        // ms.................
  return (
    <Box sx={{ p: 5, overflowX: 'auto' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },  // stack on xs, row on md+
          gap: 4,
        }}
      >
        {/* Left Side - Form */}
        <Box
          sx={{
            flex: 1,
            minWidth: { xs: 'auto', md: 500 },
            maxWidth: { xs: '100%', md: 600 },
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Get In Touch.
          </Typography>
          <Typography variant="body1" mb={3}>
            Fill in the form to the right to get in touch with someone <br />
            on our team, and we will reach out shortly.
          </Typography>

          <Grid container spacing={2}>
            <Grid size={{xs:12, sm:6}}>
              <TextField fullWidth label="Your Name" variant="outlined" />
            </Grid>
            <Grid size={{xs:12, sm:6}}>
              <TextField fullWidth label="Your Email" variant="outlined" />
            </Grid>
            <Grid size={{xs:12, sm:6}}>
              <TextField fullWidth label="Your Contact Number" variant="outlined" />
            </Grid>
            <Grid size={{xs:12, sm:6}}>
              <TextField fullWidth label="Course" variant="outlined" />
            </Grid>
            <Grid size={{xs:12, sm:12}}>
              <TextField fullWidth label="Message" variant="outlined" multiline rows={5}  />
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <Button variant="contained" color="primary">
                Send Message
              </Button>
            </Grid> */}
          </Grid>
            <Box mt={2} >
          <Button variant="contained" color="primary">
                Send Message
              </Button>
              </Box>
        </Box>

        {/* Right Side - Google Map */}
        <Box
          sx={{
            flex: 1,
            minWidth: { xs: 'auto', md: 500 },
            width: '100%',
          }}
        >
          <iframe
            title="Training Guru Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7005.91260301286!2d77.31920052328797!3d28.571462689258142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce42066c7b247%3A0x820d8e4a1382493e!2sTraining%20guru!5e0!3m2!1sen!2sin!4v1716366065394!5m2!1sen!2sin"
            width="100%"
            height="530"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GetInTouch;