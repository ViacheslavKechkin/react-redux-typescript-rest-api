import React, { useEffect } from "react";

import { Container, SimpleGrid } from "@chakra-ui/react";

import CommentsPage from "../CommentsPage";
import ActionButton from "../../primitive/Button";

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
      <ActionButton onClick={goMain}>Back Main</ActionButton>
      Comments
      <Container maxW="1024px">
        <SimpleGrid columns={1} spacing={5} paddingBottom={10}>
          {comments.result.map((comment) => {
            return <CommentsPage comment={comment} key={`key-${comment.id}`} />;
          })}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Comments;
