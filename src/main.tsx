import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { CssBaseline } from "@mui/material";
import Titlebar from "./features/titlebar";
import { ThemeModeProvider } from "./components/themeContext";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline>
      <ThemeModeProvider>
        <Titlebar />
        <App />
      </ThemeModeProvider>
    </CssBaseline>
  </React.StrictMode>,
);
