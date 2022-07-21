import React from "react";

import { Box, Text } from "@chakra-ui/react";

import ActionButton from "../../primitive/Button";

import { useAppSelector, useAppDispatch } from "../../hooks";
import useAppNavigation from "../../hooks/useAppNavigation";

import "./style.scss";

const Main = () => {
  const post = useAppSelector((state) => state.post.detail);
  const posts = useAppSelector((state) => state.post.list);
  const { goPosts, goComments, goAlbums, goPhotos, goTodos, goUsers } =
    useAppNavigation();
  const dispatch = useAppDispatch();

  const navItemsConfig = [
    {
      label: "Posts",
      callback: goPosts,
    },
    {
      label: "Comments",
      callback: goComments,
    },
    {
      label: "Albums",
      callback: goAlbums,
    },
    {
      label: "Photos",
      callback: goPhotos,
    },
    {
      label: "Todos",
      callback: goTodos,
    },
    {
      label: "Users",
      callback: goUsers,
    },
  ];

  return (
    <div className="container">
      <main className="main-content">
        <Text fontSize="lg">Main page</Text>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexWrap={"wrap"}
          gap={"10px"}
        >
          {navItemsConfig.map((config) => {
            const { label, callback } = config;
            return (
              <ActionButton onClick={callback} key={`key-${label}`}>
                {label}
              </ActionButton>
            );
          })}
        </Box>
      </main>
    </div>
  );
};

export default Main;
