import React from "react";
import { Navigate } from "react-router-dom";

import Main from "./components/Main";
import PostsPage from "./components/PostsPage";
import CommentsPage from "./components/CommentsPage";
import AlbumsPage from "./components/AlbumsPage";
import PhotosPage from "./components/PhotosPage";
import TodosPage from "./components/TodosPage";
import UsersPage from "./components/UsersPage";

const Routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/posts",
    element: <PostsPage />,
  },
  {
    path: "/comments",
    element: <CommentsPage />,
  },
  {
    path: "/albums",
    element: <AlbumsPage />,
  },
  {
    path: "/photos",
    element: <PhotosPage />,
  },
  {
    path: "/todos",
    element: <TodosPage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default Routes;
