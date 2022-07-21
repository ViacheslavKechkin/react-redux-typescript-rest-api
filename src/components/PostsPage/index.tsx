import React from "react";

import { SimpleGrid, Box, Text, Heading } from "@chakra-ui/react";

import { TArray, TPost } from "../../types";

interface Props {
  children?: React.ReactNode;
  post: TPost;
}

const PostsPage: React.FC<Props> = ({ post }) => {
  const { body, id, title, userId } = post;

  return (
    <Box bg="#437276" maxH="auto" padding={2}>
      <Text fontSize="sm">{id}</Text>
      <Heading as="h5" size="sm">
        {title}
      </Heading>
      <Text fontSize="sm">{body}</Text>
      <Text fontSize="sm">UserID: {userId}</Text>
    </Box>
  );
};

export default PostsPage;
