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
      main: "#bf360c",
    },
    secondary: {
      main: "#f50057",
    },
  },
});
