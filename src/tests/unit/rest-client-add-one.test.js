import React from "react";
import faker from "faker";
import { RestClient } from "../../adapter/RestClient";
import { config } from "../../config";

test("rest client add one todo", async () => {
  const restClient = new RestClient(config.backend_url);
  const record = await restClient.createTodoItem(faker.lorem.sentence());
  expect(record).not.toBeNull();
  expect(record).toHaveProperty("id");
  expect(record).toHaveProperty("description");
});
