const express = require("express");
const cors = require("cors");
const app = express();

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

require("./zConnection/conn")

const PORT = process.env.PORT

app.use(express.json());



app.get("/", (req, res) => {
  res.send("hello world  from the server");
});


app.listen(PORT, () => {
    console.log(`server is running at localhost:${PORT} `);
  });