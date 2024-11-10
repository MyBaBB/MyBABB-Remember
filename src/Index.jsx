import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BrowserRouter>
        <Switch>
           <Route path="/" element={<App />} />
        </Switch>
      </BrowserRouter>
    </BrowserRouter>
  </React.StrictMode>,
);
