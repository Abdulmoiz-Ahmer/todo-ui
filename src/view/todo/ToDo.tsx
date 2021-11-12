import React, { ReactNode } from "react";
import { AddBox, AddButton, List } from "../../view";
import { TodoItem } from "../../entity/TodoItem";

interface ToDoProps {
  onButtonClick: (event: React.MouseEvent<HTMLElement>) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todoText: string;
  listItems: TodoItem[];
}

export const ToDo = function Todo(props: ToDoProps) {
  const { onButtonClick, todoText, onInputChange, listItems } = props;
  return (
    <div>
      <div>
        <AddBox onInputChange={onInputChange} todoText={todoText} />
        <AddButton onButtonClick={onButtonClick} />
      </div>
      <div>
        <List items={listItems} />
      </div>
    </div>
  );
};
