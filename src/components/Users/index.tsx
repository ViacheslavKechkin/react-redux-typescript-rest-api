import React, { useEffect } from "react";

import { Container, SimpleGrid } from "@chakra-ui/react";

import UsersPage from "../UsersPage";
import ResourceButton from "../../primitive/Button";

import { useAppSelector, useAppDispatch } from "../../hooks";
import useAppNavigation from "../../hooks/useAppNavigation";

import { getUserThunk } from "../../store/userSlice";

const Users = () => {
  const users = useAppSelector((state) => state.user.list);

  const { goMain } = useAppNavigation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserThunk({}));
  }, []);

  return (
    <div className="container">
      <ResourceButton onClick={goMain}>Back Main</ResourceButton>
      Users
      <Container maxW="1024px">
        <SimpleGrid columns={1} spacing={5} paddingBottom={10}>
          {users.result.map((user) => {
            return <UsersPage user={user} key={`key-${user.id}`} />;
          })}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Users;
