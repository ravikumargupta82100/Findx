import { Box, Button, Container, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import KeyIcon from "@mui/icons-material/Key";
import { useNavigate } from "react-router-dom";


function Welcome() {
    const navigate=useNavigate();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: "90vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* LEFT SIDE */}
          <Box
            sx={{
              width: "50%",
              padding: 4,
            }}
          >
            {/* Logo */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  backgroundColor: "#0B5CFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SearchIcon sx={{ color: "white", fontSize: 28 }} />
              </Box>

              <Typography
                variant="h4"
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
              variant="h2"
              sx={{
                marginTop: 6,
                fontWeight: "bold",
                color: "#071B3A",
                lineHeight: 1.1,
              }}
            >
              Lost today,
              <br />
              found tomorrow.
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                marginTop: 3,
                fontSize: "18px",
                color: "#5B6B84",
                maxWidth: 500,
                lineHeight: 1.7,
              }}
            >
              A smart way to report lost items, discover found items,
              and connect with the right person.
            </Typography>

            {/* Buttons */}
            <Stack
              direction="row"
              spacing={2}
              sx={{
                marginTop: 4,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0B5CFF",
                  padding: "12px 30px",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  textTransform: "none",
                  fontSize: "16px",
                }}
                onClick={()=>navigate("/register")}
              >
                Get Started
              </Button>

              <Button
                variant="outlined"
                sx={{
                  padding: "12px 30px",
                  borderRadius: "10px",
                  borderColor: "#0B5CFF",
                  color: "#0B5CFF",
                  fontWeight: "bold",
                  textTransform: "none",
                  fontSize: "16px",
                }}
                onClick={()=>navigate("/login")}
              >
                Login
              </Button>
            </Stack>

            {/* Small features */}
            <Stack
              direction="row"
              spacing={3}
              sx={{
                marginTop: 6,
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOnIcon sx={{ color: "#0B5CFF" }} />
                <Typography fontSize="14px">
                  Location Based
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <SearchIcon sx={{ color: "#0B5CFF" }} />
                <Typography fontSize="14px">
                  AI Matching
                </Typography>
               
              </Stack>
            </Stack>
          </Box>

          {/* RIGHT SIDE */}
          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Illustration area */}
            <Box
              sx={{
                width: 420,
                height: 420,
                borderRadius: "50%",
                backgroundColor: "#EAF2FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {/* Search circle */}
              <Box
                sx={{
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  border: "18px solid #0B5CFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
              >
                <SearchIcon
                  sx={{
                    fontSize: 100,
                    color: "#0B5CFF",
                  }}
                />
              </Box>

              {/* Location icon */}
              <Box
                sx={{
                  position: "absolute",
                  top: 55,
                  right: 55,
                  width: 65,
                  height: 65,
                  borderRadius: "50%",
                  backgroundColor: "#0B5CFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LocationOnIcon
                  sx={{
                    color: "white",
                    fontSize: 38,
                  }}
                />
              </Box>

              {/* Phone */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 55,
                  left: 65,
                  width: 65,
                  height: 100,
                  borderRadius: "12px",
                  backgroundColor: "#071B3A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: "rotate(-12deg)",
                }}
              >
                <PhoneAndroidIcon
                  sx={{
                    color: "white",
                    fontSize: 42,
                  }}
                />
              </Box>

              {/* Key */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 70,
                  right: 70,
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                }}
              >
                <KeyIcon
                  sx={{
                    color: "#0B5CFF",
                    fontSize: 35,
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Welcome;