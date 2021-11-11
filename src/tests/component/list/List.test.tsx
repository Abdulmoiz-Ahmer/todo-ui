import React from "react";
import { render, screen } from "@testing-library/react";
import { List } from "../../../view";

test("Make sure list is rendering", () => {
  render(<List />);
  const listElement = screen.getByRole("list");
  expect(listElement).toBeInTheDocument();
});
