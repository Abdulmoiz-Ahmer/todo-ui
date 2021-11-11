import React, { ComponentType, ElementType, ReactNode } from "react";

type ListProps = {
  as?: React.ReactNode;
  children: any;
};

export const List = function List(props: ListProps) {
  const { children } = props;
  return <ul role="list">{children}</ul>;
};
