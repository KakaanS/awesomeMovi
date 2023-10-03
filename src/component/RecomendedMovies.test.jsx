import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RecomendedMovies from "./RecomendedMovies.jsx";

//Checks if the page contains the text "Recommended for you"

test('shows the text "Recommended for you"', () => {
  render(
    <MemoryRouter>
      <RecomendedMovies />
    </MemoryRouter>
  );
  const documentText = document.body.textContent;
  expect(documentText).toContain("Recommended for you");
});

//Checks if the page contains a div with movies

test("shows a list of movies", () => {
  const { container } = render(
    <MemoryRouter>
      <RecomendedMovies />
    </MemoryRouter>
  );
  const movieList = container.querySelector("div");
  expect(movieList).toBeTruthy();
});
