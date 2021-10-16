import { render, screen } from "@testing-library/react";
import ArnabDattaPortfolio from "./ArnabDattaPortfolio";

test("renders learn react link", () => {
  render(<ArnabDattaPortfolio />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
