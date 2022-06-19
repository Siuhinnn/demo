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
      light: "#ffc06f",
      main: "#ff7000",
      dark: "#c43f00",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff0000",
    },
  },
});
