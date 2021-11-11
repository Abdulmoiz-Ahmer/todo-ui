import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ToDo } from "../../../view";

test("Make sure TODO is rendering", () => {
  render(<ToDo />);

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
