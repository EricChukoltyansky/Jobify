import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

// middleware
import notFoundMiddlewar from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

// notFoundMiddlewar;

app.get("/", (req, res) => {
  // throw new Error("error");
  res.send("Welcome");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddlewar);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening to port ${port}...`);
    });
  } catch (err) {
    console.log({ err: "An error has occured" });
  }
};

start();
