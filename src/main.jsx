import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./css/index.css";
import "./css/mediaQ.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "toastr/build/toastr.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
