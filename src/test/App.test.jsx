import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

test("should always pass", () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(true).toBe(true);
});

// Test to verify that the landing-page (home) is fully rendered
test("full app rendering landing page", async () => {
  render(<App />, { wrapper: BrowserRouter });

  expect(screen.getByText("HOME")).toBeInTheDocument();
  expect(screen.getByText("CATEGORY")).toBeInTheDocument();
  expect(screen.getByText("BOOKMARKS")).toBeInTheDocument();
  expect(screen.getByText("Recommended for you")).toBeInTheDocument();
  expect(screen.getByText("Trending")).toBeInTheDocument();
});

// Test to verify that the navbar aswell as the maincontent is not rendered on a bad route
test("landing on a bad page", () => {
  const badRoute = "/some/bad/route";
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.queryByText("HOME")).toBeNull();
  expect(screen.queryByText("Recommended for you")).toBeNull();
});
