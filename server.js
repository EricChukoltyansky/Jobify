import express from "express";
import dotenv from "dotenv";
import bp from "body-parser";
const app = express();
dotenv.config();
import "express-async-errors";
import morgan from "morgan";

// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

// middleware
import notFoundMiddlewar from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";	

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.get("/api/v1", (req, res) => {
  res.json({ msg: "API" });
});

// app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.use(notFoundMiddlewar);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    // console.log(process.env.MONGO_URL);
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening to port ${port}...`);
    });
  } catch (err) {
    console.log({ err: "An error has occured" });
  }
};

start();
