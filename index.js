const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// Create the Express server
const app = express();

// Use the bodyParser middleware to
// parse incoming request bodies into json
app.use(bodyParser.json());

// Use the cors middleware to
// allow request from different origin
app.use(cors());

// Serve static files from the client side
app.use(express.static(path.join(__dirname, "client/build")));

// A simple endpoint to check
// if the server is running
app.get("/", function(req, res) {
  res.send("Human Resources API - Health Check");
});

// This endpoint will "catch all" the requests that
// doesn't match one above and send back client index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "client/build/index.html"));
});

// Set the PORT from an env var or assign a default one
const PORT = process.env.PORT || 5000;

// Run the server listening in the port <PORT>
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
