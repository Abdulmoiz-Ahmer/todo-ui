import React from "react";

interface ButtonProps {
  onButtonClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const AddButton = function AddButton(props: ButtonProps) {
  const { onButtonClick } = props;
  return <button onClick={onButtonClick}>Add</button>;
};
