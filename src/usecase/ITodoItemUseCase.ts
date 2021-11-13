import { TodoItem } from "../entity/TodoItem";

export interface ITodoItemUseCase {
  findAll(): Promise<TodoItem[] | null>;
  create(description: string): Promise<void>;
}
