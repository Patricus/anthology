import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Titlebar from "./features/titlebar";
import { CssBaseline } from "@mui/material";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline>
      <Titlebar />
      <App />
    </CssBaseline>
  </React.StrictMode>,
);
