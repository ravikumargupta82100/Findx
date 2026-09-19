import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Card,
  CardContent
} from "@mui/material";
import { getAllItemsList } from "../Apis/ItemApi";
import { useNavigate } from "react-router-dom";



import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useEffect, useState } from "react";


function Explore() {
const [items,setItems]=useState([]);
const navigates=useNavigate();

  useEffect(() => {
  getAllItemsList()
    .then((response) => {
      console.log("API DATA:", response.data);
      setItems(response.data);
    })
    .catch((error) => {
      console.log("Error fetching items:", error);
    });
}, []);
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


{/* Item map*/}
{items.map((item) => (
  <Card key={item.id} sx={{ mb: 2 }}>
    <CardContent>
      <Box
        sx={{
          height: 150,
          backgroundColor: "#EAF2FF",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
      <img
  src={item.itemImage}
  alt={item.itemName}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  }}
/>
      </Box>

      <Typography variant="h6" fontWeight={600}>
        {item.itemName}
      </Typography>

      <Typography color="text.secondary">
        {item.category}
      </Typography>

      <Typography color="text.secondary" sx={{ mt: 1 }}>
        📍 {item.location}
      </Typography>

      <Typography
        sx={{
          mt: 1,
          fontSize: 13,
          fontWeight: 600,
          color: item.status === "LOST" ? "#DC2626" : "#16A34A",
        }}
      >
        {item.status}
      </Typography>

      <Button
        variant="outlined"
        fullWidth
        sx={{ mt: 2 }}
      onClick={()=>navigates(`/item-details/${item.id}`)}
      >
        View Details
      </Button>
    </CardContent>
  </Card>
))}
         

        

        </Grid>

      </Container>
    </Box>
  );
}

export default Explore;