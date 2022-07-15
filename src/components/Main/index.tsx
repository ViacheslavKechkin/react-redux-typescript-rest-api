import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Box } from "@chakra-ui/react";

import { useAppSelector, useAppDispatch } from "../../hooks";

import Posts from "../Posts";
import ResourceButton from "../../primitive/Button";
import getPostsThunk from "../../store/postSlice";

import "./style.scss";

const Main = () => {
  const post = useAppSelector((state) => state.post.detail);
  const posts = useAppSelector((state) => state.post.list);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    // dispatch(getPostsThunk());
  }, []);

  const handlePosts = () => {
    navigate("/posts");
  };

  const handleComments = () => {
    navigate("/comments");
  };

  const handleAlbums = () => {
    navigate("/albums");
  };

  const handlePhotos = () => {
    navigate("/photos");
  };

  const handleTodos = () => {
    navigate("/todos");
  };

  const handleUsers = () => {
    navigate("/users");
  };

  return (
    <div className="container">
      <main className="main-content">
        Main page
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexWrap={"wrap"}
          gap={"10px"}
        >
          <ResourceButton onClick={handlePosts}>Posts</ResourceButton>
          <ResourceButton onClick={handleComments}>Comments</ResourceButton>
          <ResourceButton onClick={handleAlbums}>Albums</ResourceButton>
          <ResourceButton onClick={handlePhotos}>Photos</ResourceButton>
          <ResourceButton onClick={handleTodos}>Todos</ResourceButton>
          <ResourceButton onClick={handleUsers}>Users</ResourceButton>
        </Box>
      </main>
    </div>
  );
};

export default Main;
