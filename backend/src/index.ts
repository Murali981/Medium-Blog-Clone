import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { cors } from "hono/cors";

// import { verify } from "hono/jwt";

// const app = new Hono();

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();
app.use("/*", cors());

// app.use("/api/v1/blog/*", async (c, next) => {
//   // This is the topware middleware which will run before the protected routes
//   // Get the header
//   // verify the header
//   // If the header is correct then we can proceed
//   // If not , we return the user a 403 status code....
//   const jwt = c.req.header("Authorization");
//   if (!jwt) {
//     c.status(401);
//     return c.json({ error: "unauthorized" });
//   }
//   const token = jwt.split(" ")[1];
//   const payload = await verify(token, c.env.JWT_SECRET);
//   if (!payload) {
//     c.status(401);
//     return c.json({ error: "unauthorized" });
//   }
//   c.set("userId", payload.id);
//   await next();
// });

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app;
