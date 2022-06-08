import React from "react";
import "./index.css";
import App from "./ReactComponents/App/App";
import * as ReactDOM from "react-dom/client";

import ThemeContextWrapper from "./theme/ThemeWrapper";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(
  <ThemeContextWrapper>
    <App />
  </ThemeContextWrapper>
);
