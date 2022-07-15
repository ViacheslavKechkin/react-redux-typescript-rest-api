import React from "react";

import { Container } from "@chakra-ui/react";

import { useAppSelector, useAppDispatch } from "../../hooks";

import Todo from "../Todo";

const Todos = () => {
  return (
    <div className="container">
      Todos
      <Container maxW="1024px">
        <Todo />
      </Container>
    </div>
  );
};

export default Todos;
