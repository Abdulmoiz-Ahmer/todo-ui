import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ToDo } from "../../../view";
import { TodoItem } from "../../../entity/TodoItem";

test("Make sure TODO is rendering", () => {
  const items: TodoItem[] = [
    TodoItem.fromJSON({
      id: "618ddb6afe72881053259ea1",
      description: "Buy some sugar",
    }),
  ];

  render(<ToDo items={items} />);

  // List contains input to add.
  const inputTextElement = screen.getByPlaceholderText("ToDo");
  fireEvent.change(inputTextElement, {
    target: { value: "buy some milk" },
  });
  expect(inputTextElement.value).toBe("buy some milk");

  // List button to add.
  const addButtonElement = screen.getByText("Add");
  fireEvent.click(addButtonElement);

  // List of todos
  const listElement = screen.getByRole("list");
  expect(listElement).toBeInTheDocument();

  // List Item
  const listItemElement = screen.getByRole("list-item");
  expect(listItemElement).toBeInTheDocument();
});
