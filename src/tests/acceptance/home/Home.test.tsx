import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { ToDo } from "../../../view";
import { TodoItemUseCase } from "../../../usecase/TodoItemUseCase";
import faker from "faker";
import { RestClient } from "../../../adapter/RestClient";
import { renderHook, act } from "@testing-library/react-hooks";
import { useTodoContainer } from "../../../container/useTodoContainer";

test("User should be able to see old lists if they are already Present", async () => {
  const { result, waitForValueToChange } = renderHook(() =>
    useTodoContainer({
      useCase: new TodoItemUseCase(
        new RestClient("http://todo.api.cryptobros.site/api")
      ),
    })
  );

  await waitForValueToChange(
    () => {
      return result.current.state.todoList;
    },
    { timeout: 5000 }
  );

  expect(result.current.state.todoList).not.toBeUndefined();
  expect(result.current.state.todoList).not.toBeNull();
  expect(result.current.state.todoList).not.toBe(null);
  expect(result.current.state.todoList).not.toEqual(null);
  expect(result.current.state.todoList).not.toBe("");
  expect(result.current.state.todoList).not.toHaveLength(0);

  render(
    <ToDo
      buttonDisabilityStatus={false}
      items={result.current.state.todoList}
    />
  );

  // List of todos
  const listElement = screen.getByRole("list");
  expect(listElement).toBeInTheDocument();
});

test("Adding a TODO item", async () => {
  // let { result, waitForValueToChange, rerender };
  let obj = renderHook(() =>
    useTodoContainer({
      useCase: new TodoItemUseCase(
        new RestClient("http://todo.api.cryptobros.site/api")
      ),
    })
  );

  render(
    <ToDo
      todoText={obj.result.current.state.todoText}
      onButtonClick={obj.result.current.functions.handleButtonClick}
      onInputChange={obj.result.current.functions.onInputChange}
      buttonDisabilityStatus={obj.result.current.state.buttonDisabilityStatus}
      items={[]}
    />
  );

  const text = faker.lorem.sentence();

  // List contains input to add.
  const inputTextElement = screen.getByPlaceholderText("ToDo");

  fireEvent.change(inputTextElement, {
    target: { value: text },
  });

  await obj.waitForValueToChange(
    () => {
      return obj.result.current.state.todoList;
    },
    { timeout: 5000 }
  );

  obj.rerender(
    <ToDo
      todoText={obj.result.current.state.todoText}
      onButtonClick={obj.result.current.functions.handleButtonClick}
      onInputChange={obj.result.current.functions.onInputChange}
      buttonDisabilityStatus={false}
      items={[]}
    />
  );

  // List button to add.
  await act(async () => {
    obj.result.current.functions.handleButtonClick();
  });

  // List button to add.
  const addButtonElement = screen.getByText("Add");
  fireEvent.click(addButtonElement);

  await obj.waitForValueToChange(
    () => {
      return obj.result.current.state.todoList;
    },
    { timeout: 4000 }
  );

  obj.rerender(
    <ToDo
      todoText={obj.result.current.state.todoText}
      onButtonClick={obj.result.current.functions.handleButtonClick}
      onInputChange={obj.result.current.functions.onInputChange}
      buttonDisabilityStatus={obj.result.current.state.buttonDisabilityStatus}
      items={obj.result.current.state.todoList}
    />
  );

  // List of todos
  const listElement = screen.getByRole("list");
  expect(listElement).toBeInTheDocument();

  // List Item
  const listItemElement = screen.queryAllByRole("listitem");
  expect(listItemElement.firstChild).not.toBeNull();
});
