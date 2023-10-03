import { test, expect, describe, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBox from "./SearchBox";

// test to see if input field renders
describe('Testing searchbar',() => {
   test("there is a input", () => {
      const setSearchedResult = vi.fn();
     const { getByPlaceholderText } = render(<SearchBox setSearchResults={setSearchedResult}/>);
     const inputElement = getByPlaceholderText("Search for a movie...");
     expect(inputElement).toBeInTheDocument();
   });
   
   // test to see if it is possible to search for the movie "The Godfather"
   
   test("search for a movietitle", async () => { 
      const setSearchResults = vi.fn();
      const setSearchText = vi.fn()
     const { getByPlaceholderText } = render(<SearchBox  setSearchResults={setSearchResults} setSearchText={setSearchText}/>);
     const inputElement = getByPlaceholderText("Search for a movie...");
   
     userEvent.type(inputElement, "The Godfather");
   
     await new Promise((resolve) => setTimeout(resolve, 1000));  
     const expectedFilteredMovies = [{ title: "The Godfather" }];
     setSearchResults(expectedFilteredMovies);
 
     expect(setSearchResults).toHaveBeenCalled();
   });
   
})
