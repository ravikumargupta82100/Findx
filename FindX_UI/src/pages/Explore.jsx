import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function Explore() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F8FAFF",
        paddingY: 4,
      }}
    >
      <Container maxWidth="lg">

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
            Explore Items
          </Typography>
        </Stack>

        {/* Search Heading */}
        <Box sx={{ marginTop: 5 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#071B3A",
            }}
          >
            Find an Item
          </Typography>

          <Typography
            sx={{
              marginTop: 1,
              color: "#5B6B84",
            }}
          >
            Search through lost and found reports near you.
          </Typography>
        </Box>

        {/* Search Box */}
        <Box
          sx={{
            marginTop: 4,
            backgroundColor: "white",
            padding: 3,
            borderRadius: 3,
            boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
          }}
        >
          <Grid container spacing={2}>

            <Grid item xs={12} md={5}>
              <TextField
                fullWidth
                placeholder="Search item..."
                InputProps={{
                  startAdornment: (
                    <SearchIcon
                      sx={{
                        color: "#5B6B84",
                        marginRight: 1,
                      }}
                    />
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <TextField
                select
                fullWidth
                label="Category"
                defaultValue="all"
              >
                <MenuItem value="all">All Categories</MenuItem>
                <MenuItem value="mobile">Mobile</MenuItem>
                <MenuItem value="laptop">Laptop</MenuItem>
                <MenuItem value="bag">Bag</MenuItem>
                <MenuItem value="wallet">Wallet</MenuItem>
                <MenuItem value="keys">Keys</MenuItem>
                <MenuItem value="documents">Documents</MenuItem>
                <MenuItem value="books">Books</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} md={2}>
              <TextField
                fullWidth
                placeholder="Location"
                InputProps={{
                  startAdornment: (
                    <LocationOnOutlinedIcon
                      sx={{
                        color: "#5B6B84",
                        marginRight: 1,
                      }}
                    />
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  height: "56px",
                  backgroundColor: "#0B5CFF",
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Search
              </Button>
            </Grid>

          </Grid>
        </Box>

        {/* Filter */}
        <Stack
          direction="row"
          spacing={2}
          sx={{ marginTop: 4 }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0B5CFF",
              textTransform: "none",
              borderRadius: 5,
            }}
          >
            All
          </Button>

          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              borderRadius: 5,
            }}
          >
            Lost
          </Button>

          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              borderRadius: 5,
            }}
          >
            Found
          </Button>
        </Stack>

        {/* Results */}
        <Typography
          variant="h6"
          sx={{
            marginTop: 5,
            fontWeight: "bold",
            color: "#071B3A",
          }}
        >
          Recent Reports
        </Typography>

        <Grid container spacing={3} sx={{ marginTop: 1 }}>

          {/* Card 1 */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
              }}
            >
              <Box
                sx={{
                  height: 160,
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

              <Box sx={{ padding: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#071B3A",
                  }}
                >
                  iPhone 15
                </Typography>

                <Typography
                  sx={{
                    color: "#5B6B84",
                    marginTop: 1,
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
                      color: "#0B5CFF",
                      fontSize: 20,
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

                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    marginTop: 2,
                    textTransform: "none",
                    borderColor: "#0B5CFF",
                    color: "#0B5CFF",
                  }}
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Card 2 */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
              }}
            >
              <Box
                sx={{
                  height: 160,
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

              <Box sx={{ padding: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#071B3A",
                  }}
                >
                  Black Wallet
                </Typography>

                <Typography
                  sx={{
                    color: "#5B6B84",
                    marginTop: 1,
                  }}
                >
                  Leather wallet found near a metro station
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ marginTop: 2 }}
                >
                  <LocationOnOutlinedIcon
                    sx={{
                      color: "#0B5CFF",
                      fontSize: 20,
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

                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    marginTop: 2,
                    textTransform: "none",
                    borderColor: "#0B5CFF",
                    color: "#0B5CFF",
                  }}
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Card 3 */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
              }}
            >
              <Box
                sx={{
                  height: 160,
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

              <Box sx={{ padding: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#071B3A",
                  }}
                >
                  Laptop Bag
                </Typography>

                <Typography
                  sx={{
                    color: "#5B6B84",
                    marginTop: 1,
                  }}
                >
                  Blue laptop bag reported as lost
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ marginTop: 2 }}
                >
                  <LocationOnOutlinedIcon
                    sx={{
                      color: "#0B5CFF",
                      fontSize: 20,
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

                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    marginTop: 2,
                    textTransform: "none",
                    borderColor: "#0B5CFF",
                    color: "#0B5CFF",
                  }}
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </Grid>

        </Grid>

      </Container>
    </Box>
  );
}

export default Explore;