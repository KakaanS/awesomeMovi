import { describe, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router-dom";
import AuthProvider from "../context/AuthCtx";
import { AuthContext } from "../context/AuthCtx";
import userEvent from "@testing-library/user-event";
import PageLogin from "../pages/Login";

test("should always pass", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(true).toBe(true);
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

describe("test if user can login", () => {
  test("if user gets authenticated", async () => {
    render(
      <MemoryRouter initialEntries={["/awesomeMovi/login"]}>
        <AuthProvider>
          <PageLogin />
        </AuthProvider>
      </MemoryRouter>
    );

    const usernameInput = screen.getByPlaceholderText("Username...");
    const passwordInput = screen.getByPlaceholderText("Password...");
    const loginButton = screen.getByRole("button");

    await userEvent.type(usernameInput, "sampleuser");
    await userEvent.type(passwordInput, "123");
    await userEvent.click(loginButton);

    await waitFor(
      () => {
        const loggedIn = screen.getByText("You are logged in!");
        expect(loggedIn).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  test("If token is already set, user gets redirected to /", async () => {
    render(
      <MemoryRouter initialEntries={["/awesomeMovi/"]}>
        <AuthContext.Provider value={{ user: { token: "sampletoken123" } }}>
          <App />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const redirectedToHome = await screen.findByText("HOME");

    expect(redirectedToHome).toBeInTheDocument();
  });
});

/* describe("test if user can logout", () => {
  // Waiting for logout button to be integrated.
}); */

describe("testing site navigation", () => {
  test("Can user click on a movie and see the movie details", async () => {
    render(
      <MemoryRouter initialEntries={["/awesomeMovi/"]}>
        <AuthContext.Provider value={{ user: { token: "sampletoken123" } }}>
          <App />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const movie = await screen.findByText("Psycho");
    userEvent.click(movie);

    const movieDetails = await screen.findByText("RATING:");
    expect(movieDetails).toBeInTheDocument();
  });

  test("Can user click CATEGORY and see the category page", async () => {
    render(
      <MemoryRouter initialEntries={["/awesomeMovi/"]}>
        <AuthContext.Provider value={{ user: { token: "sampletoken123" } }}>
          <App />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const category = await screen.findByText("CATEGORY");
    userEvent.click(category);

    const categoryPage = await screen.findByText("Action");
    expect(categoryPage).toBeInTheDocument();
  });

  test("Can user click on bookmarks and see their bookmarks", async () => {
    render(
      <MemoryRouter initialEntries={["/awesomeMovi/"]}>
        <App />
      </MemoryRouter>
    );

    const bookmarks = await screen.findByText("BOOKMARKS");
    userEvent.click(bookmarks);

    const bookmarksPage = await screen.findByText("Bookmarks");
    expect(bookmarksPage).toBeInTheDocument();
  });
});
