import React from "react";
import { render, screen } from "@testing-library/react";
import { ListItem } from "../../../view";

test("Make sure listitem is rendering", () => {
  render(<ListItem />);

  const listItemElement = screen.getByRole("list-item");
  expect(listItemElement).toBeInTheDocument();
});
