import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WeekDataProvider } from './context/WeekDataContext'
import { ShowModalProvider } from './context/ShowModalContext'
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WeekDataProvider>
        <ShowModalProvider>
          <App />
        </ShowModalProvider>
      </WeekDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
