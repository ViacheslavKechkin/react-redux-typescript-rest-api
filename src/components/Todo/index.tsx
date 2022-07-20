import React from "react";

import { SimpleGrid, Box, Text, Checkbox } from "@chakra-ui/react";

import { TArray, TTodo } from "../../types";

interface Props {
  children?: React.ReactNode;
  todos: TArray<TTodo>;
}

const Todo: React.FC<Props> = ({ todos }) => (
  <SimpleGrid columns={1} spacing={5} paddingBottom={10}>
    {todos.result.map((todo) => {
      const { completed, id, title, userId } = todo;

      return (
        <Box bg="#437276" maxH="auto" key={`key-${id}`} padding={2}>
          <Text fontSize="sm">{userId}</Text>
          <Text fontSize="sm">{title}</Text>
          <Checkbox isChecked={completed}>completed</Checkbox>
        </Box>
      );
    })}
  </SimpleGrid>
);

export default Todo;
