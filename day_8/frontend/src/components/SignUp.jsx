import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async (event) => {
    event.preventDefault();
    const req = await axios.post("http://localhost:3001/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    console.log(req);
    navigate("/login");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h4" color="primary" gutterBottom>
        Welcome to SignUp Page
      </Typography>
      <Box
        component="form"
        onSubmit={signup}
        sx={{
          width: "400px",
          p: 3,
          backgroundColor: "#ffffff",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <TextField
          fullWidth
          label="First Name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Last Name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default SignUpForm;