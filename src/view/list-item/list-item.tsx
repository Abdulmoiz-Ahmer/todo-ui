import React from "react";

interface ListItemProps {
  description: string;
}

export const ListItem = function ListItem(props: ListItemProps) {
  const { description } = props;
  return <li role="list-item">{description}</li>;
};
