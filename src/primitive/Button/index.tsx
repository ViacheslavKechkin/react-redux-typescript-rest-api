import React, { useRef } from "react";

import { Button } from "@chakra-ui/react";

import { IProps } from "../../interfaces";

const ResourceButton: React.FC<IProps> = (props) => {
  const rootRef = useRef<HTMLButtonElement>(null);

  const { onClick, ...restProps } = props;

  return (
    <Button
      colorScheme="blackAlpha"
      w="100px"
      ref={rootRef}
      onClick={onClick}
      {...restProps}
    >
      {props.children}
    </Button>
  );
};

export default ResourceButton;
