import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import AllCtx from "./context/allCtx.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AllCtx>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AllCtx>
  </Router>
);
