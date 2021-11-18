import { RestClient } from "../../adapter/RestClient";
import { mockProvider, Interactions } from "./mockServer";

describe("API Pact test", () => {
  beforeAll(() => mockProvider.setup());
  afterEach(() => mockProvider.verify());
  afterAll(() => mockProvider.finalize());

  describe("retrieving todos", () => {
    test("todo exists", async () => {
      // set up Pact interactions
      const expectedTodos = [
        {
          id: "61958b63e52dfc6edc050bc2",
          description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        },
        {
          id: "61958b63e52dfc6edc050bc3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ];

      const interactions = new Interactions();
      await mockProvider.addInteraction(
        interactions.getAllTodoItems(expectedTodos)
      );

      const api = new RestClient(mockProvider.mockService.baseUrl);

      //   make request to Pact mock server
      const todos = await api.getAllTodoItems();

      expect(todos).toHaveLength(expectedTodos.length);
      expect(todos).toEqual(expectedTodos);
    });
  });

  describe("creating a todo", () => {
    test("receive created todo", async () => {
      // set up Pact interactions
      const expectedTodo = {
        id: "619597be1161467d112ccc11",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      };

      const interactions = new Interactions();
      await mockProvider.addInteraction(
        interactions.createTodoItem(expectedTodo.description)
      );

      const api = new RestClient(mockProvider.mockService.baseUrl);

      //   make request to Pact mock server
      const todo = await api.createTodoItem(expectedTodo.description);

      expect(todo).toHaveProperty("id");
      expect(todo).toHaveProperty("description", expectedTodo.description);
    });
  });
});
