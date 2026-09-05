import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function MyReports() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F8FAFF",
        paddingY: 4,
      }}
    >
      <Container maxWidth="md">

        {/* Header */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <Button
            sx={{
              minWidth: 40,
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          >
            <ArrowBackIcon sx={{ color: "#071B3A" }} />
          </Button>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#071B3A",
            }}
          >
            My Reports
          </Typography>
        </Stack>

        {/* Heading */}
        <Box sx={{ marginTop: 5 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#071B3A",
            }}
          >
            Your Reports
          </Typography>

          <Typography
            sx={{
              marginTop: 1,
              color: "#5B6B84",
            }}
          >
            Track the items you have reported.
          </Typography>
        </Box>

        {/* Filter Buttons */}
        <Stack
          direction="row"
          spacing={2}
          sx={{ marginTop: 4 }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0B5CFF",
              borderRadius: 5,
              textTransform: "none",
            }}
          >
            All
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderRadius: 5,
              textTransform: "none",
            }}
          >
            Lost
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderRadius: 5,
              textTransform: "none",
            }}
          >
            Found
          </Button>
        </Stack>

        {/* Report 1 */}
        <Box
          sx={{
            marginTop: 4,
            backgroundColor: "white",
            padding: 3,
            borderRadius: 3,
            boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
          >

            {/* Image */}
            <Box
              sx={{
                width: { xs: "100%", sm: 140 },
                height: 140,
                borderRadius: 2,
                backgroundColor: "#EAF2FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SearchIcon
                sx={{
                  fontSize: 60,
                  color: "#0B5CFF",
                }}
              />
            </Box>

            {/* Details */}
            <Box sx={{ flex: 1 }}>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#071B3A",
                  }}
                >
                  iPhone 15
                </Typography>

                <Box
                  sx={{
                    backgroundColor: "#EAF2FF",
                    paddingX: 1.5,
                    paddingY: 0.5,
                    borderRadius: 5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#0B5CFF",
                      fontWeight: "bold",
                    }}
                  >
                    LOST
                  </Typography>
                </Box>
              </Stack>

              <Typography
                sx={{
                  marginTop: 1,
                  color: "#5B6B84",
                }}
              >
                Black iPhone with transparent case
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ marginTop: 2 }}
              >
                <LocationOnOutlinedIcon
                  sx={{
                    fontSize: 20,
                    color: "#0B5CFF",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#5B6B84",
                  }}
                >
                  Bangalore Metro Station
                </Typography>
              </Stack>

              <Typography
                sx={{
                  marginTop: 1,
                  fontSize: 13,
                  color: "#8A97AA",
                }}
              >
                Reported 2 September 2026
              </Typography>

              <Button
                variant="outlined"
                sx={{
                  marginTop: 2,
                  textTransform: "none",
                  borderColor: "#0B5CFF",
                  color: "#0B5CFF",
                }}
              >
                View Report
              </Button>

            </Box>
          </Stack>
        </Box>

        {/* Report 2 */}
        <Box
          sx={{
            marginTop: 3,
            backgroundColor: "white",
            padding: 3,
            borderRadius: 3,
            boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
          >

            {/* Image */}
            <Box
              sx={{
                width: { xs: "100%", sm: 140 },
                height: 140,
                borderRadius: 2,
                backgroundColor: "#EAF2FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SearchIcon
                sx={{
                  fontSize: 60,
                  color: "#0B5CFF",
                }}
              />
            </Box>

            {/* Details */}
            <Box sx={{ flex: 1 }}>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#071B3A",
                  }}
                >
                  Black Wallet
                </Typography>

                <Box
                  sx={{
                    backgroundColor: "#E8F7EE",
                    paddingX: 1.5,
                    paddingY: 0.5,
                    borderRadius: 5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#16A34A",
                      fontWeight: "bold",
                    }}
                  >
                    FOUND
                  </Typography>
                </Box>
              </Stack>

              <Typography
                sx={{
                  marginTop: 1,
                  color: "#5B6B84",
                }}
              >
                Black leather wallet
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ marginTop: 2 }}
              >
                <LocationOnOutlinedIcon
                  sx={{
                    fontSize: 20,
                    color: "#0B5CFF",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#5B6B84",
                  }}
                >
                  Bangalore
                </Typography>
              </Stack>

              <Typography
                sx={{
                  marginTop: 1,
                  fontSize: 13,
                  color: "#8A97AA",
                }}
              >
                Reported 1 September 2026
              </Typography>

              <Button
                variant="outlined"
                sx={{
                  marginTop: 2,
                  textTransform: "none",
                  borderColor: "#0B5CFF",
                  color: "#0B5CFF",
                }}
              >
                View Report
              </Button>

            </Box>
          </Stack>
        </Box>

        {/* Add Report */}
        <Button
          variant="contained"
          fullWidth
          startIcon={<AddIcon />}
          sx={{
            marginTop: 4,
            paddingY: 1.5,
            backgroundColor: "#0B5CFF",
            borderRadius: 2,
            textTransform: "none",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Create New Report
        </Button>

      </Container>
    </Box>
  );
}

export default MyReports;