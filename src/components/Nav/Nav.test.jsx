import { screen } from "@testing-library/react";
import Nav from "./Nav";
import customRender from "../../utils/testUtils"

test("The nav links are contained in the page", () => {
  customRender(<Nav/>);
  const links = screen.getAllByRole("link");
  expect(links[0]).toHaveAttribute("href", "/lift/create");
  expect(links[1]).toHaveAttribute("href", "/lifts");
});

