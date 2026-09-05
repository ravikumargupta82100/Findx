import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";

function ReportLost() {
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

          <Stack direction="row" spacing={1} alignItems="center">
            <SearchIcon sx={{ color: "#0B5CFF", fontSize: 30 }} />

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
            Report Lost Item
          </Typography>

          <Typography
            sx={{
              marginTop: 1,
              color: "#5B6B84",
            }}
          >
            Tell us about your lost item so we can help you find it.
          </Typography>
        </Box>

        {/* Form */}
        <Box
          sx={{
            marginTop: 4,
            backgroundColor: "white",
            padding: 4,
            borderRadius: 3,
            boxShadow: "0 5px 25px rgba(0,0,0,0.06)",
          }}
        >
          <Stack spacing={3}>

            {/* Item Name */}
            <TextField
              label="Item Name"
              placeholder="Example: iPhone 15"
              fullWidth
            />

            {/* Category */}
            <TextField
              select
              label="Category"
              fullWidth
              defaultValue=""
            >
              <MenuItem value="mobile">Mobile</MenuItem>
              <MenuItem value="laptop">Laptop</MenuItem>
              <MenuItem value="bag">Bag</MenuItem>
              <MenuItem value="wallet">Wallet</MenuItem>
              <MenuItem value="keys">Keys</MenuItem>
              <MenuItem value="documents">Documents</MenuItem>
              <MenuItem value="books">Books</MenuItem>
              <MenuItem value="clothing">Clothing</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>

            {/* Description */}
            <TextField
              label="Description"
              placeholder="Describe your item in detail..."
              multiline
              rows={4}
              fullWidth
            />

            {/* Location */}
            <TextField
              label="Lost Location"
              placeholder="Example: Bangalore Metro Station"
              fullWidth
            />

            {/* Date */}
            <TextField
              label="Lost Date"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />

            {/* Image */}
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#071B3A",
                  marginBottom: 1,
                }}
              >
                Upload Item Image
              </Typography>

              <Box
                sx={{
                  border: "2px dashed #C8D5EA",
                  borderRadius: 2,
                  padding: 4,
                  textAlign: "center",
                  backgroundColor: "#F8FAFF",
                }}
              >
                <Typography sx={{ color: "#5B6B84" }}>
                  Click to upload an image
                </Typography>

                <Button
                  component="label"
                  variant="outlined"
                  sx={{
                    marginTop: 2,
                    textTransform: "none",
                    color: "#0B5CFF",
                    borderColor: "#0B5CFF",
                  }}
                >
                  Choose Image

                  <input
                    type="file"
                    hidden
                    accept="image/*"
                  />
                </Button>
              </Box>
            </Box>

            {/* Submit */}
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#0B5CFF",
                paddingY: 1.5,
                borderRadius: 2,
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              Report Lost Item
            </Button>

          </Stack>
        </Box>

      </Container>
    </Box>
  );
}

export default ReportLost;