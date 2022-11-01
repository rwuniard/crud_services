// Load the app.
const app = require('./app');
const dbConnect = require('./databases/connectDB');


// Load the port.
const port = process.env.PORT || 3000;

// Connect to the database.
dbConnect().then((result) => {
    console.log("Connected to the database.");
}).catch((error) => {
    console.log("Error connecting to the database.", error);
});

// Start the server.
app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});
