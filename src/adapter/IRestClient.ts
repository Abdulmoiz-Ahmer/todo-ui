export interface IRestClient {
  getAllTodoItems(): Promise<Response | undefined>;
  createTodoItem(description: string): Promise<Response | undefined>;
}
