import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ListItem } from "../../index";

test("Make sure listitem is rendering", () => {
  render(<ListItem />);

  const listItemElement = screen.getByRole("list-item");
  expect(listItemElement).toBeInTheDocument();
});
