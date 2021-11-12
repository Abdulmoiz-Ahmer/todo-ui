import React, { ReactNode } from "react";
import { ListItem } from "../../view";
import { TodoItem } from "../../entity/TodoItem";

interface ListProps {
  items: TodoItem[];
}

export const List = function List(props: ListProps) {
  const { items } = props;
  return (
    <ul role="list">
      {items?.map((item: TodoItem) => {
        return <ListItem item={item} key={item.id} />;
      })}
    </ul>
  );
};
