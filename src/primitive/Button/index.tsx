import React, { useRef } from "react";

import { Button } from "@chakra-ui/react";

import { IPropsButton } from "../../interfaces";

const ActionButton: React.FC<IPropsButton> = (props) => {
  const rootRef = useRef<HTMLButtonElement>(null);

  const { onClick, ...restProps } = props;

  return (
    <Button
      colorScheme="blackAlpha"
      w="100px"
      marginTop={5}
      ref={rootRef}
      onClick={onClick}
      {...restProps}
    >
      {props.children}
    </Button>
  );
};

export default ActionButton;
