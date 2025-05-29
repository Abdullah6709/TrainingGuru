import {
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import MYIMG from "../../assets/images/banner/bnr.png";

const Banner = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 4,
        mt: 10,
        py: 5,
        px: { xs: 2, sm: 3, md: 12, lg: 12 },
        backgroundColor: "#0d6efd",
        color: "white", // Make all child text white
      }}
    >
      <Grid container alignItems="center" spacing={8}>
        {/* Text Content on the Left */}
        <Grid size={{xs:12, md:6}}>
          <Typography
            component="h1"
            gutterBottom
            sx={{
              fontSize: {
                xs: "2rem", // small screens
                sm: "2.5rem",
                md: "3rem",
                lg: "3rem",
              },
              fontWeight: "bold",
              lineHeight: 1.2,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Training Guru is a <br />
            community <br />
            for creative people.
          </Typography>

          <Typography variant="h6" gutterBottom color="#ffffff80">
            Learn from expert professionals and <br />
            join the largest online community for creatives.
          </Typography>

          {/* Search Bar with Search Icon */}
          <Box sx={{ mt: 3 }}>
            <TextField
              fullWidth
              variant="outlined"
             // label="What courses do you need?"
              placeholder="What courses do you need?"
              size="medium"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "white" }} />
                  </InputAdornment>
                ),
                style: { color: "white" }, // Input text color
              }}
              InputLabelProps={{
                style: { color: "white" }, // Label color
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
              }}
            />
          </Box>
        </Grid>

        {/* Image on the Right */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={MYIMG}
            alt="Banner"
            sx={{
              width: "100%",
              maxWidth: "500px",
              display: "block",
              ml: "auto",
              border: "1px 2px 3px 4px solid white",
              borderRadius: "8px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
