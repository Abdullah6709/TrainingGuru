import React from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import Nav from "../assets/images/navbar/tg_logo.png";

const Footer = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  // Quick Links data
  const quickLinks = [
    { text: "Home", path: "/" },
    { text: "Courses", path: "/allcourses" },
    { text: "Scholarships", path: "/getscholarship" },
    { text: "Contact", path: "/contact" },
  ];

  // Popular Courses data
  const popularCourses = [
    { text: "Full Stack Development", path: "#" },
    { text: "Python with AI", path: "#" },
    { text: "React & Node.js", path: "#" },
    { text: "MERN Stack", path: "#" },
  ];

  // Social Media links
  const socialMedia = [
    { icon: Facebook, url: "https://facebook.com" },
    { icon: Twitter, url: "https://twitter.com" },
    { icon: Instagram, url: "https://instagram.com" },
    { icon: LinkedIn, url: "https://linkedin.com" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0d6efd",
        color: "#fff",
       // mt: "auto",
        pt: 6,
        pb: 4,
        px: { xs: 3, md: 10 },
        // mt:"20px "
      }}
    >
      <Grid container spacing={5}>
        {/* About Section */}
        <Grid item xs={12} md={2.4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            About Us
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
            We provide educational opportunities and scholarships to <br />
            empower learners and build a brighter future.
          </Typography>

          <Box
            onClick={handleLogoClick}
            display="flex"
            alignItems="center"
            mt={3}
            gap={2}
            sx={{ cursor: "pointer" }}
          >
            <img src={Nav} alt="Logo" style={{ height: 60 }} />
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={2.4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {quickLinks.map((link) => (
              <Link
                key={link.text}
                component={RouterLink}
                to={link.path}
                color="inherit"
                underline="hover"
                sx={{
                  transition: "color 0.3s",
                  "&:hover": {
                    color: "#ffc107",
                  },
                }}
              >
                {link.text}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Follow Us */}
        <Grid item xs={12} md={2.4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {socialMedia.map((social, index) => (
              <IconButton
                key={index}
                color="inherit"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                <social.icon fontSize="small" />
              </IconButton>
            ))}
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={2.4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Contact Info
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
            📍 A-45, Sector 2, Noida, UP
            <br />
            📞 +91 1204099066
            <br />
             
            📞 +91 8178898506
            <br />
            ✉️ info@trainingguru.in
          </Typography>
        </Grid>

        {/* Popular Courses */}
        <Grid item xs={12} md={2.4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Popular Courses
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {popularCourses.map((course) => (
              <Link
                key={course.text}
                component={RouterLink}
                to={course.path}
                color="inherit"
                underline="hover"
                sx={{
                  transition: "color 0.3s",
                  "&:hover": {
                    color: "#ffc107",
                  },
                }}
              >
                {course.text}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.2)", my: 4 }} />

      {/* Footer Bottom */}
      <Box textAlign="center">
        <Typography variant="body2" sx={{ fontSize: 13 }}>
          © {new Date().getFullYear()} Training Guru. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;