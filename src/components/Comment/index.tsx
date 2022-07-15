import React from "react";

import { SimpleGrid, Box, Text } from "@chakra-ui/react";

const Comment = () => {
  return (
    <div>
      <SimpleGrid columns={1} spacing={5}>
        <Box bg="#437276" maxH="auto">
          <Text fontSize="sm">postId</Text>
          <Text fontSize="sm">name</Text>
          <Text fontSize="sm">email</Text>
          <Text fontSize="sm">body</Text>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Comment;
