import fetch from "unfetch";
import { IRestClient } from "./IRestClient";

export class RestClient implements IRestClient {
  endpoint: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  client: any;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.client = fetch;
  }

  public async getAllTodoItems(): Promise<Response | undefined> {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await this.client(this._createUrl("/todos"));

      if (response.ok) {
        return response.json();
      }
    } catch (error) {
      // TODO: Add error handling
      throw error;
    }
  }

  private _createUrl(resource: string): string {
    return this.endpoint + resource;
  }
}
