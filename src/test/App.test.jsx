// Tools
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import {
  render,
  screen,
  within,
  cleanup,
  waitFor,
} from "@testing-library/react";
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

describe("Login, logout, token verification", () => {
  test("test if user can login and logout", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/login"]}>
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

  test("if token is already set, user gets redirected to /", async () => {
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
});

describe("testing site navigation", () => {
  test("Can user click on a movie and see the movie details", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AuthContext.Provider value={{ user: { token: "sampletoken123" } }}>
          <App />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    const carousels = await screen.findAllByTestId("movie-carousel");
    const recommendedCarousel = carousels[0];
    expect(recommendedCarousel).toBeInTheDocument();

    const allMovies = within(recommendedCarousel).queryAllByTestId("movieCard");

    const movie = allMovies[0];
    screen.debug(movie);
    expect(movie).toBeInTheDocument();

    await user.click(movie);
    const bookMarkButton = await screen.findAllByText("+");
    expect(bookMarkButton[0]).toBeInTheDocument();
  });

  test("Can user click CATEGORY and see the category page", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <AuthContext.Provider value={{ user: { token: "sampletoken123" } }}>
          <App />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const category = await screen.findByText("CATEGORY");
    user.click(category);

    const categoryPage = await screen.findByText("Action");
    expect(categoryPage).toBeInTheDocument();
  });

  test("Can user click on bookmarks and see their bookmarks", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const bookmarks = await screen.findByText("BOOKMARKS");
    await user.click(bookmarks);

    const bookmarksPage = await screen.findByText("Your Bookmarks");
    expect(bookmarksPage).toBeInTheDocument();
  });

  test("Can user navigate from bookmarks to Home", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/bookmark"]}>
        <App />
      </MemoryRouter>
    );

    const homeBtn = await screen.findByText("HOME");
    await user.click(homeBtn);

    const homePage = await screen.findByText("Recommended for you");
    expect(homePage).toBeInTheDocument();
  });

  test("can user navigate from bookmarks to categories", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/bookmark"]}>
        <App />
      </MemoryRouter>
    );
    const categoryBtn = await screen.findByText("CATEGORY");
    await user.click(categoryBtn);

    const categoryPage = await screen.findByText("Action");
    expect(categoryPage).toBeInTheDocument();
  });

  test("Can user navigate from categories to Home", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/categories"]}>
        <App />
      </MemoryRouter>
    );
    const homeBtn = await screen.findByText("HOME");
    await user.click(homeBtn);

    const homePage = await screen.findByText("Recommended for you");
    expect(homePage).toBeInTheDocument();
  });

  test("Can user navigate from categories to bookmarks", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/categories"]}>
        <App />
      </MemoryRouter>
    );
    const bookmarksBtn = await screen.findByText("BOOKMARKS");
    await user.click(bookmarksBtn);

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
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
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
    await user.click(bookmarkBtn);

    const bookmarkPage = await screen.findByText("BOOKMARKS");
    await user.click(bookmarkPage);

    expect(await screen.findByText("Your Bookmarks")).toBeInTheDocument();
    expect(await screen.findByRole("img")).toHaveAttribute("src", movieSource);
  });

  test("Can user remove a bookmark", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <BookmarkProvider>
          <App />
        </BookmarkProvider>
      </MemoryRouter>
    );

    const randomMovieCard = (await screen.findAllByTestId("movieCard"))[0];
    expect(randomMovieCard).toBeInTheDocument();

    const bookmarkBtn = await within(randomMovieCard).findByRole("button");
    await user.click(bookmarkBtn);

    const bookmarkPage = await screen.findByText("BOOKMARKS");
    await user.click(bookmarkPage);

    const bookmarkCard = await screen.findByTestId("bookmarkCard");
    expect(bookmarkCard).toBeInTheDocument();

    const removeBookmarkBtn = await within(bookmarkCard).findByRole("button");
    await user.click(removeBookmarkBtn);

    const bookmarkPage2 = await screen.findByText("BOOKMARKS");
    await user.click(bookmarkPage2);

    expect(
      await screen.findByText("No bookmarked movies in your list.")
    ).toBeInTheDocument();
  });

  test("Adding movie to bookmark from the movieCard", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <BookmarkProvider>
          <App />
        </BookmarkProvider>
      </MemoryRouter>
    );

    const carousels = await screen.findAllByTestId("movie-carousel");
    const recommendedCarousel = carousels[0];
    expect(recommendedCarousel).toBeInTheDocument();

    const allMovies = within(recommendedCarousel).queryAllByTestId("movieCard");
    const movie = allMovies[0];
    expect(movie).toBeInTheDocument();
    await user.click(movie);

    const bookmarkBtn = await screen.findAllByText("+");
    await user.click(bookmarkBtn[0]);

    const bookmarkPage = await screen.findByText("BOOKMARKS");
    await user.click(bookmarkPage);

    await waitFor(() => {
      expect(
        screen.queryByText("No bookmarked movies in your list.")
      ).not.toBeInTheDocument();
    });
  });
});

describe("Searchbar integration test(s)", async () => {
  beforeEach(() => {
    localStorage.clear();
    cleanup();
  });
  afterEach(() => {
    localStorage.clear();
    cleanup();
  });

  test("Can user add searchresult directly to bookmarks", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <BookmarkProvider>
          <App />
        </BookmarkProvider>
      </MemoryRouter>
    );
    const searchbar = await screen.findByPlaceholderText(
      "Search for a movie..."
    );
    await user.type(searchbar, "Psycho");
    await screen.findByText("Psycho");

    const randomMovieCard = (await screen.findAllByTestId("movieCard"))[0];
    expect(randomMovieCard).toBeInTheDocument();

    const bookmarkBtn = await within(randomMovieCard).findByRole("button");
    await user.click(bookmarkBtn);

    const bookmarkPage = await screen.findByText("BOOKMARKS");
    await user.click(bookmarkPage);

    const bookmarkCard = await screen.findByTestId("bookmarkCard");

    expect(bookmarkCard).toBeInTheDocument();
  });

  test("Can user search for a movie, click it and see the movie details", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const searchbar = await screen.findByPlaceholderText(
      "Search for a movie..."
    );
    await user.type(searchbar, "Psycho");
    await screen.findByText("Psycho");
    user.click(await screen.findByText("Psycho"));

    const movieDetails = await screen.findByTestId("movieCard");
    expect(movieDetails).toBeInTheDocument();
  });
});

describe("testing category functionality", () => {
  test("Can user click on a category, then a movie within that category and see the movie details", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const category = await screen.findByText("CATEGORY");
    await user.click(category);

    const categoryPage = await screen.findByText("Action");
    expect(categoryPage).toBeInTheDocument();

    const movie = await screen.findByText("The Dark Knight");
    await user.click(movie);

    const movieDetails = await screen.findByText("GENRE:");

    expect(movieDetails).toBeInTheDocument();
  });
  test("if I can click a specific category, see the movies then click All Movies, to see all movies", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const category = await screen.findByText("CATEGORY");
    await user.click(category);

    const categoryPage = await screen.findByText("Horror");
    expect(categoryPage).toBeInTheDocument();

    const movie = await screen.findByText("Psycho");
    expect(movie).toBeInTheDocument();

    const allMovies = await screen.findByText("All movies");
    await user.click(allMovies);

    expect(categoryPage).toBeInTheDocument();
  });
});
