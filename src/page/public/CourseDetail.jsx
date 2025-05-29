import React from "react";
import { Box, Typography, CardMedia, Grid, IconButton } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import courses from "../../data/CourseData";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const courseId = parseInt(id, 10);
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Typography variant="h5">Course Not Found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 5, mt: 12, px: { xs: 2, sm: 4, md: 6, lg: 10 } }}>
      <IconButton
        onClick={() => navigate(-1)}
        sx={{
          mb: 3,
       //   color: "#52C8B2",
          display: "flex",
          alignItems: "center",
          "&:hover": { backgroundColor: "#f0f0f0" },
        }}
      >
        <ArrowBackIcon />
        <Typography
          variant="body1"
          ml={1}
          sx={{ display: { xs: "none", sm: "inline" } }}
        >
          Back to Courses
        </Typography>
      </IconButton>

      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} lg={8}>
          <Typography
            variant="h4"
            fontWeight="bold"
            //color="#52C8B2"
            gutterBottom
            sx={{
              lineHeight: 1.2,
              textShadow: "0px 2px 3px rgba(0,0,0,0.1)",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            {course.title}
          </Typography>

          <Box
            sx={{
              borderRadius: 0,
              overflow: "hidden",
              boxShadow: 3,
              mb: 4,
              "&:hover": {
                boxShadow: 6,
                transition: "box-shadow 0.3s ease-in-out",
              },
            }}
          >
            <CardMedia
              component="img"
              image={course.img}
              alt={course.title}
              sx={{
                width: "auto",
                height: { xs:50, sm: 100, md: 200 },
                objectFit: "cover",
              }}
            />
          </Box>

          <Typography
            variant="body1"
            color="text.primary"
            paragraph
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem" },
              lineHeight: 1.8,
              whiteSpace: "pre-line",
              mb: 3,
            }}
          >
            {course.description}
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Typography
              variant="caption"
              sx={{
                px: 2,
                py: 1,
                bgcolor: "#cdeee7",
                color: "#1b4e4b",
                borderRadius: 10,
                fontWeight: "bold",
              }}
            >
              {course.category}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CourseDetail;
