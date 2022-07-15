import React from "react";

import { Container } from "@chakra-ui/react";

import Album from "../Album";

import { useAppSelector, useAppDispatch } from "../../hooks";

const Albums = () => {
  return (
    <div className="container">
      Albums
      <Container maxW="1024px">
        <Album />
      </Container>
    </div>
  );
};

export default Albums;
