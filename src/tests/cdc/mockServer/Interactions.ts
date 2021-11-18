import {
  somethingLike,
  eachLike,
} from "@pact-foundation/pact/src/dsl/matchers";

export class Interactions {
  getAllTodoItems(expectedOutCome: object): any {
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
          "Content-Type": "application/json; charset=utf-8",
        },
        body: eachLike(expectedOutCome),
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
        headers: {
          "Content-Type": "application/json",
        },
        body: { description },
      },
      willRespondWith: {
        status: 200,
        body: somethingLike({
          id: "619597be1161467d112ccc11",
          description,
        }),
      },
    };
  }
}
