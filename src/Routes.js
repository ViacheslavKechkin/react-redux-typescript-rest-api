import React from "react";
import { Navigate } from "react-router-dom";

const Routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default Routes;
