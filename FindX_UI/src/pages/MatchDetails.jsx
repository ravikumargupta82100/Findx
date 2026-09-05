import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChatIcon from "@mui/icons-material/Chat";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function MatchDetails() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F8FAFF",
        paddingY: 4,
      }}
    >
      <Container maxWidth="md">

        {/* Top */}
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
            Possible Match
          </Typography>
        </Stack>

        {/* Match Success */}
        <Box
          sx={{
            marginTop: 4,
            backgroundColor: "#EAF2FF",
            padding: 4,
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <CheckCircleIcon
            sx={{
              fontSize: 60,
              color: "#0B5CFF",
            }}
          />

          <Typography
            variant="h5"
            sx={{
              marginTop: 1,
              fontWeight: "bold",
              color: "#071B3A",
            }}
          >
            We Found a Possible Match!
          </Typography>

          <Typography
            sx={{
              marginTop: 1,
              color: "#5B6B84",
            }}
          >
            Our AI found a strong similarity between your
            lost item and a found report.
          </Typography>
        </Box>

        {/* Match Score */}
        <Box
          sx={{
            marginTop: 3,
            backgroundColor: "white",
            padding: 3,
            borderRadius: 3,
            boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#5B6B84",
            }}
          >
            AI Match Score
          </Typography>

          <Typography
            variant="h2"
            sx={{
              marginTop: 1,
              fontWeight: "bold",
              color: "#0B5CFF",
            }}
          >
            93%
          </Typography>

          <Typography
            sx={{
              color: "#16A34A",
              fontWeight: "bold",
            }}
          >
            High Match
          </Typography>
        </Box>

        {/* Comparison */}
        <Box sx={{ marginTop: 4 }}>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#071B3A",
              marginBottom: 2,
            }}
          >
            Match Details
          </Typography>

          <Box
            sx={{
              backgroundColor: "white",
              padding: 3,
              borderRadius: 3,
              boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
            }}
          >

            {/* Your Item */}
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#071B3A",
              }}
            >
              Your Lost Item
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              sx={{ marginTop: 2 }}
            >
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: 2,
                  backgroundColor: "#EAF2FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SearchIcon
                  sx={{
                    fontSize: 50,
                    color: "#0B5CFF",
                  }}
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#071B3A",
                  }}
                >
                  iPhone 15
                </Typography>

                <Typography
                  sx={{
                    marginTop: 0.5,
                    color: "#5B6B84",
                  }}
                >
                  Black with transparent case
                </Typography>
              </Box>
            </Stack>

            <Divider sx={{ marginY: 3 }} />

            {/* Found Item */}
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#071B3A",
              }}
            >
              Found Item
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              sx={{ marginTop: 2 }}
            >
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: 2,
                  backgroundColor: "#EAF2FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SearchIcon
                  sx={{
                    fontSize: 50,
                    color: "#0B5CFF",
                  }}
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#071B3A",
                  }}
                >
                  Black iPhone
                </Typography>

                <Typography
                  sx={{
                    marginTop: 0.5,
                    color: "#5B6B84",
                  }}
                >
                  Found with transparent case
                </Typography>
              </Box>
            </Stack>

            <Divider sx={{ marginY: 3 }} />

            {/* Matching Factors */}
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#071B3A",
              }}
            >
              Why FindX thinks they match
            </Typography>

            <Stack spacing={2} sx={{ marginTop: 2 }}>

              <Stack direction="row" spacing={1}>
                <LocationOnOutlinedIcon
                  sx={{ color: "#0B5CFF" }}
                />

                <Typography sx={{ color: "#5B6B84" }}>
                  Same or nearby location
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1}>
                <AccessTimeIcon
                  sx={{ color: "#0B5CFF" }}
                />

                <Typography sx={{ color: "#5B6B84" }}>
                  Similar date and time
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1}>
                <SearchIcon
                  sx={{ color: "#0B5CFF" }}
                />

                <Typography sx={{ color: "#5B6B84" }}>
                  Similar description and item category
                </Typography>
              </Stack>

            </Stack>

          </Box>
        </Box>

        {/* Action */}
        <Button
          variant="contained"
          fullWidth
          startIcon={<ChatIcon />}
          sx={{
            marginTop: 3,
            paddingY: 1.5,
            backgroundColor: "#0B5CFF",
            borderRadius: 2,
            textTransform: "none",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Contact Person
        </Button>

      </Container>
    </Box>
  );
}

export default MatchDetails;