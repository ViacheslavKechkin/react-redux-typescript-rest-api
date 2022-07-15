import React from "react";
import { Navigate } from "react-router-dom";

import Main from "./components/Main";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import Albums from "./components/Albums";
import Photos from "./components/Photos";
import Todos from "./components/Todos";
import Users from "./components/Users";

const Routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/comments",
    element: <Comments />,
  },
  {
    path: "/albums",
    element: <Albums />,
  },
  {
    path: "/photos",
    element: <Photos />,
  },
  {
    path: "/todos",
    element: <Todos />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default Routes;
