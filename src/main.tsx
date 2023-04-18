import React from "react";
import ReactDOM from "react-dom/client";

import { ColorModeScript } from "@chakra-ui/react";

import App from "./app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode="dark" />
    <App />
  </React.StrictMode>
);
