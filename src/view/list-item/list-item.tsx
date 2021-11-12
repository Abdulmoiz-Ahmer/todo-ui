import React from "react";
import { TodoItem } from "../../entity/TodoItem";

interface ListItemProps {
  item: TodoItem;
}

export const ListItem = function ListItem(props: ListItemProps) {
  const { description } = props.item;
  return <li role="list-item">{description}</li>;
};
