import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Categories from "../App";
import { MemoryRouter } from "react-router-dom";
import userEvent  from "@testing-library/user-event";

// Set up recurrent rendering configuration for testing the 'Categories' component
beforeEach(() => {
  const route = "/categories";
  render(
    <MemoryRouter initialEntries={[route]}>
      <Categories />
    </MemoryRouter>
  );
});

// Test checks that the heading is displayed
test("should display the heading 'Categories'", () => {
  expect(screen.getByText("Categories")).toBeInTheDocument();
});

// Test to verify that the expected categories are rendered
test("should display 'Action', 'Drama', and 'Thriller'", () => {
  expect(screen.getByText("Action")).toBeInTheDocument();
  expect(screen.getByText("Drama")).toBeInTheDocument();
  expect(screen.getByText("Thriller")).toBeInTheDocument();
});

// Test verifies that all the categories are rendered
test("should display all 15 category titles", () => {
  const headings = screen.getAllByRole("heading", { level: 3 });
  expect(headings.length).toBe(15);
});

test.todo("should display movies of specific category", async () => {
   render(<Categories />)
   const categories = screen.getAllByRole('heading', {level: 3});
   const category = categories[0]
   const user = userEvent.setup();
   user.click(category);
   const moviesInCategory = screen.getAllByRole('listitem');
   const firstMovie = moviesInCategory[0];
   expect(firstMovie).toBe("The Shawshank Redemption");
})