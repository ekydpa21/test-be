const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("App is running on port: ", port);
});
