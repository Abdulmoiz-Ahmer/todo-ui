import React from "react";
import { AddBox, AddButton, List } from "../../view";
import { TodoItem } from "../../entity/TodoItem";
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
    <div>
      <div>
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
