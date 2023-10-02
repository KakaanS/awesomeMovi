import { describe, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import AuthProvider from "../context/AuthCtx";
import { AuthContext } from "../context/AuthCtx";
import userEvent from "@testing-library/user-event";

test("should always pass", () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(true).toBe(true);
});

// Test to verify that the landing-page (home) is fully rendered
test("full app rendering landing page", async () => {
  const route = "/awesomeMovi";

  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );

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

describe("test if user can login", () => {
  test("if user gets authenticated", async () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </MemoryRouter>
    );

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");
    const loginButton = screen.getByRole("button", { name: "Login" });
    const user = userEvent.setup();

    await user.type(usernameInput, "sampleuser");
    await user.type(passwordInput, "123");

    expect(usernameInput.value).toBe("sampleuser");
    expect(passwordInput.value).toBe("123");

    await user.click(loginButton);

    waitFor(() => {
      const loggedIn = screen.findByText("HOME");
      expect(loggedIn).toBeInTheDocument();
    });
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

describe("test if user can click movies and see movie details", () => {
  test("Can user click on a movie and see the movie details", async () => {
    render(
      <MemoryRouter initialEntries={["/awesomeMovi/"]}>
        <App />
      </MemoryRouter>
    );

    const movie = await screen.findByText("Psycho");
    userEvent.click(movie);

    waitFor(() => {
      const movieDetails = screen.findByText("Movie Details");
      expect(movieDetails).toBeInTheDocument();
    });
  });
});
