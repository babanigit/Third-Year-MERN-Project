// THIS IS CONNECTION TO THE MONGODB 
const mongoose = require("mongoose");


// we hided this link in config.env
const DB =process.env.DATABASE


// MAIN CONNECTION TO THE MONGODB
mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successful to the mongodb database.... :)");
  })
  .catch(() => {
    console.log("not connected to the mongo db database :(");
  });
