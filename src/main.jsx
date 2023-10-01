import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import AllCtx from "./context/allCtx.jsx";

// We seriously need to setup ESLINT.config and manage rules

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AllCtx>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AllCtx>
  </Router>
);
