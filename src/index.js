import React from "react";

import "./index.css";
import App from "./ReactComponents/App/App";
import * as ReactDOM from "react-dom/client";

import ThemeContextWrapper from "./theme/ThemeWrapper";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(
  <ThemeContextWrapper>
    <App name="Saeloun blog" />
  </ThemeContextWrapper>
);

// During an update, there is no need to pass the container again
root.render(
  <ThemeContextWrapper>
    <App name="Saeloun testimonials" />
  </ThemeContextWrapper>
);
