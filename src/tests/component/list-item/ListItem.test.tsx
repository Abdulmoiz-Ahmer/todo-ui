import React from "react";
import { render, screen } from "@testing-library/react";
import { ListItem } from "../../../view";
import { TodoItem } from "../../../entity/TodoItem";

test("Make sure listitem is rendering", () => {
  render(
    <ListItem
      item={TodoItem.fromJSON({
        id: "618ddb6afe72881053259ea1",
        description: "Buy some sugar",
      })}
    />
  );

  const listItemElement = screen.getByRole("listitem");
  expect(listItemElement).toBeInTheDocument();
});
