import React, { useEffect } from "react";

import { Container, SimpleGrid, Text, Box } from "@chakra-ui/react";

import Photo from "../Photo";
import ActionButton from "../../primitive/Button";
import PhotoImage from "../PhotoImage";

import { useAppSelector, useAppDispatch } from "../../hooks";
import useAppNavigation from "../../hooks/useAppNavigation";

import { getPhotoThunk } from "../../store/photoSlice";

const PhotosPage = () => {
  const photos = useAppSelector((state) => state.photo.list);
  const { goMain } = useAppNavigation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPhotoThunk({}));
  }, []);

  return (
    <div className="container">
      <ActionButton onClick={goMain}>Back Main</ActionButton>
      <Text fontSize="lg">Photos</Text>
      {photos.result.length ? (
        <Container maxW="1024px">
          <SimpleGrid columns={1} spacing={5} paddingBottom={10}>
            {photos.result.map((photo) => (
              <Photo photo={photo} key={`key-${photo.id}`} />
            ))}
          </SimpleGrid>
        </Container>
      ) : (
        <Box justifyContent="center">
          <PhotoImage />
        </Box>
      )}
    </div>
  );
};

export default PhotosPage;
