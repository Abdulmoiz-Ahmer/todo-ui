import React from "react";
import { IListItemProps } from "./IListItemProps";

export const ListItem = function ListItem(props: IListItemProps) {
  const { description } = props.item;
  return (
    <li role="list-item" className="list-item">
      {description}
    </li>
  );
};
