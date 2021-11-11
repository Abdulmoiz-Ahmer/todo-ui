import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AddBar } from "../../index";

test("Make sure add bar exists and taking input", () => {
  render(<AddBar />);

  const inputTextElement = screen.getByPlaceholderText("ToDo");

  fireEvent.change(inputTextElement, {
    target: { value: "buy some milk" },
  });

  expect(inputTextElement.value).toBe("buy some milk");
});
