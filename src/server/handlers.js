import { rest } from "msw";

import userData from "../data/userData.json";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    const { username, password } = req.body;

    const user = userData.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      console.log("user:", user);
      return res(ctx.status(200), ctx.json({ token: user.token }));
    } else {
      return res(
        ctx.status(401),
        ctx.json({ message: "Invalid username or password" })
      );
    }
  }),

  rest.get("/user", (req, res, ctx) => {
    const token = req.headers.get("Authorization");
    if (token === "Bearer valid-token") {
      return res(ctx.status(200), ctx.json({ username: "admin" }));
    } else {
      return res(ctx.status(401), ctx.json({ message: "Invalid token" }));
    }
  }),
];
