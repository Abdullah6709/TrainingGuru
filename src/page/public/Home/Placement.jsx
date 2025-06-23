import { Box, Typography } from "@mui/material";
import React from "react";
import place from '../../../assets/images/client/process.webp';

const Placement = () => {
  return (
    <>
      <Box textAlign="center" mt={3}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Placement Process
        </Typography>
      </Box>
      <Box mt={-2}>
        <Box
          component="img"
          src={place}
          alt="Placement"
          sx={{
            display: "block",
            mx: "auto", 
            width: "100%",
            maxWidth: "1200px", 
            height: "auto",
          }}
        />
      </Box>
    </>
  );
};

export default Placement;
