import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Toaster } from "react-hot-toast";
import { UserNameContextProvider } from "./context/userNameContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserNameContextProvider>
      <App />
      <Toaster position="top-center" />
    </UserNameContextProvider>
  </React.StrictMode>
);

reportWebVitals();
