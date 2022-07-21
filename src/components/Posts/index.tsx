import React, { useEffect } from "react";

import { Container, SimpleGrid } from "@chakra-ui/react";

import PostsPage from "../PostsPage";
import ActionButton from "../../primitive/Button";

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
      <ActionButton onClick={goMain}>Back Main</ActionButton>
      Posts
      <Container maxW="1024px">
        <SimpleGrid columns={1} spacing={5} paddingBottom={10}>
          {posts.result.map((post) => {
            return <PostsPage post={post} key={`key-${post.id}`} />;
          })}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Posts;
