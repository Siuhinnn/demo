import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import { theme } from "theme";
import Layout from "components/Layout";
import { ContentProvider } from "static/ExpensesContent";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContentProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ContentProvider>
    </ThemeProvider>
  );
}
