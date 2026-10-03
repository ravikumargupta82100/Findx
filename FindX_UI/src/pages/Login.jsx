import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
  Snackbar,
  Alert
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userLogin } from "../Apis/UserDetailsApi";

function Login() {
    const navigates=useNavigate();
    const[message,setMessage]=useState("");
     const[openMessage,setOpenMessage]=useState(false);
     const[messageType,setMessageType]=useState("success");
const[userDetails,setUserDetails]=useState({
  email:"",
  password:""
});
const handleSubmit=()=>{
userLogin(userDetails).then((res)=>{

localStorage.setItem("token",res.data.token);
localStorage.setItem("fullname",res.data.fullname)
localStorage.setItem("email",res.data.email);
localStorage.setItem("id",res.data.userId);
  console.log(res.data);

  navigates("/home");

})
.catch((err)=>{
console.log("Login failed with error"+err.response.data.message)

})

}

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
            Welcome Back! 👋
          </Typography>

          <Typography
            sx={{
              marginTop: 1,
              color: "#5B6B84",
            }}
          >
            Login to your account
          </Typography>

          {/* Form */}
          <Stack spacing={2.5} sx={{ marginTop: 4 }}>
            <TextField
              label="Email or Phone Number"
              placeholder="Enter email or phone"
              fullWidth
              required
              value={userDetails.email}
              onChange={(e)=>setUserDetails({
                ...userDetails,
                email:e.target.value
              })}
            />

            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
                  value={userDetails.password}
              onChange={(e)=>setUserDetails({
                ...userDetails,
                password:e.target.value
              })}
            />

            <Typography
              sx={{
                textAlign: "right",
                color: "#0B5CFF",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </Typography>

            {/* Login button */}
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#0B5CFF",
                padding: "12px",
                borderRadius: "8px",
                fontWeight: "bold",
                textTransform: "none",
              }}
              onClick={handleSubmit}
            >
              Login
            </Button>

            {/* OR */}
            <Divider>OR</Divider>

            {/* Google */}
            <Button
              variant="outlined"
              fullWidth
              sx={{
                padding: "11px",
                borderRadius: "8px",
                textTransform: "none",
              }}
            >
              Continue with Google
            </Button>

            {/* Register */}
            <Typography
              sx={{
                textAlign: "center",
                color: "#5B6B84",
                fontSize: "14px",
              }}
            >
              Don't have an account?{" "}
              <span
                style={{
                  color: "#0B5CFF",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={()=>navigates("/register")}
              >
                Register
              </span>
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;