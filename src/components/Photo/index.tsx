import React from "react";

import { SimpleGrid, Box, Text } from "@chakra-ui/react";

import { TArray, TPhoto } from "../../types";

interface Props {
  children?: React.ReactNode;
  photos: TArray<TPhoto>;
}

const Photo: React.FC<Props> = ({ photos }) => (
  <SimpleGrid columns={1} spacing={5} paddingBottom={10}>
    {photos.result.map((photo) => {
      const { albumId, id, title, url, thumbnailUrl } = photo;

      return (
        <Box bg="#437276" maxH="auto" key={`key-${id}`}>
          <Text fontSize="sm">{albumId}</Text>
          <Text fontSize="sm">{title}</Text>
          <Text fontSize="sm">url</Text>
          <Text fontSize="sm">thumbnailUrl</Text>
        </Box>
      );
    })}
  </SimpleGrid>
);

export default Photo;
