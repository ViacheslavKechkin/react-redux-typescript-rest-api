import React from "react";

import { SimpleGrid, Box, Text, Heading } from "@chakra-ui/react";

import { useAppSelector, useAppDispatch } from "../../hooks";

const Album = () => {
  return (
    <div>
      <SimpleGrid columns={1} spacing={5}>
        <Box bg="#437276" maxH="auto">
          <Text fontSize="sm">userId</Text>
          <Text fontSize="sm">title</Text>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Album;
