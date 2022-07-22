import React, { useEffect } from "react";

import { Container, SimpleGrid, Text, Box } from "@chakra-ui/react";

import Album from "../Album";
import ActionButton from "../../primitive/Button";
import AlbumImage from "../AlbumImage";

import { useAppSelector, useAppDispatch } from "../../hooks";
import useAppNavigation from "../../hooks/useAppNavigation";

import { getAlbumThunk } from "../../store/albumSlice";

const AlbumsPage = () => {
  const albums = useAppSelector((state) => state.album.list);
  const { goMain } = useAppNavigation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAlbumThunk({}));
  }, []);

  return (
    <div className="container">
      <ActionButton onClick={goMain}>Back Main</ActionButton>
      <Text fontSize="lg">Albums</Text>
      {albums.result.length ? (
        <Container maxW="1024px">
          <SimpleGrid columns={1} spacing={5} paddingBottom={10}>
            {albums.result.map((album) => (
              <Album album={album} key={`key-${album.id}`} />
            ))}
          </SimpleGrid>
        </Container>
      ) : (
        <Box justifyContent="center">
          <AlbumImage />
        </Box>
      )}
    </div>
  );
};

export default AlbumsPage;
