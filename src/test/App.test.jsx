import { expect, test, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import AuthProvider from "../context/AuthCtx";
import { AuthContext } from "../context/AuthCtx";
import userEvent from "@testing-library/user-event";

vi.mock("js-cookie", async () => {
  const actual = await vi.importActual("js-cookie");
  return {
    ...actual,
    get: vi.fn().mockReturnValue("sampletoken123"),
    set: vi.fn().mockReturnValue("sampletoken123"),
    remove: vi.fn(),
  };
});

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
  const loginButton = screen.getByRole("button", { name: /login/i });

  await userEvent.type(usernameInput, "sampleuser");
  await userEvent.type(passwordInput, "123");

  expect(usernameInput.value).toBe("sampleuser");
  expect(passwordInput.value).toBe("123");

  await userEvent.click(loginButton);

  await waitFor(() => {
    const loggedIn = screen.getByText("HOME");
    expect(loggedIn).toBeInTheDocument();
  });
});

test("If token is already set, user gets redirected to /", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <AuthContext.Provider value={{ user: { token: "sampletoken123" } }}>
        <App />
      </AuthContext.Provider>
    </MemoryRouter>
  );

  const redirectedToHome = await screen.findByText("HOME");

  expect(redirectedToHome).toBeInTheDocument();
});
