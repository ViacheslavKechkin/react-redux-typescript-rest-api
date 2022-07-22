import React from "react";

import { Box, Text } from "@chakra-ui/react";

import { TAlbum } from "../../types";

interface Props {
  children?: React.ReactNode;
  album: TAlbum;
}

const Album: React.FC<Props> = ({ album }) => {
  const { id, userId, title } = album;

  return (
    <Box bg="#437276" maxH="auto" padding={2}>
      <Text fontSize="sm">userId: {userId}</Text>
      <Text fontSize="sm">{title}</Text>
    </Box>
  );
};

export default Album;
