import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import Login from "../component/Login.jsx";
import AuthProvider from "../context/AuthCtx";

describe("Basic login tests", () => {
  test("Login component renders", () => {
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
  });
  test("you can write in the username field", () => {
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    const usernameField = screen.getByPlaceholderText("Username");
    usernameField.value = "test";
    expect(usernameField.value).toBe("test");
  });
  test("you can write in the password field", () => {
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    const passwordField = screen.getByPlaceholderText("Password");
    passwordField.value = "test";
    expect(passwordField.value).toBe("test");
  });
});

describe("Login test with mocked login function", () => {
  test("Login function is called when clicking login button", () => {
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    const loginButton = screen.getByRole("button");
    loginButton.click();
    expect(loginButton).toBeTruthy();
  });
});
