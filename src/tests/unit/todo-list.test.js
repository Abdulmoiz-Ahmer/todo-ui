import React from "react";
// import { render, fireEvent, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { TodoItemUseCase } from "../../usecase/TodoItemUseCase";
import { RestClient } from "../../adapter/RestClient";
import { useTodoContainer } from "../../container/useTodoContainer";
test("todo-list", async () => {
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
    { timeout: 2000 }
  );
  
  expect(result.current.state.todoList).not.toHaveLength(0);
});
