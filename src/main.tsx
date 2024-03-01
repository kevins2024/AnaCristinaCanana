import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter basename={import.meta.env.DEV ? "/" : "/AnaCristinaCanana"}>
      <App />
    </HashRouter>
  </React.StrictMode>
);
