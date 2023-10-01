import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import TrendingMovies from "./TrendingMovies";

//Checks if the page contains the text "Trending"

test('Visar texten "Trending"', () => {
  render(<TrendingMovies />);
  const documentText = document.body.textContent;
  expect(documentText).toContain("Trending");
});

//Checks if the page contains a div with movies

test("Visar listan på filmer", () => {
  const { container } = render(<TrendingMovies />);
  const movieList = container.querySelector("div");
  expect(movieList).toBeTruthy();
});
