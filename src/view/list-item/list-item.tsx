import React from "react";
import { IListItemProps } from "./IListItemProps";

export const ListItem = function ListItem(props: IListItemProps) {
  const { description } = props.item;
  return (
    // eslint-disable-next-line jsx-a11y/aria-role
    <li role="list-item" className="list-item">
      {description}
    </li>
  );
};
