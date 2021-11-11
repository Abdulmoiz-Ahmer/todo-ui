import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddBar from "../../";

test("Make sure add bar exists and taking input", () => {
  render(<AddBar />);

  const inputTextElement = screen.getByPlaceholderText("ToDo");
  expect(inputTextElement).toBeInTheDocument();

  fireEvent.change(inputTextElement, {
    target: { value: "buy some milk" },
  });
});
