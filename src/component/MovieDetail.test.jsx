import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MovieDetail from "./MovieDetail";

// Mock movie data
const mockMovie = {
  title: "Exempelfilm",
  rating: "R",
  actors: "Skådespelare 1, Skådespelare 2",
  genre: "Action",
  synopsis: "Detta är en exempelbeskrivning av filmen.",
  thumbnail: "exempel.jpg",
 name: "Exempelfilm",
};

test("Renderar filminformation korrekt från databasen", async () => {
  // Render the MovieDetail component with mock data
  render(
    <MemoryRouter>
      <MovieDetail movie={mockMovie} />
    </MemoryRouter>
  );

  // Assertions
  expect(screen.getByText("Exempelfilm")).toBeDefined();

  // Check if "RATING:" is present and then check the next sibling for the rating value
  const ratingParagraph = screen.getByText("RATING:");
  expect(ratingParagraph).toBeDefined();
  expect(ratingParagraph.nextSibling.textContent.trim()).toBe("R");

  // Similarly, update other assertions as needed for actors, genre, and synopsis
  const actorsParagraph = screen.getByText("ACTORS:");
  expect(actorsParagraph).toBeDefined();
  expect(actorsParagraph.nextSibling.textContent.trim()).toBe(
    "Skådespelare 1, Skådespelare 2"
  );

  const genreParagraph = screen.getByText("GENRE:");
  expect(genreParagraph).toBeDefined();
  expect(genreParagraph.nextSibling.textContent.trim()).toBe("Action");

  const synopsisParagraph = screen.getByText("SYNOPSIS:");
  expect(synopsisParagraph).toBeDefined();
  expect(synopsisParagraph.nextSibling.textContent.trim()).toBe(
    "Detta är en exempelbeskrivning av filmen."
  );
  // Check that the image has the correct source and alt text
  const image = screen.getByAltText(mockMovie.name);
  expect(image).toBeDefined();
  expect(image.src).toContain(mockMovie.thumbnail);
  expect(image.alt).toBe(mockMovie.name);
});
