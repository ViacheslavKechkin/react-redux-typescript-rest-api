import React from "react";

import { Container } from "@chakra-ui/react";

import { useAppSelector, useAppDispatch } from "../../hooks";

import User from "../User";

const Users = () => {
  return (
    <div className="container">
      Users
      <Container maxW="1024px">
        <User />
      </Container>
    </div>
  );
};

export default Users;
