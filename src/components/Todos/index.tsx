import React, { useEffect } from "react";

import { Container, SimpleGrid } from "@chakra-ui/react";

import TodosPage from "../TodosPage";
import ActionButton from "../../primitive/Button";

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
      <ActionButton onClick={goMain}>Back Main</ActionButton>
      Todos
      <Container maxW="1024px">
        <SimpleGrid columns={1} spacing={5} paddingBottom={10}>
          {todos.result.map((todo) => {
            return <TodosPage todo={todo} key={`key-${todo.id}`} />;
          })}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Todos;
