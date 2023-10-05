import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Category from "./Category";

const expectedCategory="Mystery";

test('Renders the category name', () => {
  render(
   <MemoryRouter>
      <Category category={expectedCategory}/>
   </MemoryRouter>
  );
  expect(screen.getByText(expectedCategory)).toBeInTheDocument();
});

// Test display expected movies when a prop is passed correctly
test('Should display movies within the category', () => {
  render(
   <MemoryRouter>
      <Category category={expectedCategory}/>
   </MemoryRouter>
  );
  // Expect the two only movies within Drama to be rendered 
  const bookmarkButton = screen.getAllByRole("button");
  expect(bookmarkButton).toHaveLength(2);
  expect(screen.getByText("Psycho")).toBeInTheDocument();
  expect(screen.getByText("Rear Window")).toBeInTheDocument();
  expect(screen.queryByText("The Shawshank Redemption")).not.toBeInTheDocument()

});
// Checks that movies are not rendered when incorrect prop is passed
test('Should not display movies when prop is not passed correctly', () => {
  render(
   <MemoryRouter>
      <Category category={"nonExistingCategory"}/>
   </MemoryRouter>
  );
  const bookmarkButton = screen.queryAllByRole("button");
  expect(bookmarkButton).toHaveLength(0);
});


