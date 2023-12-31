import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Home from "../pages/Home";

// Test to verify that the landing-page (home) is fully rendered
test("full app rendering landing page", async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText("HOME")).toBeInTheDocument();
  expect(screen.getByText("CATEGORY")).toBeInTheDocument();
  expect(screen.getByText("BOOKMARKS")).toBeInTheDocument();
  expect(screen.getByText("Recommended for you")).toBeInTheDocument();
  expect(screen.getByText("Trending")).toBeInTheDocument();
});

// test to see if it is possible to search for all movies starting with "t"
test('searching for all movies that starts whit the letter "t"', async () => {
   const user = userEvent.setup()
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const inputElement = screen.getByPlaceholderText("Search for a movie...");
  await user.type(inputElement, "t");

  const movieTitles = await screen.getAllByText(/t.*/i);
  movieTitles.forEach((titleElement) => {
    expect(titleElement.textContent.toLowerCase()).toContain("t");
  });
});
