import React from "react";
import { useNavigate } from "react-router-dom";

import { Box } from "@chakra-ui/react";

import ResourceButton from "../../primitive/Button";

import { useAppSelector, useAppDispatch } from "../../hooks";
import useAppNavigation from "../../hooks/useAppNavigation";

import "./style.scss";

const Main = () => {
  const post = useAppSelector((state) => state.post.detail);
  const posts = useAppSelector((state) => state.post.list);

  const { goPosts, goComments, goAlbums, goPhotos, goTodos, goUsers } =
    useAppNavigation();

  const dispatch = useAppDispatch();

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
          <ResourceButton onClick={goPosts}>Posts</ResourceButton>
          <ResourceButton onClick={goComments}>Comments</ResourceButton>
          <ResourceButton onClick={goAlbums}>Albums</ResourceButton>
          <ResourceButton onClick={goPhotos}>Photos</ResourceButton>
          <ResourceButton onClick={goTodos}>Todos</ResourceButton>
          <ResourceButton onClick={goUsers}>Users</ResourceButton>
        </Box>
      </main>
    </div>
  );
};

export default Main;
