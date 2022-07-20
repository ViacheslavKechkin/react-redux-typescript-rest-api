import React, { useEffect } from "react";

import { Container } from "@chakra-ui/react";

import Post from "../Post";
import ResourceButton from "../../primitive/Button";

import { useAppSelector, useAppDispatch } from "../../hooks";
import useAppNavigation from "../../hooks/useAppNavigation";

import { getPostsThunk } from "../../store/postSlice";

const Posts = () => {
  const post = useAppSelector((state) => state.post.detail);
  const posts = useAppSelector((state) => state.post.list);

  const { goMain } = useAppNavigation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsThunk({}));
  }, []);

  return (
    <div className="container">
      <ResourceButton onClick={goMain}>Back Main</ResourceButton>
      Posts
      <Container maxW="1024px">
        <Post posts={posts} />
      </Container>
    </div>
  );
};

export default Posts;
