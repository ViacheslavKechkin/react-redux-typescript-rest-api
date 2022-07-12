import React from "react";
import { useRoutes } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react"
import { ColorModeScript } from "@chakra-ui/react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Routes from "./Routes";

export const App = () => {
  const routes = useRoutes(Routes);

  return (
    <ChakraProvider>
      <Header />
      {routes}
      <Footer />
      <ColorModeScript />
    </ChakraProvider>
  )
}
