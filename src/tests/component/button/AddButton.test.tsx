import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AddButton } from "../../../view";

test("Make sure button is rendering", () => {
  render(<AddButton />);

  const addButtonElement = screen.getByText("Add");

  //and click to <add button>
  fireEvent.click(addButtonElement);
  expect(screen.getByText("Add")).toBeDisabled();
});
