import React, { ReactNode } from "react";

type ListProps = {
  as?: ReactNode;
  children: any;
};

export const List = function List(props: ListProps) {
  const { children } = props;
  return <ul role="list">{children}</ul>;
};
