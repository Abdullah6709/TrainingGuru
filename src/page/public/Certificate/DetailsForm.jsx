import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Grid,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const DetailsForm = () => {
  const formik = useFormik({
    initialValues: {
      enrollment: "",
      email: "",
    },
    validationSchema: Yup.object({
      enrollment: Yup.string().required("Enrollment number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f0f0f0",
          mb: 5,
          mt: 5,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Enter your details
        </Typography>

        <Box component="form" onSubmit={formik.handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                id="enrollment"
                name="enrollment"
                label="Enrollment Number"
                value={formik.values.enrollment}
                onChange={formik.handleChange}
                error={
                  formik.touched.enrollment && Boolean(formik.errors.enrollment)
                }
                helperText={
                  formik.touched.enrollment && formik.errors.enrollment
                }
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
          </Grid>

          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default DetailsForm;
