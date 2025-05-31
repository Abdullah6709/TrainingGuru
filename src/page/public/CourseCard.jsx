import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Import SVGs as URLs
import javaIcon from "../../assets/svg/java.svg";
import reactIcon from "../../assets/svg/rct.svg";
import mobileAppIcon from "../../assets/svg/mobileap.svg";
import pythonIcon from "../../assets/svg/python.svg";

const courses = [
  {
    title: "Master in Java Development",
    icon: javaIcon,
  },
  {
    title: "Master in React Development",
    icon: reactIcon,
  },
  {
    title: "Master in App Development",
    icon: mobileAppIcon,
  },
  {
    title: "Master in Python Development",
    icon: pythonIcon,
  },
];

const CourseCards = () => {
  const navigate = useNavigate();

  const handleSeeAllCourses = () => {
    navigate("/allcourses");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        py: 5,
        px: { xs: 2, sm: 3, md: 12, lg: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="center">
          {courses.map((course, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
                sx={{
                  height: 200,
                  textAlign: "center",
                  p: 1,
                  boxShadow: 2,
                  borderRadius: 2,
                  backgroundColor: "#fff",
                  "&:hover": {
                    transform: "scale(1.02)",
                    transition: "0.3s",
                  },
                }}
              >
                <CardContent>
                  <Avatar
                    sx={{
                      bgcolor: "#e3f2fd",
                      width: 50,
                      height: 50,
                      mx: "auto",
                      mb: 1.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "visible",
                    }}
                  >
                    <img
                      src={course.icon}
                      alt={`${course.title} icon`}
                      style={{ width: 24, height: 24 }}
                    />
                  </Avatar>
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
