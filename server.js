import express from "express";
import notFoundMiddlewar from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
const app = express();

notFoundMiddlewar;

app.get("/", (req, res) => {
  throw new Error("error");
  res.send("Welcome");
});

app.use(notFoundMiddlewar);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening to port ${port}...`);
});
