import React from "react";

import { SimpleGrid, Box, Text, Heading } from "@chakra-ui/react";

import { useAppSelector, useAppDispatch } from "../../hooks";

const Post = () => {
  const post = useAppSelector((state) => state.post.detail);
  const posts = useAppSelector((state) => state.post.list);
  console.log(posts);

  return (
    <div>
      <SimpleGrid columns={1} spacing={5}>
        <Box bg="#437276" maxH="auto">
          <Heading as="h5" size="sm">
            Title
          </Heading>
          <Text fontSize="sm">id</Text>
          <Text fontSize="sm">body</Text>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Post;
