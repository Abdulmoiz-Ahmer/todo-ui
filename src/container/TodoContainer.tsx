import React, { useState } from "react";

export const TodoContainer = () => {
  const [buttonDisabilityStatus, setButtonDisabilityStatus] = useState(false);

  function handleButtonClick() {
    setButtonDisabilityStatus(true);
  }

  return {
    state: {
      buttonDisabilityStatus,
    },
    functions: {
      handleButtonClick,
    },
  };
};
