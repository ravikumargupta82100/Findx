import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  MenuItem,
  Alert,
  Snackbar
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { saveItemDetails } from "../Apis/ItemApi";

function ReportFound() {
  const [message, setMessage] = useState("");
const [messageType, setMessageType] = useState("success");
const [openMessage, setOpenMessage] = useState(false);
const [formData, setFormData] = useState({
  itemName: "",
  category: "",
  description: "",
  location: "",
  lostFoundDateTime: "",
  itemImage: "",
  status:""
});
const handleSubmit = () => {

    if (
    !formData.itemName ||
    !formData.category ||
    !formData.description ||
    !formData.location ||
    !formData.lostFoundDateTime
  ) {
    setMessage("Please fill all required fields.");
    setMessageType("error");
    setOpenMessage(true);
    return;
  }
  const payload = {
    ...formData,
    status: "FOUND",
  };

  saveItemDetails(payload)
    .then((response) => {
      console.log("Item created successfully:", response.data);

      setMessage("Found item reported successfully!");
      setMessageType("success");
      setOpenMessage(true);

      // optional: clear form
      setFormData({
        itemName: "",
        category: "",
        description: "",
        location: "",
        lostFoundDateTime: "",
        itemImage: "",
      });
    })
    .catch((error) => {
      console.error("Error creating item:", error);

      setMessage("Failed to report item. Please try again.");
      setMessageType("error");
      setOpenMessage(true);
    });
};

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
            Report Found Item
          </Typography>

          <Typography
            sx={{
              marginTop: 1,
              color: "#5B6B84",
            }}
          >
            Help someone find their lost item by reporting it here.
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
              placeholder="Example: Black iPhone 15"
              fullWidth
              required
              value={formData.itemName}
           onChange={(e)=>setFormData({...formData,itemName:e.target.value})}
           />

           {/* Category */}
<TextField
  select
  label="Category"
  fullWidth
  required
  value={formData.category || ""}
  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
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
              placeholder="Describe the item you found..."
              multiline
              rows={4}
              fullWidth
              required
                 value={formData.description}
           onChange={(e)=>setFormData({...formData,description:e.target.value})}
            />

            {/* Found Location */}
            <TextField
              label="Found Location"
              placeholder="Example: Bangalore Metro Station"
              fullWidth
              required
                          value={formData.location}
           onChange={(e)=>setFormData({...formData,location:e.target.value})}
            />

       {/* Found Date & Time */}
<TextField
  label="Found Date & Time"
  type="datetime-local"
  fullWidth
  required
  InputLabelProps={{
    shrink: true,
  }}
  value={formData.lostFoundDateTime}
  onChange={(e) =>
    setFormData({
      ...formData,
      lostFoundDateTime: e.target.value,
    })
  }
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
                  Add a clear photo of the item
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

              onClick={handleSubmit}
            >
              Report Found Item
            </Button>

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

export default ReportFound;