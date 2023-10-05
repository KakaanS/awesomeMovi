import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import Login from "../pages/Login";
import AuthProvider from "../context/AuthCtx";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Basic login tests", () => {
  const customRender = () =>
    render(
      <Router>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </Router>
    );

  test("Login component renders", () => {
    customRender();
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
  });

  test("if user puts wrong password", async () => {
    const user = userEvent.setup();
    customRender();
    const usernameInput = screen.getByPlaceholderText("Username...");
    const passwordInput = screen.getByPlaceholderText("Password...");
    const loginButton = screen.getByRole("button");

    await user.type(usernameInput, "sampleuser");
    await user.type(passwordInput, "1243");
    await user.click(loginButton);

    const loggedIn = await screen.findByText("Wrong username or password");

    expect(loggedIn).toBeInTheDocument();
  });
});
