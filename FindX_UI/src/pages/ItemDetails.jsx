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
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemDetails } from "../Apis/ItemApi";

function ItemDetails() {
  const[itemdetails,setItemdetails]=useState();
const {id}=useParams();
useEffect(()=>{

  getItemDetails(id).then((item)=>
  {
    console.log("API DATA:", item.data);
  setItemdetails(item.data)
  }
  ).catch((er)=>
  {
  console.log("Getting error while getting error");
  }
  );

},[id]);

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
            Item Details
          </Typography>
        </Stack>

        {/* Main Card */}
        <Box
          sx={{
            marginTop: 4,
            backgroundColor: "white",
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 5px 25px rgba(0,0,0,0.06)",
          }}
        >

          {/* Image Area */}
          <Box
            sx={{
              height: 280,
              backgroundColor: "#EAF2FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
             <img
  src={itemdetails?.itemImage}
  alt={itemdetails?.itemName}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "2px",
  }}
/>
          </Box>

          {/* Details */}
          <Box sx={{ padding: 4 }}>

            {/* Status */}
            <Box
              sx={{
                display: "inline-block",
                paddingX: 2,
                paddingY: 0.7,
                borderRadius: 5,
                backgroundColor: "#EAF2FF",
              }}
            >
              <Typography
                sx={{
                  color: "#0B5CFF",
                  fontWeight: "bold",
                  fontSize: 14,
                }}
              >
                LOST ITEM
              </Typography>
            </Box>

            {/* Name */}
            <Typography
              variant="h4"
              sx={{
                marginTop: 2,
                fontWeight: "bold",
                color: "#071B3A",
              }}
            >
            {itemdetails?.itemName}
            </Typography>

            <Typography
              sx={{
                marginTop: 1,
                color: "#5B6B84",
              }}
            >
             {itemdetails?.category}
            </Typography>

            <Divider sx={{ marginY: 3 }} />

            {/* Information */}
            <Stack spacing={2.5}>

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <LocationOnOutlinedIcon
                  sx={{ color: "#0B5CFF" }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "#8A97AA",
                    }}
                  >
                    Lost Location
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#071B3A",
                    }}
                  >
                  {itemdetails?.location}
                  </Typography>
                </Box>
              </Stack>

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <AccessTimeIcon
                  sx={{ color: "#0B5CFF" }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "#8A97AA",
                    }}
                  >
                    Lost Date
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#071B3A",
                    }}
                  >
                    2 September 2026
                  </Typography>
                </Box>
              </Stack>

            </Stack>

            <Divider sx={{ marginY: 3 }} />

            {/* Description */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#071B3A",
              }}
            >
              Description
            </Typography>

            <Typography
              sx={{
                marginTop: 1,
                lineHeight: 1.7,
                color: "#5B6B84",
              }}
            >
              {itemdetails?.description}
            </Typography>

            {/* AI Match */}
            <Box
              sx={{
                marginTop: 3,
                padding: 3,
                borderRadius: 2,
                backgroundColor: "#EAF2FF",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#071B3A",
                }}
              >
                🤖 FindX AI Matching
              </Typography>

              <Typography
                sx={{
                  marginTop: 1,
                  color: "#5B6B84",
                }}
              >
                FindX will automatically compare this report
                with found items using location, time,
                description and image similarity.
              </Typography>
            </Box>

            {/* Contact Button */}
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
              Contact Owner
            </Button>

          </Box>
        </Box>

      </Container>
    </Box>
  );
}

export default ItemDetails;