import React from "react";

import { Container } from "@chakra-ui/react";

import Comment from "../Comment";

import { useAppSelector, useAppDispatch } from "../../hooks";

const Comments = () => {
  return (
    <div className="container">
      Comments
      <Container maxW="1024px">
        <Comment />
      </Container>
    </div>
  );
};

export default Comments;
