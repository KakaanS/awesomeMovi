import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";

// Test to verify that the landing-page (home) is fully rendered
test("full app rendering landing page", async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText("HOME")).toBeInTheDocument();
  screen.debug();
  expect(screen.getByText("CATEGORY")).toBeInTheDocument();
  expect(screen.getByText("BOOKMARKS")).toBeInTheDocument();
  expect(screen.getByText("Recommended for you")).toBeInTheDocument();
  expect(screen.getByText("Trending")).toBeInTheDocument();
});
