import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "ElMessiri",
      fontSize: "40px",
      fontWeight: "600",
    },
    h2: {
      fontSize: "20px",
      fontWeight: "600",
      lineHeight: "36px",
    },
    h3: {
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "50px",
    },
    body: {
      fontSize: "1.25rem",
      lineHeight: "40px",
    },
  },
  palette: {
    primary: {
      light: "#DBE2EF",
      main: "#3F72AF",
      dark: "#112D4E",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff0000",
    },
  },
});
