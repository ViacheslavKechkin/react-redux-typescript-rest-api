import React from "react";

import { Box, Text, Image } from "@chakra-ui/react";

import { TPhoto } from "../../types";

interface Props {
  children?: React.ReactNode;
  photo: TPhoto;
}

const Photo: React.FC<Props> = ({ photo }) => {
  const { albumId, id, title, url, thumbnailUrl } = photo;

  const property = {
    imageUrl: thumbnailUrl,
    imageAlt: "Photo description",
  };

  return (
    <Box
      bg="#437276"
      maxH="auto"
      padding={2}
      alignItems="center"
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <Text fontSize="sm">{albumId}</Text>
      <Image src={property.imageUrl} alt={property.imageAlt} />
      <Text fontSize="sm">{title}</Text>
    </Box>
  );
};

export default Photo;
