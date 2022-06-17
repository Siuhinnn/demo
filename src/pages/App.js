import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import { theme } from "theme";
import Layout from "components/Layout";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  );
}
