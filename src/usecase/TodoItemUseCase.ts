import { TodoItem } from "../entity/TodoItem";
import { ITodoItemUseCase } from "./ITodoItemUseCase";
import { IRestClient } from "../adapter/IRestClient";

export class TodoItemUseCase implements ITodoItemUseCase {
  client: IRestClient;

  constructor(client: IRestClient) {
    this.client = client;
  }

  async findAll(): Promise<TodoItem[] | null> {
    const todos: any = await this.client.getAllTodoItems();

    const items = [];

    for (const todo of todos) {
      items.push(TodoItem.fromJSON(todo));
    }

    return items;
  }
}
