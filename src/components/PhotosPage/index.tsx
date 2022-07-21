import React from "react";

import { Box, Text } from "@chakra-ui/react";

import { TPhoto } from "../../types";

interface Props {
  children?: React.ReactNode;
  photo: TPhoto;
}

const PhotosPage: React.FC<Props> = ({ photo }) => {
  const { albumId, id, title, url, thumbnailUrl } = photo;

  return (
    <Box bg="#437276" maxH="auto" padding={2}>
      <Text fontSize="sm">{albumId}</Text>
      <Text fontSize="sm">{title}</Text>
      <Text fontSize="sm">url</Text>
      <Text fontSize="sm">thumbnailUrl</Text>
    </Box>
  );
};

export default PhotosPage;
