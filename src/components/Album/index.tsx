import React from "react";

import { SimpleGrid, Box, Text, Heading } from "@chakra-ui/react";

import { useAppSelector, useAppDispatch } from "../../hooks";

import { TArray, TAlbum } from "../../types";

interface Props {
  children?: React.ReactNode;
  albums: TArray<TAlbum>;
}

const Album: React.FC<Props> = ({ albums }) => (
  <SimpleGrid columns={1} spacing={5} paddingBottom={10}>
    {albums.result.map((album) => {
      const { id, userId, title } = album;

      return (
        <Box bg="#437276" maxH="auto" key={`key-${id}`}>
          <Text fontSize="sm">userId: {userId}</Text>
          <Text fontSize="sm">{title}</Text>
        </Box>
      );
    })}
  </SimpleGrid>
);

export default Album;
