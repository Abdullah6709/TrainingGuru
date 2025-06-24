import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Card,
  CardContent,
  InputAdornment,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const courses = ["Java", "Python", "PHP", "React.js", "Android", "iOS"];

const DemoPage = () => {
  return (
    <Box>
      {/* Registration Section */}
      <Box
        sx={{
          background: "linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)",
          py: 5,
          mt: 5,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Left Text and Buttons */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                color="white"
                gutterBottom
              >
                Secure Your Spot for a Transformative IT Experience!
              </Typography>
              <Typography variant="body1" color="white" paragraph>
                Introducing Training Guru, the premier IT training institute in
                Noida! Discover a world of opportunities with our free demo
                classes every Saturday. Take advantage of our wide range of
                courses, including Core, Advance, and Fullstack Java
                Development, Core, Advance, and Fullstack Python Development,
                Website Development with Java, Python, MEAN Stack, and MERN
                Stack. Explore the realms of Android Development with Java and
                React Native, iOS Development with Native, and other trending
                and popular courses. Enroll now and enjoy a phenomenal 70% off
                on all courses. Don’t miss out on this incredible offer. Book
                your spot today and unlock your true potential with Training
                Guru!
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="white" mt={3}>
                Stay Home. Stay Safe. Prepare Hard.
              </Typography>
              <Box mt={2} display="flex" gap={2} flexWrap="wrap">
                {courses.map((course) => (
                  <Button
                    key={course}
                    variant="contained"
                    sx={{ backgroundColor: "#fdb462", color: "#000" }}
                  >
                    {course.toUpperCase()}
                  </Button>
                ))}
              </Box>
              <Typography
                variant="caption"
                color="white"
                display="block"
                mt={3}
              >
                <strong>Disclaimer:</strong> Upon complete registration, a
                confirmation email will be sent to your provided Email id with
                the demo class joining instructions. The schedule for the same
                is mentioned below
              </Typography>
            </Grid>

            {/* Registration Form */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Register for FREE Demo Classes!
                  </Typography>
                  <Box
                    component="form"
                    display="flex"
                    flexDirection="column"
                    gap={2}
                  >
                    <TextField
                      placeholder="Name"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon />
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                    <TextField
                      placeholder="Email"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                    <TextField
                      placeholder="Mobile"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon />
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                    <FormControl fullWidth>
                      <InputLabel>All Courses</InputLabel>
                      <Select defaultValue="">
                        {courses.map((course) => (
                          <MenuItem key={course} value={course}>
                            {course}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ backgroundColor: "#ff6d3f", color: "#fff" }}
                    >
                      Register Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Schedule Section */}
      <Box sx={{ backgroundColor: "#3a1c71", color: "white", py: 5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                How to Register for the Demo Class?
              </Typography>
              <Typography variant="body1">
                Securing your seat for the demo class is quick and easy! Simply
                visit our website and fill out the registration form provided.
                Our friendly team will promptly reach out to you to assist in
                selecting the ideal course and timing that best fits your
                schedule and aspirations.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Your Journey to Success Starts Now!
              </Typography>
              <Typography variant="body1">
                Are you ready to transform your IT dreams into a remarkable
                reality? Don’t let this golden opportunity slip away! Book your
                free demo class today and take that pivotal step towards a
                prosperous career in technology. Join Training Guru and unlock
                the door to endless possibilities in the world of IT. Your
                extraordinary future awaits!
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    
    </Box>
  );
};

export default DemoPage;
