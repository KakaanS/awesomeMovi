import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TrendingMovies from "./TrendingMovies";

//Checks if the page contains the text "Trending"

test('Shows the text "Trending"', () => {
  render(
    <MemoryRouter>
      <TrendingMovies />
    </MemoryRouter>
  );
  const documentText = screen.getByText("Trending");
  expect(documentText).toBeInTheDocument
});
//Checks if there is 7 movies showing in trending
test("Shows list whit movies", () => {
render(
    <MemoryRouter>
      <TrendingMovies />
    </MemoryRouter>
  );
const movieCards = screen.getAllByTestId("movieCard");
expect(movieCards.length).toBe(7);
});
