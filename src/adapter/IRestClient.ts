export interface IRestClient {
  getAllTodoItems(): Promise<Response | undefined>;
}
