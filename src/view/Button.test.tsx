import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./view/Button";

test("renders learn react link", () => {
  render(<Button />);
  const linkElement = screen.getByText(/Add/i);
  expect(linkElement).toBeInTheDocument();
});