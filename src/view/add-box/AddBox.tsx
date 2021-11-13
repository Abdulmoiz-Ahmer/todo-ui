import React from "react";
import { IAddBoxProps } from "./IAddBoxProps";

export const AddBox = function AddBox(props: IAddBoxProps) {
  const { onInputChange, todoText } = props;
  return (
    <input
      className="todo-textbox"
      type="text"
      onChange={onInputChange}
      value={todoText}
      placeholder="ToDo"
    />
  );
};
