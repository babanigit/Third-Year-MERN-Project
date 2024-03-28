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
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT;
const DB= process.env.DATABASE;



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

// connection
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



app.listen(port, () => {
  console.log(
    `[server]: hello, Server is running at http://localhost:${port}`
  );
});