import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext.tsx";
import { AlertProvider } from "./context/alertContext.tsx";
import theme from "./theme";
import { MarvelProvider } from "./context/marvelContext.tsx";
import { ConfigProvider } from "./context/configContext.tsx";
import { ForeingProvider } from "./context/foreingDataContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <AlertProvider>
        <AlertProvider>
            <ConfigProvider>
            <ForeingProvider>
              <MarvelProvider>
                <AuthProvider>
                  <CssBaseline />
                  <App />
                </AuthProvider>
              </MarvelProvider>
              </ForeingProvider>
            </ConfigProvider>
            </AlertProvider>
      </AlertProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
