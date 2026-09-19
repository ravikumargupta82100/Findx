import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutlineOutlined"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useNavigate } from "react-router-dom";

function Home() {
const Navigate=useNavigate();
   
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F8FAFF",
      }}
    >
      <Container maxWidth="lg" sx={{ paddingY: 4 }}>

        {/* Top Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Stack direction="row" spacing={1} alignItems="center">
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
              <SearchIcon sx={{ color: "white" }} />
            </Box>

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

          {/* Notification */}
          <Button
            sx={{
              minWidth: 45,
              width: 45,
              height: 45,
              borderRadius: "50%",
              backgroundColor: "white",
              boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
            }}
          >
            <NotificationsNoneIcon sx={{ color: "#071B3A" }} />
          </Button>
        </Box>

        {/* Welcome */}
        <Box sx={{ marginTop: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#071B3A",
            }}
          >
            Hello, Welcome 👋
          </Typography>

          <Typography
            sx={{
              marginTop: 1,
              color: "#5B6B84",
            }}
          >
            Let's help lost items find their way home.
          </Typography>
        </Box>

        {/* Search */}
        <Box
          sx={{
            marginTop: 4,
            backgroundColor: "white",
            borderRadius: 2,
            padding: 2,
            display: "flex",
            alignItems: "center",
            boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
          }}
        >
          <SearchIcon sx={{ color: "#5B6B84", marginRight: 1 }} />

          <Typography sx={{ color: "#8A97AA" }}>
            Search for lost or found items...
          </Typography>
        </Box>

        {/* Main Actions */}
        <Grid container spacing={3} sx={{ marginTop: 3 }}>

          {/* Lost */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#EAF2FF",
                padding: 4,
                borderRadius: 3,
              }}
            >
              <Stack spacing={2}>

                <Box
                  sx={{
                    width: 55,
                    height: 55,
                    borderRadius: 2,
                    backgroundColor: "#0B5CFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SearchIcon sx={{ color: "white", fontSize: 30 }} />
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#071B3A",
                  }}
                >
                  Lost Something?
                </Typography>

                <Typography sx={{ color: "#5B6B84" }}>
                  Report your lost item and let FindX help you find it.
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    width: "fit-content",
                    backgroundColor: "#0B5CFF",
                    textTransform: "none",
                    borderRadius: 2,
                    paddingX: 3,
                  }}
               onClick={()=>Navigate("/report-lost")} >
                  Report Lost Item
                </Button>

              </Stack>
            </Box>
          </Grid>

          {/* Found */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "white",
                padding: 4,
                borderRadius: 3,
                boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
              }}
            >
              <Stack spacing={2}>

                <Box
                  sx={{
                    width: 55,
                    height: 55,
                    borderRadius: 2,
                    backgroundColor: "#071B3A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AddCircleOutlineIcon
                    sx={{ color: "white", fontSize: 30 }}
                  />
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#071B3A",
                  }}
                >
                  Found Something?
                </Typography>

                <Typography sx={{ color: "#5B6B84" }}>
                  Help someone recover their lost item.
                </Typography>

                <Button
                  variant="outlined"
                  sx={{
                    width: "fit-content",
                    color: "#0B5CFF",
                    borderColor: "#0B5CFF",
                    textTransform: "none",
                    borderRadius: 2,
                    paddingX: 3,
                  }}
                 onClick={()=>Navigate("/report-found")} >
                  Report Found Item
                </Button>

              </Stack>
            </Box>
          </Grid>

        </Grid>

        {/* Nearby Section */}
        <Box sx={{ marginTop: 5 }}>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <LocationOnOutlinedIcon sx={{ color: "#0B5CFF" }} />

            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#071B3A",
              }}
            >
              Items Near You
            </Typography>
          </Stack>

          <Box
            sx={{
              marginTop: 2,
              backgroundColor: "white",
              padding: 3,
              borderRadius: 3,
              boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
            }}
          >
            <Typography
              sx={{
                color: "#5B6B84",
                textAlign: "center",
              }}
            >
              No nearby reports yet.
            </Typography>
          </Box>

        </Box>

      </Container>
    </Box>
  );
}

export default Home;