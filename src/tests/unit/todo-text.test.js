import React from "react";
// import { render, fireEvent, screen } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { TodoItemUseCase } from "../../usecase/TodoItemUseCase";
import { RestClient } from "../../adapter/RestClient";
import { useTodoContainer } from "../../container/useTodoContainer";
import faker from "faker";
import { config } from "../../config";

test("todo-text", async () => {
  const { result } = renderHook(() =>
    useTodoContainer({
      useCase: new TodoItemUseCase(new RestClient(config.backend_url)),
    })
  );

  const text = faker.lorem.sentence();
  expect(result.current.state.todoText).toBe("");

  await act(async () => {
    result.current.functions.onInputChange({ target: { value: text } });
  });

  expect(result.current.state.todoText).toBe(text);
});
