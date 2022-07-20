import React, { useEffect } from "react";

import { Container } from "@chakra-ui/react";

import Photo from "../Photo";
import ResourceButton from "../../primitive/Button";

import { useAppSelector, useAppDispatch } from "../../hooks";
import useAppNavigation from "../../hooks/useAppNavigation";

import { getPhotoThunk } from "../../store/photoSlice";

const Photos = () => {
  const photos = useAppSelector((state) => state.photo.list);

  const { goMain } = useAppNavigation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPhotoThunk({}));
  }, []);

  return (
    <div className="container">
      <ResourceButton onClick={goMain}>Back Main</ResourceButton>
      Photos
      <Container maxW="1024px">
        <Photo photos={photos} />
      </Container>
    </div>
  );
};

export default Photos;
