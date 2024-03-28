import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from "cors";
import morgan from "morgan";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser"
import session from "express-session";


import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const port = process.env.PORT;
const DB= process.env.DATABASE;
const __dirname = path.resolve();


// session
// we initialize the session method before routes so that all routes can access the session functions
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  proxy: true, // Required for Heroku & Digital Ocean (regarding X-Forwarded-For)
  name: 'MyCoolWebAppCookieNameBoy', // This needs to be unique per-host.

  cookie: {
    // secure: true, // required for cookies to work on HTTPS
    httpOnly: false,
    sameSite: 'none',

    maxAge: 60 * 60 * 1000,
  },
  rolling: true,
  store: MongoStore.create({
    mongoUrl: process.env.DATABASE
  })
}));


// routes



// use the frontend app
app.use(express.static(path.join(__dirname, "/app/dist")));
console.log(__dirname)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/app/dist/index.html'));
});

// database connection
const connectDb = async () => {
  if (!DB) {
    throw new Error("Database connection string is not provided. -b");
  }
  try {
    const connect = await mongoose.connect(DB);
    console.log(
      "database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.error("failed to connect to the database");
    console.error(error)
  }
};
connectDb();


// end point middleware
app.use((res, req, next) => {
  next(createHttpError(404, "endpoint not found"))
});

// error handler middleware
app.use((error, req, res, next) => {
  console.error(error);
  let errorMessage = "an unknown error occurred";
  let statusCode = 500;
  if (error instanceof Error) errorMessage = error.message;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});

// app listen
app.listen(port, () => {
  console.log(
    `[server]: hello, Server is running at http://localhost:${port}`
  );
});