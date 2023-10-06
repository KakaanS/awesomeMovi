import { test, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBox from "./SearchBox";

// test to see if input field renders
describe("Testing searchbar", () => {
  test("there is a input", () => {
    const setSearchedResult = vi.fn();
    render(<SearchBox setSearchResults={setSearchedResult} />);
    const inputElement = screen.getByPlaceholderText("Search for a movie...");
    expect(inputElement).toBeInTheDocument();
  });

  // test to see if it is possible to search for the movie "The Godfather"
  test("search for a movietitle", async () => {
    const user = userEvent.setup();
    const setSearchResults = vi.fn();
    const setSearchText = vi.fn();
    render(
      <SearchBox
        setSearchResults={setSearchResults}
        setSearchText={setSearchText}
      />
    );
    const inputElement = screen.getByPlaceholderText("Search for a movie...");
    await user.type(inputElement, "The Godfather");

    const expectedFilteredMovies = [{ title: "The Godfather" }];
    await setSearchResults(expectedFilteredMovies);

    expect(setSearchResults).toHaveBeenCalled();
  });
});
