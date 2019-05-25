const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Create the Express server
const app = express();

// Use the bodyParser middleware to
// parse incoming request bodies into json
app.use(bodyParser.json());

// Use the cors middleware to
// allow request from different origin
app.use(cors());

// A simple endpoint to check
// if the server is running
app.get("/", function(req, res) {
  res.send("Human Resources API - Health Check");
});

// Set the PORT from an env var or assign a default one
const PORT = process.env.PORT || 5000;

// Run the server listening in the port <PORT>
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
