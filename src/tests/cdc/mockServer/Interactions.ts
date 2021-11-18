import { regex, somethingLike } from "@pact-foundation/pact/src/dsl/matchers";

export class Interactions {
  getAllTodoItems(expectedOutCome: Array<object>): any {
    return {
      state: "todos exist",
      uponReceiving: "a request to get all todos",
      withRequest: {
        method: "GET",
        path: "/api/todos",
      },
      willRespondWith: {
        status: 200,
        headers: {
          "Content-Type": regex({
            generate: "application/json; charset=utf-8",
            matcher: "application/json;?.*",
          }),
        },
        body: expectedOutCome,
      },
    };
  }

  createTodoItem(description: string): any {
    return {
      state: "provider allows todo item creation",
      uponReceiving: "a POST request to create an item",
      withRequest: {
        method: "POST",
        path: "/api/todo",
        body: { description },
      },
      willRespondWith: {
        status: 200,
        headers: {
          "Content-Type": regex({
            generate: "application/json; charset=utf-8",
            matcher: "application/json;?.*",
          }),
        },
        body: somethingLike({
          id: "619597be1161467d112ccc11",
          description,
        }),
      },
    };
  }
}
