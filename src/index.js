import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Destinations from './components/Destinations';
import Rezervations from './components/Rezervations';
import Amenities from './components/Amenities';
import Room from './components/Room';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/destinations",
      element: <Destinations />,
    },
   {
      path: "/rezervations",
      element: <Rezervations />,
    },
    {
      path: "/amenities",
      element: <Amenities />,
    },
    {
      path: "/room",
      element: <Room />,
    },

  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
);
