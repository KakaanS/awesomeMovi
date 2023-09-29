import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBox from "./SearchBox";

// test to see if input field renders

test("det finns ett input-fält", () => {
  const { getByPlaceholderText } = render(<SearchBox />);
  const inputElement = getByPlaceholderText("Sök efter en filmtitel...");
  expect(inputElement).toBeInTheDocument();
});

// test to see if it is possible to search for the movie "The Godfather"

test("det går att söka efter en hel filmtitel", async () => {
  const { getByPlaceholderText, getByAltText } = render(<SearchBox />);
  const inputElement = getByPlaceholderText("Sök efter en filmtitel...");

  userEvent.type(inputElement, "The Godfather");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const godfatherImage = getByAltText("The Godfather");
  expect(godfatherImage).toBeInTheDocument();
});

// test to see if it is possible to search for all movies starting with "t"

test("det går att söka på en boksav och få fram alla filmer som börjar med den bokstaven", async () => {
  const { getByPlaceholderText, getAllByText } = render(<SearchBox />);
  const inputElement = getByPlaceholderText("Sök efter en filmtitel...");

  userEvent.type(inputElement, "t");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const movieTitles = getAllByText(/t.*/i);

  movieTitles.forEach((titleElement) => {
    expect(titleElement.textContent.toLowerCase()).toMatch(/^t.*/);
  });
});
