// Use express
const express = require('express');

// Load the app
const app = express();

// Load the router
const crudMessage = require('./routers/crudMessage');

// Load the express.json() middleware. 
// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());
app.use(crudMessage);

module.exports = app;