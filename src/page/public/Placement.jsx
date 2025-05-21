import { Box, Typography } from "@mui/material";
import React from "react";
import place from '../../assets/images/client/process.webp';

const Placement = () => {
  return (
    <>
      <Box textAlign="center" mt={3}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Placement Process
        </Typography>
      </Box>
      <Box
        component="img"
        src={place}
        alt="Placement"
        sx={{
          width: "100%",
          height:"auto"
        }}
      ></Box>
    </>
  );
};

export default Placement;
