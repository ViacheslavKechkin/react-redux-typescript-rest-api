import React, { useEffect } from "react";

import { Container, SimpleGrid, Text } from "@chakra-ui/react";

import Post from "../Post";
import ActionButton from "../../primitive/Button";

import { useAppSelector, useAppDispatch } from "../../hooks";
import useAppNavigation from "../../hooks/useAppNavigation";

import { getPostsThunk } from "../../store/postSlice";

const PostsPage = () => {
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
      <Text fontSize="lg">Posts</Text>
      <Container maxW="1024px">
        <SimpleGrid columns={1} spacing={5} paddingBottom={10}>
          {posts.result.map((post) => (
            <Post post={post} key={`key-${post.id}`} />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default PostsPage;
