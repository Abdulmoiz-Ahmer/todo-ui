import React from "react";
import { AddBox, AddButton, List } from "../../view";
import { IToDoProps } from "./ITodoProps";

export const ToDo = function Todo(props: IToDoProps) {
  const {
    onButtonClick,
    todoText,
    onInputChange,
    items,
    buttonDisabilityStatus,
  } = props;
  return (
    <div className="todo-container">
      <div>
        <h2>TODO List</h2>
        <AddBox onInputChange={onInputChange} todoText={todoText} />
        <AddButton
          onButtonClick={onButtonClick}
          buttonDisabilityStatus={buttonDisabilityStatus}
        />
      </div>
      <div>
        <List items={items} />
      </div>
    </div>
  );
};
