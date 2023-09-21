import { rest } from "msw";
import jwt from "jswonwebtoken";

//data
import { users } from "../data/userData.json";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    const secretKey = "your-secret-key"; //should be in .env file and be super secret #superSecurity
    const { username, password } = req.body;

    const matchedUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      const token = jwt.sign({ username: matchedUser.username }, secretKey, {
        expiresIn: "1h",
      });
      return res(
        ctx.status(200),
        ctx.json({
          message: "Login successfully",
          data: matchedUser,
          token,
        })
      );
    } else {
      return res(
        ctx.status(401),
        ctx.json({
          message: "Username or password is incorrect",
        })
      );
    }
  }),
];
