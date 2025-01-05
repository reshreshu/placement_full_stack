import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 5,
        px: 2,
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ mb: 5 }}>
        <Typography variant="h2" color="primary" gutterBottom>
          Welcome to Expense Splitter
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Split your expenses easily with friends and family!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <Box
          sx={{
            p: 3,
            border: "1px solid #ddd",
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: "#ffffff",
            textAlign: "center",
            width: "300px",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Click Signup to create your account
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/SignUp"
          >
            Sign Up
          </Button>
        </Box>
        <Box
          sx={{
            p: 3,
            border: "1px solid #ddd",
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: "#ffffff",
            textAlign: "center",
            width: "300px",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Already have an account? Login here
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/Login"
          >
            Login
          </Button>
        </Box>
      </Box>
      <Typography sx={{ mt: 5 }} variant="body2" color="textSecondary">
        Expense Splitter &copy; 2025
      </Typography>
    </Box>
  );
};

export default Home;
