import React from "react";

import { SimpleGrid, Box, Text } from "@chakra-ui/react";

const Photo = () => {
  return (
    <div>
      <SimpleGrid columns={1} spacing={5}>
        <Box bg="#437276" maxH="auto">
          <Text fontSize="sm">albumId</Text>
          <Text fontSize="sm">title</Text>
          <Text fontSize="sm">url</Text>
          <Text fontSize="sm">thumbnailUrl</Text>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Photo;
