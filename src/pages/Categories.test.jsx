import { expect, test, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Categories from "../App";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

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
  const lists = screen.getAllByRole("list");
  const categoriesList = lists[1];

  const categories = within(categoriesList).getAllByRole("button");
  expect(categories.length).toBe(15);
});

// Test code for 'All movies' button functionality
test("should display all movies when 'All movies' button is clicked", async () => {
  const user = userEvent.setup();
  const lists = screen.getAllByRole("list");
  const categoriesList = lists[1];

  const horrorButton = within(categoriesList).getByRole("button", {
    name: "Horror",
  });
  // Click on horror button so we dont have the default display with all movies
  await user.click(horrorButton);

  // Check that only the movies in horror genre is rendered
  expect(screen.getByText("Psycho")).toBeInTheDocument();
  expect(screen.queryByText("Rear Window")).not.toBeInTheDocument();
  expect(screen.queryByText("Schindler's List")).not.toBeInTheDocument();

  // All movies button functionality
  const allMoviesButton = screen.getByRole("button", { name: "All movies" });
  await user.click(allMoviesButton);
  expect(screen.getByText("Psycho")).toBeInTheDocument();
  expect(screen.getByText("Rear Window")).toBeInTheDocument();
  expect(screen.getByText("Schindler's List")).toBeInTheDocument();
});

// Test verifies that the correct movies within a category are rendered when clicked
test("should display movies of specific category", async () => {
  const user = userEvent.setup();
  const lists = screen.getAllByRole("list");
  const categoriesList = lists[1];

  // Click on horror category and expect the movies within horror
  const horrorButton = within(categoriesList).getByRole("button", {
    name: "Horror",
  });
  await user.click(horrorButton);
  expect(screen.getByText("Psycho")).toBeInTheDocument();
  expect(screen.queryByText("Schindler's List")).not.toBeInTheDocument();

  // Proceed to click on history category and expect the movies within history
  const historyButton = within(categoriesList).getByRole("button", {
    name: "History",
  });
  await user.click(historyButton);
  expect(screen.getByText("Schindler's List")).toBeInTheDocument();
  expect(screen.queryByText("Psycho")).not.toBeInTheDocument();
});
