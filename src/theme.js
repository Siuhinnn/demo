import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
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
