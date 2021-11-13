import React from "react";
import { IAddButtonProps } from "./IAddButtonProps";

export const AddButton = function AddButton(props: IAddButtonProps) {
  const { onButtonClick, buttonDisabilityStatus } = props;
  return (
    <button
      onClick={onButtonClick}
      disabled={buttonDisabilityStatus}
      className="add-button"
    >
      Add
    </button>
  );
};
