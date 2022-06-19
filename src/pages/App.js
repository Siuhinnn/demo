import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

import store from "redux/configureStore";
import { theme } from "theme";
import Layout from "components/Layout";
import { ContentProvider } from "static/ExpensesContent";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContentProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </Provider>
      </ContentProvider>
    </ThemeProvider>
  );
}
