import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RecomendedMovies from "./RecomendedMovies.jsx";

//Checks if the page contains the text "Recommended for you"

test('shows the text "Recommended for you"', () => {
  render(
    <MemoryRouter>
      <RecomendedMovies />
    </MemoryRouter>
  );
    const documentText = screen.getByText("Recommended for you");
    expect(documentText).toBeInTheDocument
});

//Checks if it render 5 movies 

test("shows a list of movies", () => {
  render(
    <MemoryRouter>
      <RecomendedMovies />
    </MemoryRouter>
  );
   const movieCards = screen.getAllByTestId("movieCard");
  expect(movieCards.length).toBe(5);
});
