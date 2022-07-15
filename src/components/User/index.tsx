import React from "react";

import { SimpleGrid, Box, Text, Checkbox } from "@chakra-ui/react";

const User = () => {
  return (
    <div>
      <SimpleGrid columns={1} spacing={5}>
        <Box bg="#437276" maxH="auto">
          <Text fontSize="sm">name:</Text>
          <Text fontSize="sm">username:</Text>
          <Text fontSize="sm">email:</Text>
          <Text fontSize="sm">
            address:
            <Text fontSize="sm">street:</Text>
            <Text fontSize="sm">suite:</Text>
            <Text fontSize="sm">city:</Text>
            <Text fontSize="sm">zipcode:</Text>
            <Text fontSize="sm">
              geo:
              <Text fontSize="sm">lat:</Text>
              <Text fontSize="sm">lng:</Text>
            </Text>
          </Text>

          <Text fontSize="sm">phone:</Text>
          <Text fontSize="sm">website:</Text>
          <Text fontSize="sm">
            company:
            <Text fontSize="sm">name:</Text>
            <Text fontSize="sm">catchPhrase:</Text>
            <Text fontSize="sm">bs:</Text>
          </Text>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default User;
