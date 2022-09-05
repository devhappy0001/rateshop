import React from 'react';
import { Button } from "@material-ui/core";

const ButtonUI = (props) => {
  return (
    <Button
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default ButtonUI;