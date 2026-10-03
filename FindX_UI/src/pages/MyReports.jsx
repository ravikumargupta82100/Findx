import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Snackbar,
  Alert
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useEffect, useState } from "react";
import { getAllItemsList } from "../Apis/ItemApi";
import { useNavigate } from "react-router-dom";
import { deleteItemById } from "../Apis/ItemApi";

function MyReports() {
const[myItems,setMyItems]=useState([]);
const[selectItems,setSelectedItems]=useState("");
 const[message,setMessage]=useState("");
  const[openMessage,setOpenMessage]=useState(false);
  const[messageType,setMessageType]=useState("success")
const navigate=useNavigate();

useEffect(()=>{

getAllItemsList().then((res)=>{
console.log("My Report data",res.data);
  setMyItems(res.data);
})
.catch(err=>{

  console.log("error while load data");
})



},[]);

const filterItems=myItems.filter((res)=>{

  if(selectItems==="")
    return true;

 return res.status===selectItems;
})

const handleDelete=(id)=>{

deleteItemById(id).then((res=>{
   setMessage("Deleted Successfully.");
    setMessageType("success");
    setOpenMessage(true);

      setMyItems((prevItems) =>
        prevItems.filter((item) => item.id !== id)
      );

  console.log("Deleted")
}))
.catch((err)=>{
     setMessage("Deletion Failed.");
    setMessageType("error");
    setOpenMessage(true);
  console.log("Erro while delete");
})

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
    variant={selectItems === "" ? "contained" : "outlined"}
    sx={{
      backgroundColor: selectItems === "" ? "#0B5CFF" : "transparent",
      borderRadius: 5,
      textTransform: "none",
    }}
    onClick={() => setSelectedItems("")}
  >
    All
  </Button>

  <Button
    variant={selectItems === "LOST" ? "contained" : "outlined"}
    sx={{
      borderRadius: 5,
      textTransform: "none",
    }}
    onClick={() => setSelectedItems("LOST")}
  >
    Lost
  </Button>

  <Button
    variant={selectItems === "FOUND" ? "contained" : "outlined"}
    sx={{
      borderRadius: 5,
      textTransform: "none",
    }}
    onClick={() => setSelectedItems("FOUND")}
  >
    Found
  </Button>
</Stack>



        {filterItems.map((res)=>(



     

        <Box
          sx={{
            marginTop: 4,
            backgroundColor: "white",
            padding: 3,
            borderRadius: 3,
            boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
          }}
          key={res.id}
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
                 <img
  src={res.itemImage}
  alt={res.itemName}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  }}></img>
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
                  { res.itemName}
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
                    {res.status}
                  </Typography>
                </Box>
              </Stack>

              <Typography
                sx={{
                  marginTop: 1,
                  color: "#5B6B84",
                }}
              >
               {res.description}
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
                  {res.location}
                </Typography>
              </Stack>

              <Typography
                sx={{
                  marginTop: 1,
                  fontSize: 13,
                  color: "#8A97AA",
                }}
              >
               {res.lostFoundDateTime}
              </Typography>

         <Stack
  direction="row"
  spacing={1}
  sx={{ marginTop: 2 }}
>
  <Button
    variant="outlined"
    sx={{
      textTransform: "none",
      borderColor: "#0B5CFF",
      color: "#0B5CFF",
    }}
    onClick={() => navigate(`/item-details/${res.id}`)}
  >
    View Report
  </Button>

  <Button
    variant="outlined"
    sx={{
      textTransform: "none",
      borderColor: "#F59E0B",
      color: "#F59E0B",
    }}
    onClick={() => navigate(`/edit-report/${res.id}`)}
  >
    Edit
  </Button>

  <Button
    variant="outlined"
    sx={{
      textTransform: "none",
      borderColor: "#DC2626",
      color: "#DC2626",
    }}
    onClick={() => handleDelete(res.id)}
  >
    Delete
  </Button>
</Stack>

            </Box>
          </Stack>
        </Box>

         ))};




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

export default MyReports;