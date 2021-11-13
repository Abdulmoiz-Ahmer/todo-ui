import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { ToDo } from "../../../view";
import { TodoItem } from "../../../entity/TodoItem";
import { TodoItemUseCase } from "../../../usecase/TodoItemUseCase";
import faker from "faker";
import { RestClient } from "../../../adapter/RestClient";

test("Adding a TODO item", async () => {
  const restClient = new RestClient("http://todo.api.cryptobros.site/api");
  const todoUseCase = new TodoItemUseCase(restClient);
  const items = await todoUseCase.findAll();
  expect(items).not.toBeUndefined();
  expect(items).not.toBeNull();
  expect(items).not.toBe(null);
  expect(items).not.toEqual(null);
  expect(items).not.toBe("");
  expect(items).not.toHaveLength(0);

  render(<ToDo buttonDisabilityStatus={false} items={items} />);

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

  // List of todos
  const listElement = screen.getByRole("list");
  expect(listElement).toBeInTheDocument();

  // List Item
  const listItemElement = screen.queryAllByRole("list-item");
  expect(listItemElement.firstChild).not.toBeNull();

  // Checking whether list is added or not
  const listItem = screen.getByText(todoText);
  expect(listItem).toBeInTheDocument();
});
