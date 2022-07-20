import React from "react";

import { SimpleGrid, Box, Text, Heading } from "@chakra-ui/react";

import { TArray, TPost } from "../../types";

interface Props {
  children?: React.ReactNode;
  posts: TArray<TPost>;
}

const Post: React.FC<Props> = ({ posts }) => (
  <SimpleGrid columns={1} spacing={5} paddingBottom={10}>
    {posts.result.map((post) => {
      const { body, id, title, userId } = post;

      return (
        <Box bg="#437276" maxH="auto" key={`key-${id}`} padding={2}>
          <Text fontSize="sm">{id}</Text>
          <Heading as="h5" size="sm">
            {title}
          </Heading>
          <Text fontSize="sm">{body}</Text>
          <Text fontSize="sm">UserID: {userId}</Text>
        </Box>
      );
    })}
  </SimpleGrid>
);

export default Post;
