// Tools
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

// Content to be tested
import App from "../App";
import AuthProvider from "../context/AuthCtx";
import { AuthContext } from "../context/AuthCtx";
import { BookmarkProvider } from "../context/BookMarkCtx";

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

describe("test if user can login and logout", () => {
  test("if user gets authenticated", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/awesomeMovi/login"]}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </MemoryRouter>
    );

    const usernameInput = screen.getByPlaceholderText("Username...");
    const passwordInput = screen.getByPlaceholderText("Password...");
    const loginButton = screen.getByRole("button");

    await user.type(usernameInput, "sampleuser");
    await user.type(passwordInput, "123");
    await user.click(loginButton);

    const logoutBtn = await screen.findByText("Log Out");

    expect(logoutBtn).toBeInTheDocument();

    await user.click(logoutBtn);
    expect(await screen.findByText("Login")).toBeInTheDocument();
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
    await userEvent.click(bookmarks);

    const bookmarksPage = await screen.findByText("Your Bookmarks");
    expect(bookmarksPage).toBeInTheDocument();
  });

  test("Can user navigate from bookmarks to Home", async () => {
    render(
      <MemoryRouter initialEntries={["/awesomeMovi/bookmark"]}>
        <App />
      </MemoryRouter>
    );

    const homeBtn = await screen.findByText("HOME");
    await userEvent.click(homeBtn);

    const homePage = await screen.findByText("Recommended for you");
    expect(homePage).toBeInTheDocument();
  });

  test("can user navigate from bookmarks to categories", async () => {
    render(
      <MemoryRouter initialEntries={["/awesomeMovi/bookmark"]}>
        <App />
      </MemoryRouter>
    );
    const categoryBtn = await screen.findByText("CATEGORY");
    await userEvent.click(categoryBtn);

    const categoryPage = await screen.findByText("Action");
    expect(categoryPage).toBeInTheDocument();
  });

  test("Can user navigate from categories to Home", async () => {
    render(
      <MemoryRouter initialEntries={["/awesomeMovi/categories"]}>
        <App />
      </MemoryRouter>
    );
    const homeBtn = await screen.findByText("HOME");
    await userEvent.click(homeBtn);

    const homePage = await screen.findByText("Recommended for you");
    expect(homePage).toBeInTheDocument();
  });

  test("Can user navigate from categories to bookmarks", async () => {
    render(
      <MemoryRouter initialEntries={["/awesomeMovi/categories"]}>
        <App />
      </MemoryRouter>
    );
    const bookmarksBtn = await screen.findByText("BOOKMARKS");
    await userEvent.click(bookmarksBtn);

    const bookmarksPage = await screen.findByText("Your Bookmarks");
    expect(bookmarksPage).toBeInTheDocument();
  });
});

describe("testing bookmark functionality", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  afterEach(() => {
    localStorage.clear();
  });

  test("Can user bookmark a movie", async () => {
    render(
      <MemoryRouter initialEntries={["/awesomeMovi/"]}>
        <BookmarkProvider>
          <App />
        </BookmarkProvider>
      </MemoryRouter>
    );

    const randomMovieCard = (await screen.findAllByTestId("movieCard"))[0];
    expect(randomMovieCard).toBeInTheDocument();

    const movieThumbnail = await within(randomMovieCard).findByRole("img");
    const movieSource = movieThumbnail.getAttribute("src");

    const bookmarkBtn = await within(randomMovieCard).findByRole("button");
    await userEvent.click(bookmarkBtn);

    const bookmarkPage = await screen.findByText("BOOKMARKS");
    await userEvent.click(bookmarkPage);

    expect(await screen.findByText("Your Bookmarks")).toBeInTheDocument();
    expect(await screen.findByRole("img")).toHaveAttribute("src", movieSource);
  });

  test("Can user remove a bookmark", async () => {
    render(
      <MemoryRouter initialEntries={["/awesomeMovi/"]}>
        <BookmarkProvider>
          <App />
        </BookmarkProvider>
      </MemoryRouter>
    );

    const randomMovieCard = (await screen.findAllByTestId("movieCard"))[0];
    expect(randomMovieCard).toBeInTheDocument();

    const bookmarkBtn = await within(randomMovieCard).findByRole("button");
    await userEvent.click(bookmarkBtn);

    const bookmarkPage = await screen.findByText("BOOKMARKS");
    await userEvent.click(bookmarkPage);

    const bookmarkCard = await screen.findByTestId("bookmarkCard");
    expect(bookmarkCard).toBeInTheDocument();

    const removeBookmarkBtn = await within(bookmarkCard).findByRole("button");
    await userEvent.click(removeBookmarkBtn);

    const bookmarkPage2 = await screen.findByText("BOOKMARKS");
    await userEvent.click(bookmarkPage2);

    expect(
      await screen.findByText("No bookmarked movies in your list.")
    ).toBeInTheDocument();
  });
});
