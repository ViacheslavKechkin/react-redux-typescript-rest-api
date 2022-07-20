import React, { useEffect } from "react";

import { Container } from "@chakra-ui/react";

import Todo from "../Todo";
import ResourceButton from "../../primitive/Button";

import { useAppSelector, useAppDispatch } from "../../hooks";
import useAppNavigation from "../../hooks/useAppNavigation";

import { getTodoThunk } from "../../store/todoSlice";

const Todos = () => {
  const todos = useAppSelector((state) => state.todo.list);

  const { goMain } = useAppNavigation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodoThunk({}));
  }, []);

  return (
    <div className="container">
      <ResourceButton onClick={goMain}>Back Main</ResourceButton>
      Todos
      <Container maxW="1024px">
        <Todo todos={todos} />
      </Container>
    </div>
  );
};

export default Todos;
