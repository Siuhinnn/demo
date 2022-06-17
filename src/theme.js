import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    h2: {
      fontSize: "2.5rem",
      fontWeight: "700",
      lineHeight: "36px",
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
