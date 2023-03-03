const express = require("express");
const app = express(); // create express server instance

//create a handling request

app.get("/", (request, response) => {
  response.send("Express JS"); //response body
});
module.exports = app;
