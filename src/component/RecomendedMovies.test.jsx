import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import RecomendedMovies from "./RecomendedMovies.jsx";

//Checks if the page contains the text "Recommended for you"

test('Visar texten "Recommended for you"', () => {
  render(<RecomendedMovies />);
  const documentText = document.body.textContent;
  expect(documentText).toContain("Recommended for you");
});

//Checks if the page contains a div with movies

test("Visar listan på filmer", () => {
  const { container } = render(<RecomendedMovies />);
  const movieList = container.querySelector("div");
  expect(movieList).toBeTruthy();
});
