import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext.tsx";
import { AlertProvider } from "./context/alertContext.tsx";
import theme from './theme';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AlertProvider>
          <AuthProvider>
            <CssBaseline />
            <App />
          </AuthProvider>
        </AlertProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
