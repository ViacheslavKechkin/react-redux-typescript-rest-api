import React from "react";

import { Box, Text } from "@chakra-ui/react";

import { TComment } from "../../types";

interface Props {
  children?: React.ReactNode;
  comment: TComment;
}

const Comment: React.FC<Props> = ({ comment }) => {
  const { postId, id, name, email, body } = comment;

  return (
    <Box bg="#437276" maxH="auto" padding={2}>
      <Text fontSize="sm">PostId: {postId}</Text>
      <Text fontSize="sm">Name: {name}</Text>
      <Text fontSize="sm">Email: {email}</Text>
      <Text fontSize="sm">{body}</Text>
    </Box>
  );
};

export default Comment;
