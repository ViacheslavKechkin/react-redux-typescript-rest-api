import React from "react";
import { Navigate } from "react-router-dom";

import Main from "./components/Main";

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
