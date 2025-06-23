import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Chip,
  Divider,
  useTheme,
  styled,
  Fade,
  Grow,
  Container,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CourseData from "../../../data/CourseData";

const createSlug = (title) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

// Styled Components
const AnimatedCard = styled(Card)(({ theme }) => ({
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[10],
  },
}));

const GradientButton = styled(Button)({
  background: "linear-gradient(45deg, #1976d2 0%, #2196f3 100%)",
  color: "white",
  fontWeight: "bold",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
});

const FeatureListItem = styled(ListItem)(({ theme }) => ({
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
  },
}));

export default function CourseDetailPage() {
  const { slug } = useParams();
  const course = CourseData.find((course) => createSlug(course.title) === slug);
  const theme = useTheme();

  if (!course) {
    return (
      <Box
        sx={{ maxWidth: 800, mx: "auto", p: 2, textAlign: "center", mt: 15 }}
      >
        <Typography variant="h5" color="error">
          Course not found
        </Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 10, md: 13 } }}>
      {/* Header with Animation */}
      <Fade in timeout={500}>
        <Typography
          variant="h2"
          fontWeight={800}
          textAlign="center"
          color="primary"
          gutterBottom
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
            },
            mb: 4,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {course.title}
        </Typography>
      </Fade>

      {/* Main Course Card */}
    <Grow in timeout={300}>
  <AnimatedCard
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      mb: 6,
      borderRadius: 0,
      overflow: "hidden",
      boxShadow: 6,
    }}
  >
    {/* Image Section */}
    <Box
      sx={{
        width: { xs: "100%", md: 400 },
        height: { xs: 250, md: "auto" },
        flexShrink: 0,
      }}
    >
      <CardMedia
        component="img"
        image={course.img}
        alt={course.title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </Box>

    {/* Content Section */}
    <Box sx={{ flex: 1, p: { xs: 2, md: 4 } }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, flexWrap: "wrap", gap: 1 }}>
          <Chip
            label={course.category}
            color="primary"
            sx={{
              fontWeight: 600,
              fontSize: "0.9rem",
              px: 1.5,
              py: 0.5,
            }}
          />
          <Chip
            label={
              course.title.includes("Core")
                ? "Beginner"
                : course.title.includes("Advance")
                ? "Advanced"
                : "Intermediate"
            }
            color="secondary"
            sx={{
              fontWeight: 600,
              fontSize: "0.9rem",
              px: 1.5,
              py: 0.5,
            }}
          />
        </Box>

        <Typography
          variant="h5"
          fontWeight={700}
          gutterBottom
          sx={{ mb: 2 }}
        >
          {course.title}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 4,
            fontSize: { xs: "1rem", md: "1.1rem" },
            lineHeight: 1.7,
          }}
        >
          {course.description}
        </Typography>

        <GradientButton
          variant="contained"
          size="large"
          fullWidth
          sx={{
            borderRadius: 2,
            py: 1.5,
            fontSize: "1rem",
          }}
        >
          Enroll Now – Only ₹{course.price || "4999"}
        </GradientButton>
      </CardContent>
    </Box>
  </AnimatedCard>
</Grow>


      {/* About This Course */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{
            mb: 3,
            position: "relative",
            "&:after": {
              content: '""',
              display: "block",
              width: "80px",
              height: "4px",
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: 2,
              mt: 1,
            },
          }}
        >
          About This Course
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            textAlign: "justify",
          }}
        >
          {course.fulldesc}
        </Typography>
      </Box>

      {/* What You'll Learn */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{
            mb: 3,
            position: "relative",
            "&:after": {
              content: '""',
              display: "block",
              width: "80px",
              height: "4px",
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: 2,
              mt: 1,
            },
          }}
        >
          What You'll Learn
        </Typography>
        <List>
          {course.learningOutcomes.map((text, index) => (
            <Grow in timeout={(index + 1) * 200} key={index}>
              <FeatureListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "1.1rem",
                      fontWeight: 500,
                    },
                  }}
                />
              </FeatureListItem>
            </Grow>
          ))}
        </List>
      </Box>

      {/* Course Details */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{
            mb: 3,
            position: "relative",
            "&:after": {
              content: '""',
              display: "block",
              width: "80px",
              height: "4px",
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: 2,
              mt: 1,
            },
          }}
        >
          Course Details
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 3,
          }}
        >
          <AnimatedCard sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Course Information
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemText
                  primary="Category"
                  secondary={course.category}
                  secondaryTypographyProps={{ sx: { fontWeight: 500 } }}
                />
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemText
                  primary="Skill Level"
                  secondary={
                    course.title.includes("Core")
                      ? "Beginner"
                      : course.title.includes("Advance")
                      ? "Advanced"
                      : "Intermediate"
                  }
                  secondaryTypographyProps={{ sx: { fontWeight: 500 } }}
                />
              </ListItem>
            </List>
          </AnimatedCard>

          <AnimatedCard sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              What's Included
            </Typography>
            <List>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Lifetime Access" />
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Certificate of Completion" />
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Downloadable Resources" />
              </ListItem>
            </List>
          </AnimatedCard>
        </Box>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          textAlign: "center",
          mt: 8,
          mb: 4,
          background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`,
          borderRadius: 2,
          p: { xs: 3, md: 5 },
          boxShadow: theme.shadows[4],
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{
            color: "white",
            mb: 3,
          }}
        >
          Ready to Start Learning?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.9)",
            mb: 4,
            fontSize: "1.1rem",
            maxWidth: 700,
            mx: "auto",
          }}
        >
          Join thousands of students who have transformed their careers with
          this course.
        </Typography>
        <GradientButton
          variant="contained"
          size="large"
          sx={{
            px: 6,
            py: 2,
            borderRadius: 2,
            fontSize: "1.1rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
            },
          }}
        >
          Enroll Now - Limited Time Offer
        </GradientButton>
      </Box>
    </Container>
  );
}
