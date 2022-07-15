import React from "react";

import { Container } from "@chakra-ui/react";

import Post from "../Post";

import { useAppSelector, useAppDispatch } from "../../hooks";

const Posts = () => {
  const post = useAppSelector((state) => state.post.detail);
  const posts = useAppSelector((state) => state.post.list);

  return (
    <div className="container">
      Posts
      <Container maxW="1024px">
        <Post />
      </Container>
    </div>
  );
};

export default Posts;
