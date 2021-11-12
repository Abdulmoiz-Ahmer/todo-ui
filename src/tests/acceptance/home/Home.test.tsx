import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { ToDo } from "../../../view";
import { TodoItem } from "../../../entity/TodoItem";

import faker from "faker";
test("Adding a TODO item", () => {
  render(<ToDo />);

  const todoText = faker.lorem.sentence();

  // List contains input to add.
  const inputTextElement = screen.getByPlaceholderText("ToDo");
  fireEvent.change(inputTextElement, {
    target: { value: todoText },
  });
  expect(inputTextElement.value).toBe(todoText);

  // List button to add.
  const addButtonElement = screen.getByText("Add");
  fireEvent.click(addButtonElement);
  expect(screen.getByText("Add")).toBeDisabled();

  // List of todos
  const listElement = screen.getByRole("list");
  expect(listElement).toBeInTheDocument();

  // List Item
  const listItemElement = screen.getByRole("list-item");
  expect(listItemElement).toBeInTheDocument();

  // Checking whether list is added or not
  const listItem = screen.getByText(todoText);
  expect(listItem).toBeInTheDocument();
});