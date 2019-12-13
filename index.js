// Env variables from config.js
const { port } = require("./src/config/config");

// Express lib
const express = require("express");

// Body parser lib
const bodyParser = require("body-parser");

// CORS lib
const cors = require("cors");

// Express validator
//const expressValidator = require("express-validator");

// Morgan lib logger middleware https://www.npmjs.com/package/morgan
// To log app activities a good way to keep track of what is going on
// Useful also to the debug issues when an exception come ups
const morgan = require("morgan");

// Defining the server/app
const server = express();

// Using CORS
server.use(cors());

// We use Morgan to log our server
// "tiny" The minimal output of the log the default light param
server.use(morgan("tiny"));

// Using the Body parser lib
server.use(bodyParser.json());

// Using Express validator
// server.use(expressValidator());

// Starting the server on env port
server.listen(`${port}`, () => {
    // Showing a message to the console informing on which port is running
    console.log(`Server is running on port ${port}`);
});
