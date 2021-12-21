import React from "react";
import { TodoItem } from "../../entity/TodoItem";
import { ListItem } from "../../view";
import { IListProps } from "./IListProps";

export const List = function List(props: IListProps) {
  const { items } = props;
  return (
    <ul data-testid="todo-list-1">
      {items?.map((item: TodoItem) => {
        return <ListItem item={item} key={item.id} />;
      })}
    </ul>
  );
};
