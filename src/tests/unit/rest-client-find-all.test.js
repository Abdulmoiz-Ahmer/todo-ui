import React from "react";
import { TodoItemUseCase } from "../../usecase/TodoItemUseCase";
import { RestClient } from "../../adapter/RestClient";
import { config } from "../../config";

test("rest client find all todo", async () => {
  const restClient = new RestClient(config.backend_url);
  const records = await restClient.getAllTodoItems();
  expect(records.length).toBeGreaterThan(1);
});
