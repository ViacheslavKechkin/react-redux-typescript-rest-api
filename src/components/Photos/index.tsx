import React from "react";

import { Container } from "@chakra-ui/react";

import Photo from "../Photo";

import { useAppSelector, useAppDispatch } from "../../hooks";

const Photos = () => {
  return (
    <div className="container">
      Photos
      <Container maxW="1024px">
        <Photo />
      </Container>
    </div>
  );
};

export default Photos;
