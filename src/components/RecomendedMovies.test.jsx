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

//Checks if it render more then 4 movies 

test("shows a list of movies", () => {
  render(
    <MemoryRouter>
      <RecomendedMovies />
    </MemoryRouter>
  );
    const movieCards = screen.getAllByTestId("movieCard");
    expect(movieCards.length).toBeGreaterThan(4);
});

//Checks to make sure there is no Trending movies in Recomended movies

test("Doesn't show trending movies", () => {
  render(
    <MemoryRouter>
      <RecomendedMovies />
    </MemoryRouter>
  );
    const movieCards = screen.queryAllByTestId("movieCard"); 
    const trendingMovies = movieCards.filter((movieCard) =>
    screen.queryByText("Trending", { container: movieCard })
  );
    expect(trendingMovies.length).toBe(0); 
});

