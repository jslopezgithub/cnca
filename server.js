const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("./Frontend/build"))

app.listen(PORT, () => { 
  console.log("app started");
});