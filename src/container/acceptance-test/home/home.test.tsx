import React from "react";
import { render, fireEvent, screen, within } from "@testing-library/react";
import Home from "../../../view/add-bar";

test("Adding a TODO item", () => {
  render(<Home />);

  const inputTextElement = screen.getByPlaceholderText("ToDo");

  //When I write "buy some milk" to <text box>
  fireEvent.change(inputTextElement, {
    target: { value: "buy some milk" },
  });
  const addButtonElement = screen.getByText("Add");

  //and click to <add button>
  fireEvent.click(addButtonElement);

  expect(
    screen.getByText("buy some milk", { selector: "li" })
  ).toBeInTheDocument();
});
