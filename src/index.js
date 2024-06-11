import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import App from "./App";
import { ThemeContextProvider, SongContextProvider } from "./contexts/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <SongContextProvider>
        <App />
      </SongContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
