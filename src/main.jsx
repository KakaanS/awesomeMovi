import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import AllCtx from "./context/allCtx.jsx";

// We seriously need to setup ESLINT.config and manage rules

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllCtx>
      <App />
    </AllCtx>
  </React.StrictMode>
);
