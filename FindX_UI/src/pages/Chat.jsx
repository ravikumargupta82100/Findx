import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import PhoneIcon from "@mui/icons-material/Phone";

function Chat() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F8FAFF",
        paddingY: 3,
      }}
    >
      <Container maxWidth="md">

        {/* Header */}
        <Box
          sx={{
            backgroundColor: "white",
            padding: 2,
            borderRadius: 3,
            boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <Button
                sx={{
                  minWidth: 40,
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                }}
              >
                <ArrowBackIcon sx={{ color: "#071B3A" }} />
              </Button>

              <Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#071B3A",
                  }}
                >
                  Found Item Owner
                </Typography>

                <Typography
                  sx={{
                    fontSize: 13,
                    color: "#16A34A",
                  }}
                >
                  Online
                </Typography>
              </Box>
            </Stack>

            <IconButton>
              <PhoneIcon sx={{ color: "#0B5CFF" }} />
            </IconButton>
          </Stack>
        </Box>

        {/* Item Information */}
        <Box
          sx={{
            marginTop: 2,
            backgroundColor: "#EAF2FF",
            padding: 2,
            borderRadius: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 13,
              color: "#5B6B84",
            }}
          >
            Regarding
          </Typography>

          <Typography
            sx={{
              fontWeight: "bold",
              color: "#071B3A",
            }}
          >
            iPhone 15 • Possible Match 93%
          </Typography>
        </Box>

        {/* Chat Area */}
        <Box
          sx={{
            marginTop: 2,
            height: "55vh",
            backgroundColor: "white",
            borderRadius: 3,
            padding: 3,
            boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
            overflowY: "auto",
          }}
        >
          <Stack spacing={2}>

            {/* Other Person */}
            <Box
              sx={{
                alignSelf: "flex-start",
                maxWidth: "70%",
                backgroundColor: "#F1F4F9",
                padding: 2,
                borderRadius: "4px 15px 15px 15px",
              }}
            >
              <Typography
                sx={{
                  color: "#071B3A",
                }}
              >
                Hi, I think I found your iPhone.
              </Typography>

              <Typography
                sx={{
                  fontSize: 11,
                  color: "#8A97AA",
                  marginTop: 0.5,
                }}
              >
                10:30 AM
              </Typography>
            </Box>

            {/* My Message */}
            <Box
              sx={{
                alignSelf: "flex-end",
                maxWidth: "70%",
                backgroundColor: "#0B5CFF",
                padding: 2,
                borderRadius: "15px 4px 15px 15px",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                }}
              >
                Really? Does it have a transparent case?
              </Typography>

              <Typography
                sx={{
                  fontSize: 11,
                  color: "#DCE7FF",
                  marginTop: 0.5,
                }}
              >
                10:31 AM
              </Typography>
            </Box>

            {/* Other Person */}
            <Box
              sx={{
                alignSelf: "flex-start",
                maxWidth: "70%",
                backgroundColor: "#F1F4F9",
                padding: 2,
                borderRadius: "4px 15px 15px 15px",
              }}
            >
              <Typography
                sx={{
                  color: "#071B3A",
                }}
              >
                Yes, it does. I found it near the metro station.
              </Typography>

              <Typography
                sx={{
                  fontSize: 11,
                  color: "#8A97AA",
                  marginTop: 0.5,
                }}
              >
                10:32 AM
              </Typography>
            </Box>

          </Stack>
        </Box>

        {/* Safety Message */}
        <Box
          sx={{
            marginTop: 2,
            padding: 2,
            backgroundColor: "#FFF8E7",
            borderRadius: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 13,
              color: "#6B5A20",
            }}
          >
            🔒 For your safety, never share OTPs, passwords,
            bank details, or other sensitive information.
          </Typography>
        </Box>

        {/* Message Input */}
        <Box
          sx={{
            marginTop: 2,
            backgroundColor: "white",
            padding: 1.5,
            borderRadius: 3,
            boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <TextField
              fullWidth
              placeholder="Type your message..."
              variant="outlined"
              size="small"
            />

            <IconButton
              sx={{
                width: 45,
                height: 45,
                backgroundColor: "#0B5CFF",
                "&:hover": {
                  backgroundColor: "#0646C7",
                },
              }}
            >
              <SendIcon sx={{ color: "white" }} />
            </IconButton>
          </Stack>
        </Box>

      </Container>
    </Box>
  );
}

export default Chat;