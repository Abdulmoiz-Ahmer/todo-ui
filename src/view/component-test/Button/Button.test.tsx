import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../../index";

test("Make sure button is rendering", () => {
  render(<Button />);

  const addButtonElement = screen.getByText("Add");

  //and click to <add button>
  fireEvent.click(addButtonElement);
});
