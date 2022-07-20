import React, { useEffect } from "react";

import { Container } from "@chakra-ui/react";

import Album from "../Album";
import ResourceButton from "../../primitive/Button";

import { useAppSelector, useAppDispatch } from "../../hooks";
import useAppNavigation from "../../hooks/useAppNavigation";

import { getAlbumThunk } from "../../store/albumSlice";

const Albums = () => {
  const albums = useAppSelector((state) => state.album.list);

  const { goMain } = useAppNavigation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAlbumThunk({}));
  }, []);

  return (
    <div className="container">
      <ResourceButton onClick={goMain}>Back Main</ResourceButton>
      Albums
      <Container maxW="1024px">
        <Album albums={albums} />
      </Container>
    </div>
  );
};

export default Albums;
