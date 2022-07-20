import React from "react";

import { SimpleGrid, Box, Text } from "@chakra-ui/react";

import { TArray, TUser } from "../../types";

interface Props {
  children?: React.ReactNode;
  users: TArray<TUser>;
}

const User: React.FC<Props> = ({ users }) => (
  <SimpleGrid columns={1} spacing={5} paddingBottom={10}>
    {users.result.map((user) => {
      const { id, name, username, email, phone, website, company } = user;

      return (
        <Box bg="#437276" maxH="auto" key={`key-${id}`}>
          <Text fontSize="sm">name: {name}</Text>
          <Text fontSize="sm">username: {username}</Text>
          <Text fontSize="sm">email: {email}</Text>
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
          <Text fontSize="sm">phone: {phone}</Text>
          <Text fontSize="sm">website: {website}</Text>
          <Text fontSize="sm">
            company:
            <Text fontSize="sm">name:</Text>
            <Text fontSize="sm">catchPhrase:</Text>
            <Text fontSize="sm">bs:</Text>
          </Text>
        </Box>
      );
    })}
  </SimpleGrid>
);

export default User;
