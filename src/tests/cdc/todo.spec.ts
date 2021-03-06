import { RestClient } from "../../adapter/RestClient";
import { mockProvider, Interactions } from "./mockServer";

describe("API Pact test", () => {
  beforeAll(() => mockProvider.setup());
  afterEach(() => mockProvider.verify());
  afterAll(() => mockProvider.finalize());

  describe("retrieving todos", () => {
    test("todo exists", async () => {
      // set up Pact interactions
      const expectedTodo = {
        description: "Numquam sit mollitia aliquid iure quia ea ut expedita.",
      };

      const interactions = new Interactions();
      await mockProvider.addInteraction(
        interactions.getAllTodoItems(expectedTodo)
      );

      const api = new RestClient(mockProvider.mockService.baseUrl + "/api");

      //   make request to Pact mock server
      const todos = await api.getAllTodoItems();

      expect(todos).not.toHaveLength(0);
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

      const api = new RestClient(mockProvider.mockService.baseUrl + "/api");

      //   make request to Pact mock server
      const todo = await api.createTodoItem(expectedTodo.description);

      expect(todo).toHaveProperty("id");
      expect(todo).toHaveProperty("description", expectedTodo.description);
    });
  });
});
