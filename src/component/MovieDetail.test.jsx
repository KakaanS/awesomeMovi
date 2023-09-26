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

  const { getByText } = render(MovieDetail, {
    props: { movie: mockMovie },
  });

  // Kontrollera om komponenten visar korrekt filminformation.
  expect(getByText("Exempelfilm")).toBeTruthy();
  expect(getByText("RATING: 8.5")).toBeTruthy();
  expect(getByText("ACTORS: Skådespelare 1, Skådespelare 2")).toBeTruthy();
  expect(getByText("GENRE: Action")).toBeTruthy();
  expect(
    getByText("SYNOPSIS: Detta är en exempelbeskrivning av filmen.")
  ).toBeTruthy();

  // Kontrollera om bilden visas och källa är korrekta.
  expect(image).toBeTruthy();
  expect(image.getAttribute("src")).toContain("exempel.jpg");
});
