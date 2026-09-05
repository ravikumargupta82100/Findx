import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";

function AIAssistant() {
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
            spacing={2}
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

            <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                backgroundColor: "#EAF2FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SmartToyIcon
                sx={{
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
                FindX AI Assistant
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
        </Box>

        {/* Chat Area */}
        <Box
          sx={{
            marginTop: 2,
            height: "60vh",
            backgroundColor: "white",
            borderRadius: 3,
            padding: 3,
            boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
            overflowY: "auto",
          }}
        >
          <Stack spacing={3}>

            {/* AI Message */}
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="flex-start"
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  backgroundColor: "#EAF2FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <SmartToyIcon
                  sx={{
                    color: "#0B5CFF",
                    fontSize: 20,
                  }}
                />
              </Box>

              <Box
                sx={{
                  maxWidth: "75%",
                  backgroundColor: "#F1F4F9",
                  padding: 2,
                  borderRadius: "4px 15px 15px 15px",
                }}
              >
                <Typography sx={{ color: "#071B3A" }}>
                  Hi! 👋 I'm the FindX AI Assistant.
                  I can help you with lost and found items,
                  reporting, matching and safe item recovery.
                </Typography>
              </Box>
            </Stack>

            {/* User Message */}
            <Box
              sx={{
                alignSelf: "flex-end",
                maxWidth: "75%",
                backgroundColor: "#0B5CFF",
                padding: 2,
                borderRadius: "15px 4px 15px 15px",
              }}
            >
              <Typography sx={{ color: "white" }}>
                Someone says they found my phone.
                What should I do?
              </Typography>
            </Box>

            {/* AI Response */}
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="flex-start"
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  backgroundColor: "#EAF2FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <SmartToyIcon
                  sx={{
                    color: "#0B5CFF",
                    fontSize: 20,
                  }}
                />
              </Box>

              <Box
                sx={{
                  maxWidth: "75%",
                  backgroundColor: "#F1F4F9",
                  padding: 2,
                  borderRadius: "4px 15px 15px 15px",
                }}
              >
                <Typography sx={{ color: "#071B3A" }}>
                  First, verify that the item matches your
                  description. You can ask about a unique
                  identifying feature.
                </Typography>

                <Typography
                  sx={{
                    marginTop: 1.5,
                    color: "#071B3A",
                  }}
                >
                  For your safety:
                </Typography>

                <Typography
                  sx={{
                    marginTop: 1,
                    color: "#5B6B84",
                  }}
                >
                  • Never share your OTP or password.
                  <br />
                  • Never share bank or payment details.
                  <br />
                  • Meet in a safe public location.
                  <br />
                  • If necessary, involve local authorities.
                </Typography>
              </Box>
            </Stack>

          </Stack>
        </Box>

        {/* Suggested Questions */}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            marginTop: 2,
            overflowX: "auto",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              whiteSpace: "nowrap",
              textTransform: "none",
              borderRadius: 5,
            }}
          >
            How do I report an item?
          </Button>

          <Button
            variant="outlined"
            sx={{
              whiteSpace: "nowrap",
              textTransform: "none",
              borderRadius: 5,
            }}
          >
            How does AI matching work?
          </Button>

          <Button
            variant="outlined"
            sx={{
              whiteSpace: "nowrap",
              textTransform: "none",
              borderRadius: 5,
            }}
          >
            Safety tips
          </Button>
        </Stack>

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
              size="small"
              placeholder="Ask FindX anything..."
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

export default AIAssistant;