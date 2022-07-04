import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

import { ColorModeScript } from "@chakra-ui/react";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>
);
serviceWorker.unregister();
