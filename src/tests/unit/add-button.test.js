import React from "react";
// import { render, fireEvent, screen } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { TodoItemUseCase } from "../../usecase/TodoItemUseCase";
import { RestClient } from "../../adapter/RestClient";
import { useTodoContainer } from "../../container/useTodoContainer";
import faker from "faker";
import { config } from "../../config";
test("todo-text", async () => {
  const { result, waitForValueToChange } = renderHook(() =>
    useTodoContainer({
      useCase: new TodoItemUseCase(new RestClient(config.backend_url)),
    })
  );

  await waitForValueToChange(
    () => {
      return result.current.state.todoList;
    },
    { timeout: 5000 }
  );

  const previousLength = result.current.state.todoList.length;

  const text = faker.lorem.sentence();
  expect(result.current.state.todoText).toBe("");

  await act(async () => {
    result.current.functions.onInputChange({ target: { value: text } });
  });

  await act(async () => {
    result.current.functions.handleButtonClick();
  });

  await waitForValueToChange(
    () => {
      return result.current.state.todoList;
    },
    { timeout: 2000 }
  );

  expect(result.current.state.todoList.length).toBeGreaterThan(previousLength);
});
