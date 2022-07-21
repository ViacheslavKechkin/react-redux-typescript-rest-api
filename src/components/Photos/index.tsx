import React, { useEffect } from "react";

import { Container, SimpleGrid } from "@chakra-ui/react";

import PhotosPage from "../PhotosPage";
import ActionButton from "../../primitive/Button";

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
      <ActionButton onClick={goMain}>Back Main</ActionButton>
      Photos
      <Container maxW="1024px">
        <SimpleGrid columns={1} spacing={5} paddingBottom={10}>
          {photos.result.map((photo) => {
            return <PhotosPage photo={photo} key={`key-${photo.id}`} />;
          })}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Photos;
