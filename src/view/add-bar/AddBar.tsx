import React from "react";

interface AddBarProps {
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todoText: string;
}

export const AddBar = function AddBar(props: AddBarProps) {
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
