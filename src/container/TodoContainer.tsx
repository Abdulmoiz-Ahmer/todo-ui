import React, { useState } from "react";

export const TodoContainer = () => {
  const [buttonDisabilityStatus, setButtonDisabilityStatus] = useState(false);
  const [todoText, setTodoText] = useState<string>("");

  function handleButtonClick() {
    setButtonDisabilityStatus(true);
  }

  function updateTodoText(todoText: string) {
    setTodoText(todoText);
  }

  return {
    state: {
      buttonDisabilityStatus,
      todoText,
    },
    functions: {
      handleButtonClick,
      updateTodoText,
    },
  };
};
