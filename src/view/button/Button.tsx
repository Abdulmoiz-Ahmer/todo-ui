import React from "react";

interface ButtonProps {
  onButtonClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Button = function AddBox(props: ButtonProps) {
  const { onButtonClick } = props;
  return <button onClick={onButtonClick}>Add</button>;
};
