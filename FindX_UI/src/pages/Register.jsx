import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

function Register() {
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
            />

            <TextField
              label="Email"
              placeholder="Enter your email"
              type="email"
              fullWidth
            />

            <TextField
              label="Phone Number"
              placeholder="Enter your phone number"
              fullWidth
            />

            <TextField
              label="Password"
              placeholder="Create a password"
              type="password"
              fullWidth
            />

            <TextField
              label="Confirm Password"
              placeholder="Confirm your password"
              type="password"
              fullWidth
            />

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
              >
                Login
              </span>
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Register;