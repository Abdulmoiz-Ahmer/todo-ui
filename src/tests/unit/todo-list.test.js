import React from "react";
// import { render, fireEvent, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { TodoItemUseCase } from "../../usecase/TodoItemUseCase";
import { RestClient } from "../../adapter/RestClient";
import { useTodoContainer } from "../../container/useTodoContainer";
import { config } from "../../config";

test("todo-list", async () => {
  const { result, waitForValueToChange } = renderHook(() =>
    useTodoContainer({
      useCase: new TodoItemUseCase(new RestClient(config.backend_url)),
    })
  );

  await waitForValueToChange(
    () => {
      return result.current.state.todoList;
    },
    { timeout: 2000 }
  );

  expect(result.current.state.todoList).not.toHaveLength(0);
});
