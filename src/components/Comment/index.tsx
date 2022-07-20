import React from "react";

import { SimpleGrid, Box, Text } from "@chakra-ui/react";

import { TArray, TComment } from "../../types";

interface Props {
  children?: React.ReactNode;
  comments: TArray<TComment>;
}

const Comment: React.FC<Props> = ({ comments }) => (
  <SimpleGrid columns={1} spacing={5} paddingBottom={10}>
    {comments.result.map((commet) => {
      const { postId, id, name, email, body } = commet;

      return (
        <Box bg="#437276" maxH="auto" key={`key-${id}`}>
          <Text fontSize="sm">PostId: {postId}</Text>
          <Text fontSize="sm">Name: {name}</Text>
          <Text fontSize="sm">Email: {email}</Text>
          <Text fontSize="sm">{body}</Text>
        </Box>
      );
    })}
  </SimpleGrid>
);

export default Comment;
