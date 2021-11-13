import React from "react";
import "./App.css";
import { ToDo } from "../../view";
import { TodoContainer } from "../../container/TodoContainer";
import { TodoItemUseCase } from "../../usecase/TodoItemUseCase";
import { RestClient } from "../../adapter/RestClient";
function App() {
  const restClient = new RestClient("http://todo.api.cryptobros.site/api");
  const todoUseCase = new TodoItemUseCase(restClient);
  const { state, functions } = TodoContainer({ useCase: todoUseCase });
  const { buttonDisabilityStatus, todoText, todoList } = state;
  const { handleButtonClick, onInputChange } = functions;
  return (
    <div className="App">
      <ToDo
        buttonDisabilityStatus={buttonDisabilityStatus}
        onButtonClick={handleButtonClick}
        todoText={todoText}
        onInputChange={onInputChange}
        items={todoList}
      />
    </div>
  );
}

export default App;
