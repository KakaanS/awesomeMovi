import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import MovieDetail from "./MovieDetail";

// En mock databas för att köra testerna

test("Renderar filminformation korrekt från databasen", async () => {
  const mockMovie = {
    title: "Exempelfilm",
    rating: 8.5,
    actors: "Skådespelare 1, Skådespelare 2",
    genre: "Action",
    synopsis: "Detta är en exempelbeskrivning av filmen.",
    thumbnail: "exempel.jpg",
  };

  const { getByText, getByAltText } = render(MovieDetail, {
    props: { movie: mockMovie },
  });

  // Kontrollera om komponenten visar korrekt filminformation.
  expect(getByText("Exempelfilm").textContent).toMatch("Exempelfilm");
  expect(getByText("RATING: 8.5").textContent).toMatch("RATING: 8.5");
  expect(
    getByText("ACTORS: Skådespelare 1, Skådespelare 2").textContent
  ).toMatch("ACTORS: Skådespelare 1, Skådespelare 2");
  expect(getByText("GENRE: Action").textContent).toMatch("GENRE: Action");
  expect(
    getByText("SYNOPSIS: Detta är en exempelbeskrivning av filmen.").textContent
  ).toMatch("SYNOPSIS: Detta är en exempelbeskrivning av filmen.");

  // Kontrollera om bilden visas och källa är korrekta.
  const image = getByAltText("Movie Thumbnail");
  expect(image).toBeDefined();
  expect(image.getAttribute("src")).toContain("exempel.jpg");
});
