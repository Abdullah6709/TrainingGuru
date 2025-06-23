import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Import your logo images
import logo1 from '../../../assets/images/client/img1.png';
import logo2 from '../../../assets/images/client/img2.png';
import logo3 from '../../../assets/images/client/img3.png';
import logo4 from '../../../assets/images/client/img4.png';
import logo5 from '../../../assets/images/client/img5.png';
import logo6 from '../../../assets/images/client/img6.png';

const OurClient = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const clients = [
    { id: 1, name: "Client 1", logo: logo1 },
    { id: 2, name: "Client 2", logo: logo2 },
    { id: 3, name: "Client 3", logo: logo3 },
    { id: 4, name: "Client 4", logo: logo4 },
    { id: 5, name: "Client 5", logo: logo5 },
    { id: 6, name: "Client 6", logo: logo6 },
  ];

  // duplicated array to allow seamless scrolling
  const doubled = [...clients, ...clients];

  // Common sx for each row container
  const rowContainerSx = {
    display: "flex",
    overflow: "hidden",
    position: "relative",
    width: "100%",
    "&:hover .client-row": {
      animationPlayState: "paused",
    },
    mb: 2, // space between rows
  };

  // Common sx for the animated inner box
  const rowInnerSx = {
    display: "flex",
    animation: "scroll 20s linear infinite",
    "@keyframes scroll": {
      "0%": { transform: "translateX(0)" },
      "100%": { transform: "translateX(-50%)" },
    },
  };

  const logoBoxSx = {
    flexShrink: 0,
    px: { xs: 2, sm: 4 },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: isMobile ? 120 : isTablet ? 160 : 180,
    height: isMobile ? 40 : isTablet ? 40 : 60,
    transition: "all 0.3s ease",
    "& img": {
      maxWidth: "80%",
      maxHeight: "80%",
      opacity: 0.8,
      transition: "all 0.3s ease",
      objectFit: "contain",
    },
    "&:hover": {
      transform: "translateY(-5px)",
      "& img": {
        filter: "grayscale(0%)",
        opacity: 1,
        transform: "scale(1.1)",
      },
    },
  };

  return (
    <>
      <Box textAlign="center" py={2}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our Clients
        </Typography>
      </Box>
      <Box
        py={2}
        sx={{
          background: "rgb(8, 13, 73)",
          position: "relative",
        }}
      >
        {/* First row: scroll left */}
        <Box sx={rowContainerSx}>
          <Box className="client-row" sx={rowInnerSx}>
            {doubled.map((client, idx) => (
              <Box key={client.id + "-" + idx} sx={logoBoxSx}>
                <img src={client.logo} alt={client.name} loading="lazy" />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Second row: scroll right (reverse) */}
        <Box sx={rowContainerSx}>
          <Box
            className="client-row"
            sx={{
              ...rowInnerSx,
              animationDirection: "reverse",
            }}
          >
            {doubled.map((client, idx) => (
              <Box key={client.id + "-" + idx + "-rev"} sx={logoBoxSx}>
                <img src={client.logo} alt={client.name} loading="lazy" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OurClient;
