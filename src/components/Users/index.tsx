import React, { useEffect } from "react";

import { Container } from "@chakra-ui/react";

import User from "../User";
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
        <User users={users} />
      </Container>
    </div>
  );
};

export default Users;
