import React from "react";

import { SimpleGrid, Box, Text, Checkbox } from "@chakra-ui/react";

const Todo = () => {
  return (
    <div>
      <SimpleGrid columns={1} spacing={5}>
        <Box bg="#437276" maxH="auto">
          <Text fontSize="sm">userId</Text>
          <Text fontSize="sm">title</Text>
          <Checkbox isChecked={true}>completed</Checkbox>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Todo;
