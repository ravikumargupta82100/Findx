import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ChatIcon from "@mui/icons-material/Chat";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/home",
    },
    {
      text: "Explore",
      icon: <SearchIcon />,
      path: "/explore",
    },
    {
      text: "Report Lost",
      icon: <ReportProblemOutlinedIcon />,
      path: "/report-lost",
    },
    {
      text: "Report Found",
      icon: <Inventory2OutlinedIcon />,
      path: "/report-found",
    },
    {
      text: "Chat",
      icon: <ChatIcon />,
      path: "/chat",
    },
    {
      text: "AI Assistant",
      icon: <SmartToyOutlinedIcon />,
      path: "/ai-assistant",
    },
    {
      text: "My Reports",
      icon: <AssignmentOutlinedIcon />,
      path: "/my-reports",
    },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#F8FAFD",
      }}
    >
      {/* SIDEBAR */}
      <Box
        sx={{
          width: 250,
          backgroundColor: "#071B3A",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          padding: 2,
        }}
      >
        {/* LOGO */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            padding: 2,
            marginBottom: 2,
          }}
        >
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              backgroundColor: "#0B5CFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SearchIcon />
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
            }}
          >
            Find<span style={{ color: "#4D8DFF" }}>X</span>
          </Typography>
        </Box>

        <Divider
          sx={{
            borderColor: "rgba(255,255,255,0.15)",
            marginBottom: 2,
          }}
        />

        {/* MENU */}
        <List sx={{ flex: 1 }}>
          {menuItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <ListItemButton
                key={item.text}
                onClick={() => navigate(item.path)}
                sx={{
                  borderRadius: 2,
                  marginBottom: 0.7,
                  color: active ? "#ffffff" : "#B8C4D8",
                  backgroundColor: active
                    ? "#0B5CFF"
                    : "transparent",

                  "&:hover": {
                    backgroundColor: active
                      ? "#0B5CFF"
                      : "rgba(255,255,255,0.08)",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: active ? "#ffffff" : "#B8C4D8",
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                <ListItemText primary={item.text} />
              </ListItemButton>
            );
          })}
        </List>

        {/* LOGOUT */}
        <ListItemButton
          onClick={handleLogout}
          sx={{
            borderRadius: 2,
            color: "#FFB4B4",

            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.08)",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: "#FFB4B4",
              minWidth: 40,
            }}
          >
            <LogoutIcon />
          </ListItemIcon>

          <ListItemText primary="Logout" />
        </ListItemButton>
      </Box>

      {/* MAIN CONTENT */}
      <Box
        sx={{
          flex: 1,
          padding: 4,
          overflow: "auto",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;