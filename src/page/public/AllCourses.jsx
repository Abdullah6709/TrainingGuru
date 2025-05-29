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
} from "@mui/material";
import courses from "../../data/CourseData";
import { useNavigate } from "react-router-dom";

const categories = [
  "All Courses",
  "Java Courses",
  "Website Development",
  "Python Courses",
  "Mobile Application Development",
  "PHP Full-Stack Development",
];

const TrendingCoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const navigate = useNavigate();

  const filteredCourses =
    selectedCategory === "All Courses"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <Box sx={{ px: 2, mx: { xs: 1, sm: 2, md: 10 }, mt: 13 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 2 }}>
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

        <Grid size={{ xs: 12, md: 10 }}>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Trending Courses
          </Typography>
          <Grid container spacing={2}>
            {filteredCourses.map((course) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={course.id}>
                <Card
                  elevation={3}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius:0
                  }}
                >
                  {/* Image at top */}
                  <Box
                    component="img"
                    src={course.img}
                    alt={course.title}
                    sx={{
                      width: "100%",
                      height: 160,
                       objectFit: "fix",
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    }}
                  />

                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      gutterBottom
                    >
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {course.description}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ mt: "auto" }}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => navigate(`/coursedetail/${course.id}`)}
                    >
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
