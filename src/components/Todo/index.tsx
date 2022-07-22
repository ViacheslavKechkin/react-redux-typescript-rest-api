import React from "react";

import { Box, Text, Checkbox } from "@chakra-ui/react";

import { TTodo } from "../../types";

interface Props {
  children?: React.ReactNode;
  todo: TTodo;
}

const Todo: React.FC<Props> = ({ todo }) => {
  const { completed, id, title, userId } = todo;

  return (
    <Box bg="#437276" maxH="auto" padding={2}>
      <Text fontSize="sm">{userId}</Text>
      <Text fontSize="sm">{title}</Text>
      <Checkbox isChecked={completed}>completed</Checkbox>
    </Box>
  );
};

export default Todo;
