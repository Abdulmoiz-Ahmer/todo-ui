import React from "react";
import { render, screen } from "@testing-library/react";
import { List } from "../../../view";
import { TodoItem } from "../../../entity/TodoItem";

test("Make sure list is rendering", () => {
  const items: TodoItem[] = [
    TodoItem.fromJSON({
      id: "618ddb6afe72881053259ea1",
      description: "Buy some sugar",
    }),
  ];
  render(<List items={items} />);
  const listElement = screen.getByRole("list");
  expect(listElement).toBeInTheDocument();
});
