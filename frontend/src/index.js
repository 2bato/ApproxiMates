import React from "react";
import ReactDOM from "react-dom/client";
import ProfilePage from "./components/ProfilePage";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LoginPage from "./LogInPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/App",
    element: <App />,
  },
  {
    path: "/ProfilePage",
    element: <ProfilePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="572062564932-3fa0d9g9r06o6cf8bh2j32u8tpnvoa9g.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
