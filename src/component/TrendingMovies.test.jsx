import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TrendingMovies from "./TrendingMovies";

//Checks if the page contains the text "Trending"

test('Shows the text "Trending"', () => {
  render(
    <MemoryRouter>
      <TrendingMovies />
    </MemoryRouter>
  );
  const documentText = document.body.textContent;
  expect(documentText).toContain("Trending");
});

//Checks if the page contains a div with movies

test("Shows list whit movies", () => {
  const { container } = render(
    <MemoryRouter>
      <TrendingMovies />
    </MemoryRouter>
  );
  const movieList = container.querySelector("div");
  expect(movieList).toBeTruthy();
});
