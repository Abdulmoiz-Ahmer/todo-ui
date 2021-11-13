import React from "react";
import { TodoItemUseCase } from "../../usecase/TodoItemUseCase";
import { RestClient } from "../../adapter/RestClient";

test("Testing todo find all usecase", async () => {
  const restClient = new RestClient("http://todo.api.cryptobros.site/api");
  const todoUseCase = new TodoItemUseCase(restClient);
  const items = await todoUseCase.findAll();
  expect(items).not.toBeUndefined();
  expect(items).not.toBeNull();
  expect(items).not.toBe(null);
  expect(items).not.toEqual(null);
  expect(items).not.toBe("");
  expect(items).not.toHaveLength(0);
});
