import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./Router";

import theme from "./Pages/theme";
import { ThemeProvider } from "@mui/material";
import {CssBaseline} from "@mui/material";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <AppRoutes />
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
}
