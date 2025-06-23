import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Card,
  CardContent,
  CardActions,
  styled,
} from "@mui/material";
import courses from "../../../data/CourseData";
import { useNavigate } from "react-router-dom";

const createSlug = (title) =>
  title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

const categories = [
  "All Courses",
  "Java Courses",
  "Website Development",
  "Python Courses",
  "Mobile Application Development",
  "PHP Full-Stack Development",
];

// Styled component for the card with hover effects
const HoverCard = styled(Card)({
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: 0,
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
  },
});

// Styled component for the image container with overlay
const ImageContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: 160,
  overflow: "hidden",
  "&:hover .image-overlay": {
    opacity: 0.7,
  },
  "&:hover img": {
    transform: "scale(1.1)",
  },
});

const CourseImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.5s ease",
});

const ImageOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  opacity: 0,
  transition: "opacity 0.3s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "1.2rem",
  fontWeight: "bold",
});

const AllCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const navigate = useNavigate();

  const filteredCourses =
    selectedCategory === "All Courses"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <Box sx={{ px: 2, mx: { xs: 1, sm: 2, md: 10 }, mt: 13 }}>
      <Grid container spacing={2}>
        <Grid size={{xs:12, md:2}} >
          <Paper
            elevation={3}
            sx={{ p: 2, position: { md: "sticky" }, top: { md: 104 } }}
          >
            <Typography variant="overline" color="text.secondary">
              Courses
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              {selectedCategory}
            </Typography>
            <RadioGroup
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <FormControlLabel
                  key={cat}
                  value={cat}
                  control={<Radio />}
                  label={cat}
                />
              ))}
            </RadioGroup>
          </Paper>
        </Grid>

        <Grid size={{xs:12, md:10}}>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            TREADING COURSES
          </Typography>
          <Grid container spacing={3}>
            {filteredCourses.map((course) => (
              <Grid size={{xs:12,sm:6, md:4}}  key={course.id}>
                <HoverCard elevation={3}>
                  <ImageContainer>
                    <CourseImage src={course.img} alt={course.title} />
                    {/* <ImageOverlay className="image-overlay">
                     {course.title}
                    </ImageOverlay> */}
                  </ImageContainer>

                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      gutterBottom
                    >
                      {course.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {course.description}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ mt: "auto" }}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: "#1976d2",
                        "&:hover": {
                          backgroundColor: "#1565c0",
                        },
                      }}
                      onClick={() =>
                        navigate(
                          `/allcourses/coursedetail/${createSlug(course.title)}`
                        )
                      }
                    >
                      View Details
                    </Button>
                  </CardActions>
                </HoverCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AllCourses;