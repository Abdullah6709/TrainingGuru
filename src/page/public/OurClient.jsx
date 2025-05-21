import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Import your logo images
import logo1 from '../../assets/images/client/img1.png';
import logo2 from '../../assets/images/client/img2.png';
import logo3 from '../../assets/images/client/img3.png';
import logo4 from '../../assets/images/client/img4.png';
import logo5 from '../../assets/images/client/img5.png';
import logo6 from '../../assets/images/client/img6.png';

const OurClient = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Client logos data with unique IDs
  const clients = [
    { id: 1, name: "Client 1", logo: logo1 },
    { id: 2, name: "Client 2", logo: logo2 },
    { id: 3, name: "Client 3", logo: logo3 },
    { id: 4, name: "Client 4", logo: logo4 },
    { id: 5, name: "Client 5", logo: logo5 },
    { id: 6, name: "Client 6", logo: logo6 },
  ];

  return (
<>
     <Box textAlign="center" py={5}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Our Clients
              </Typography>
              </Box>
    <Box
      py={2}
      sx={{
        background: "linear-gradient(to bottom,rgb(8, 13, 73),rgb(8,13,73))",
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: { xs: "3px", sm: "1px" },
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          maxWidth: "1400px",
          mx: "auto",
          py: 1,
          "&:before, &:after": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            width: { xs: "50px", sm: "100px" },
            zIndex: 2,
          },
          "&:before": {
            left: 0,
            background: "linear-gradient(to right, rgb(8,13,73) 0%, rgba(8,13,73) 100%)",
          },
          "&:after": {
            right: 0,
            background: "linear-gradient(to left, rgb(8,13,73) 0%, rgba(8,13,73) 100%)",
          },
        }}
      >

       
        <Box
          sx={{
            display: "flex",
            overflow: "hidden",
            position: "relative",
            width: "100%",
            "&:hover": {
              "& .client-logo": {
                animationPlayState: "paused",
              },
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              animation: "scroll 20s linear infinite",
              "@keyframes scroll": {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" },
              },
            }}
            className="client-logo"
          >
            {/* First set */}
            {[...clients, ...clients].map((client, index) => (
              <Box
                key={`${client.id}-${index}`}
                sx={{
                  flexShrink: 0,
                  px: { xs: 2, sm: 4 }, // Adjust padding for mobile and tablet
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: isMobile ? 120 : isTablet ? 160 : 180, // Responsively adjust width
                  height: isMobile ? 80 : isTablet ? 100 : 120, // Adjust height for mobile/tablet
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
                }}
              >
                <img src={client.logo} alt={client.name} loading="lazy" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  );
};


export default OurClient;
