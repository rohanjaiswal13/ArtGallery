import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Shop from "../src/pages/shop.jsx";
import Cart from "../src/pages/cart.jsx";
import Home from "../src/pages/home/home.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
  },
  {
    path: "shop",
    element: (
      <div>
        <Shop />
      </div>
    ),
  },
  {
    path: "cart",
    element: (
      <div>
        <Cart />
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
