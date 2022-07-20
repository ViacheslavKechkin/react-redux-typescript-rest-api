import React, { useEffect } from "react";

import { Container } from "@chakra-ui/react";

import Comment from "../Comment";
import ResourceButton from "../../primitive/Button";

import { getCommentThunk } from "../../store/commentSlice";

import useAppNavigation from "../../hooks/useAppNavigation";
import { useAppSelector, useAppDispatch } from "../../hooks";

const Comments = () => {
  const comments = useAppSelector((state) => state.comment.list);

  const { goMain } = useAppNavigation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCommentThunk({}));
  }, []);

  return (
    <div className="container">
      <ResourceButton onClick={goMain}>Back Main</ResourceButton>
      Comments
      <Container maxW="1024px">
        <Comment comments={comments} />
      </Container>
    </div>
  );
};

export default Comments;
