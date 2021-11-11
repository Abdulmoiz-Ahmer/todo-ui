import React from "react";

interface AddBoxProps {
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todoText: string;
}

export const AddBox = function AddBox(props: AddBoxProps) {
  const { onInputChange, todoText } = props;
  return (
    <input
      type="text"
      onChange={onInputChange}
      value={todoText}
      placeholder="ToDo"
    />
  );
};
