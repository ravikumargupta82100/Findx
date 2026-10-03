import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  Snackbar,
  Alert
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { registerUser } from "../Apis/UserDetailsApi";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigates=useNavigate();
  const[message,setMessage]=useState("");
  const[openMessage,setOpenMessage]=useState(false);
  const[messageType,setMessageType]=useState("success");
const[userform,setUserform]=useState({
fullName:"",
email:"",
phoneNumber:"",
password:"",
confirmPassword:""



})
const HandlSubmit = () => {
 

  if (
    !userform.fullName ||
    !userform.email ||
    !userform.phoneNumber ||
    !userform.password ||
    !userform.confirmPassword
  ) {
    setMessage("Please fill all required fields.");
    setMessageType("error");
    setOpenMessage(true);
    return;
  }

  if (userform.password !== userform.confirmPassword) {
    setMessage("Password and confirm password should match!");
    setMessageType("error");
    setOpenMessage(true);
    return;
  }

  const payload = {
    fullName: userform.fullName,
    email: userform.email,
    phoneNumber: userform.phoneNumber,
    password: userform.password
  };

  registerUser(payload)
    .then((res) => {
      console.log("User Registered:", res.data);

      setMessage("Registration Successfully Completed!");
      setMessageType("success");
      setOpenMessage(true);
    })
    .catch((err) => {
      console.log("Registration Failed:", err);

     const errorMsg =
          err.response?.data?.message ||
          (typeof err.response?.data === "string" ? err.response.data : null) ||
          "Registration failed. Please try again.";

        setMessage(errorMsg);
        setMessageType("error");
        setOpenMessage(true);
    });
};
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            padding: 4,
            borderRadius: 3,
            boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          }}
        >
          {/* Logo */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
          >
            <SearchIcon
              sx={{
                color: "#0B5CFF",
                fontSize: 30,
              }}
            />

            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#071B3A",
              }}
            >
              Find<span style={{ color: "#0B5CFF" }}>X</span>
            </Typography>
          </Stack>

          {/* Heading */}
          <Typography
            variant="h5"
            sx={{
              marginTop: 4,
              fontWeight: "bold",
              color: "#071B3A",
            }}
          >
            Create Your Account
          </Typography>

          <Typography
            sx={{
              marginTop: 1,
              color: "#5B6B84",
            }}
          >
            Join FindX and help items find their way home.
          </Typography>

          {/* Form */}
          <Stack spacing={2.5} sx={{ marginTop: 4 }}>
            <TextField
              label="Full Name"
              placeholder="Enter your full name"
              fullWidth
              required
              value={userform.fullName}
              onChange={(e)=>setUserform({
                ...userform,
                fullName:e.target.value
              })}
              
            />

            <TextField
              label="Email"
              placeholder="Enter your email"
              type="email"
              fullWidth
              required
               value={userform.email}
              onChange={(e)=>setUserform({
                ...userform,
                email:e.target.value
              })}
            />

            <TextField
              label="Phone Number"
              placeholder="Enter your phone number"
              fullWidth
              required
               value={userform.phoneNumber}
              onChange={(e)=>setUserform({
                ...userform,
                phoneNumber:e.target.value
              })}
            />

            <TextField
              label="Password"
              placeholder="Create a password"
              type="password"
              fullWidth
              required
                 value={userform.password}
              onChange={(e)=>setUserform({
                ...userform,
                password:e.target.value
              })}
            />

            <TextField
              label="Confirm Password"
              placeholder="Confirm your password"
              type="password"
              fullWidth
              required
                 value={userform.confirmPassword}
              onChange={(e)=>setUserform({
                ...userform,
                confirmPassword:e.target.value
              })}
            />

            <Button
              variant="contained"
              type="button"
              fullWidth
              sx={{
                backgroundColor: "#0B5CFF",
                padding: "12px",
                borderRadius: "8px",
                fontWeight: "bold",
                textTransform: "none",
              }}


              onClick={HandlSubmit}
            >
              Create Account
            </Button>

            <Typography
              sx={{
                textAlign: "center",
                color: "#5B6B84",
                fontSize: "14px",
              }}
            >
              Already have an account?{" "}
              <span
                style={{
                  color: "#0B5CFF",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                
                onClick={()=>navigates("/login")}
              >
                Login
              </span>
            </Typography>
          </Stack>
        </Box>
      <Snackbar
          open={openMessage}
          autoHideDuration={3000}
          onClose={() => setOpenMessage(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Alert
            onClose={() => setOpenMessage(false)}
            severity={messageType}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      </Container>
  
    </Box>
  );
}

export default Register;