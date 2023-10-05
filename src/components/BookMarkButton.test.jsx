import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookMarkButton from "./BookMarkButton";
import userEvent from "@testing-library/user-event";
import AllCtx from "../context/allCtx";

const mockedMovie = {
  id: 1,
  title: "The Shawshank Redemption",
  year: 1994,
  rating: "R",
  actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  genre: "Drama",
  synopsis:
    "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
  thumbnail:
    "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg",
};

test("Should switch the addition sign to a subraction sign", async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <AllCtx>
        <BookMarkButton movie={mockedMovie} />
      </AllCtx>
    </MemoryRouter>
  );
  const defaultBookmarkButton = screen.getByRole("button", { name: "+" });
  expect(defaultBookmarkButton).toBeInTheDocument();

  await user.click(defaultBookmarkButton);
  const bookmarkButtonAfter = screen.getByRole("button", { name: "-" });
  expect(bookmarkButtonAfter).toBeInTheDocument();
});
