import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Categories from "../App";
import { MemoryRouter } from "react-router-dom";

beforeEach(() => {
  const route = "/categories";
  render(
    <MemoryRouter initialEntries={[route]}>
      <Categories />
    </MemoryRouter>
  );
});

// Checks if the heading Ca
test("should display 'Categories'", () => {
  expect(screen.getByText("Categories")).toBeInTheDocument();
});
test("should display 'Action', 'Drama', and 'Thriller'", () => {
  expect(screen.getByText("Action")).toBeInTheDocument();
  expect(screen.getByText("Drama")).toBeInTheDocument();
  expect(screen.getByText("Thriller")).toBeInTheDocument();
});
test("should display all 15 category titles", () => {
  const headings = screen.getAllByRole("heading", { level: 3 });
  expect(headings.length).toBe(15);
});
