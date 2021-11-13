import { string } from "@pact-foundation/pact/src/dsl/matchers";
import React, { useState, useEffect } from "react";
import { TodoItem } from "../entity/TodoItem";
import { TodoItemUseCase } from "../usecase/TodoItemUseCase";

interface TodoContainerProps {
  useCase: TodoItemUseCase;
}

export const TodoContainer = ({ useCase }: TodoContainerProps) => {
  const [buttonDisabilityStatus, setButtonDisabilityStatus] =
    useState<boolean>(false);
  const [todoText, setTodoText] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoItem[] | null>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        const todoListItems = await useCase.findAll();
        setTodoList(todoListItems);
      } catch (error) {
        console.log(error);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleButtonClick() {
    setButtonDisabilityStatus(true);
  }

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodoText(event.target.value);
  }

  return {
    state: {
      buttonDisabilityStatus,
      todoText,
      todoList,
    },
    functions: {
      handleButtonClick,
      onInputChange,
    },
  };
};
