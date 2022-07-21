import React from "react";
import { useNavigate } from "react-router-dom";

import { Box } from "@chakra-ui/react";

import ActionButton from "../../primitive/Button";

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
          <ActionButton onClick={goPosts}>Posts</ActionButton>
          <ActionButton onClick={goComments}>Comments</ActionButton>
          <ActionButton onClick={goAlbums}>Albums</ActionButton>
          <ActionButton onClick={goPhotos}>Photos</ActionButton>
          <ActionButton onClick={goTodos}>Todos</ActionButton>
          <ActionButton onClick={goUsers}>Users</ActionButton>
        </Box>
      </main>
    </div>
  );
};

export default Main;
