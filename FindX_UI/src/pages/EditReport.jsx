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
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getItemDetails,
  updateItemDetails,
} from "../Apis/ItemApi";

function EditReport() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState({
    itemName: "",
    category: "",
    description: "",
    location: "",
    status: "",
    itemImage: "",
    lostFoundDateTime: "",
  });

  const [loading, setLoading] = useState(true);

  // Load existing report
  useEffect(() => {

    getItemDetails(id)
      .then((res) => {

        console.log("Edit item data:", res.data);

        setItem({
          itemName: res.data.itemName || "",
          category: res.data.category || "",
          description: res.data.description || "",
          location: res.data.location || "",
          status: res.data.status || "",
          itemImage: res.data.itemImage || "",
          lostFoundDateTime: res.data.lostFoundDateTime || "",
        });

        setLoading(false);
      })
      .catch((err) => {
        console.log("Error while loading item:", err);
        setLoading(false);
      });

  }, [id]);


  const handleChange = (e) => {

    const { name, value } = e.target;

    setItem((prev) => ({
      ...prev,
      [name]: value,
    }));

  };


  const handleUpdate = () => {

    updateItemDetails(id, item)
      .then((res) => {

        console.log("Updated successfully:", res.data);

        // Go back to My Reports
        navigate("/my-reports");

      })
      .catch((err) => {

        console.log("Error while updating:", err);

      });

  };


  if (loading) {
    return (
      <Typography sx={{ padding: 4 }}>
        Loading...
      </Typography>
    );
  }


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
            onClick={() => navigate(-1)}
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
            Edit Report
          </Typography>

        </Stack>


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
              name="itemName"
              value={item.itemName}
              onChange={handleChange}
              fullWidth
            />


            {/* Category */}

            <TextField
              select
              label="Category"
              name="category"
              value={item.category}
              onChange={handleChange}
              fullWidth
            >

              <MenuItem value="Mobile">Mobile</MenuItem>
              <MenuItem value="Laptop">Laptop</MenuItem>
              <MenuItem value="Bag">Bag</MenuItem>
              <MenuItem value="Wallet">Wallet</MenuItem>
              <MenuItem value="Keys">Keys</MenuItem>
              <MenuItem value="Documents">Documents</MenuItem>
              <MenuItem value="Books">Books</MenuItem>
              <MenuItem value="Other">Other</MenuItem>

            </TextField>


            {/* Status */}

            <TextField
              select
              label="Status"
              name="status"
              value={item.status}
              onChange={handleChange}
              fullWidth
            >

              <MenuItem value="LOST">LOST</MenuItem>
              <MenuItem value="FOUND">FOUND</MenuItem>

            </TextField>


            {/* Location */}

            <TextField
              label="Location"
              name="location"
              value={item.location}
              onChange={handleChange}
              fullWidth
            />


            {/* Description */}

            <TextField
              label="Description"
              name="description"
              value={item.description}
              onChange={handleChange}
              fullWidth
              multiline
              rows={5}
            />


            {/* Image URL */}

            <TextField
              label="Image URL"
              name="itemImage"
              value={item.itemImage}
              onChange={handleChange}
              fullWidth
            />


            {/* Date */}

            <TextField
              label="Lost / Found Date & Time"
              name="lostFoundDateTime"
              type="datetime-local"
              value={item.lostFoundDateTime}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />


            {/* Update Button */}

            <Button
              variant="contained"
              fullWidth
              onClick={handleUpdate}
              sx={{
                paddingY: 1.5,
                backgroundColor: "#0B5CFF",
                borderRadius: 2,
                textTransform: "none",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Update Report
            </Button>

          </Stack>

        </Box>

      </Container>

    </Box>
  );
}

export default EditReport;