import React, { useState, useEffect } from "react";
import { RestClient } from "../adapter/RestClient";

export const TodoContainer = () => {
  const [buttonDisabilityStatus, setButtonDisabilityStatus] = useState(false);
  const [todoText, setTodoText] = useState<string>("");

  function handleButtonClick() {
    setButtonDisabilityStatus(true);
  }

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodoText(todoText);
  }

  return {
    state: {
      buttonDisabilityStatus,
      todoText,
    },
    functions: {
      handleButtonClick,
      onInputChange,
    },
  };
};
