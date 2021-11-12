import React from "react";
import { ListItem } from "../../view";
import {IListProps} from "./IListProps";



export const List = function List(props: IListProps) {
  const { items } = props;
  return (
    <ul role="list">
      {items?.map((item: TodoItem) => {
        return <ListItem item={item} key={item.id} />;
      })}
    </ul>
  );
};
