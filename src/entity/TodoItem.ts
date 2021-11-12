type TodoItemJSON = {
  id: string;
  description: string;
};

export class TodoItem {
  private readonly _id: string;
  private readonly _description: string;

  constructor(id: string, description: string) {
    this._id = id;
    this._description = description;
  }

  get id(): string {
    return this._id;
  }

  get description(): string {
    return this._description;
  }

  static fromJSON(json: TodoItemJSON): TodoItem {
    const { id, description } = json;
    return new TodoItem(id, description);
  }
}
