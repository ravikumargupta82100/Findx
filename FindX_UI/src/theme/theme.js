import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0a46bd",
      dark: "#0646C7",
      light: "#EAF2FF",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#071B3A",
      contrastText: "#FFFFFF",
    },

    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#071B3A",
      secondary: "#5B6B84",
    },

    success: {
      main: "#16A34A",
    },

    error: {
      main: "#DC2626",
    },
  },

  typography: {
    fontFamily: '"Inter", "Segoe UI", Arial, sans-serif',

    h1: {
      fontWeight: 800,
    },

    h2: {
      fontWeight: 800,
    },

    h3: {
      fontWeight: 700,
    },

    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;