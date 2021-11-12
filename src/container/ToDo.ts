import React, { useState } from "react";

export default function ToDo() {
  const [buttonButtonDisbility, setButtonDisablityStatus] = useState(false);

  function handleButtonClick() {
    setButtonDisablityStatus(true);
  }

  return {
    state: {
      buttonButtonDisbility,
    },
    functions: {
      handleButtonClick,
    },
  };
}
