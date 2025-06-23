import {
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment, 
} from "@mui/material";  
import SearchIcon from "@mui/icons-material/Search";
import React from "react";           
import MYIMG from "../../../assets/images/banner/bnr copy.png";     

const Banner = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 4,
        mt: 0,
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
                xs: "1rem", // small screens
                sm: "1.5rem",
                md: "2rem",
                lg: "3rem",
              },
              fontWeight: "bold",
              lineHeight: 1.2,
              mt: 2,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Training Guru is a <br />
            community <br />
            for creative people.
          </Typography>

          <Typography variant="body" color="#ffffff80" mt={2} gutterBottom>
            Learn from expert professionals and <br />
            join the largest online community for creatives.
          </Typography>

          {/* Search Bar with Search Icon */}
         <Box sx={{ mt: 5, backgroundColor: "#fff" }}>
  <TextField
    fullWidth
    variant="outlined"
    label="What courses do you need?"
    placeholder="Search courses..."
    size="medium"
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <SearchIcon
            sx={{
              color: "white",
              backgroundColor: "#157347",
              padding: "4px",
              borderRadius: "5px",
              border: "1px solid #157347",
              width: "60px",
              height: "45px",
            }}
          />
        </InputAdornment>
      ),
    }}
    InputLabelProps={{
      style: { color: "black" }, 
    }}
    sx={{
      "& input": {
        color: "black", 
      },
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
              // border: "1px 2px 3px 4px solid white",
              // borderRadius: "8px",
              // boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              mt: 7,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;


