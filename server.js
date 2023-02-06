const express = require("express");

// ! express app created
const app = express();

// routes
app.get("/", (req, res) => {
    res.json({ mssg: "Welcome to the App" });
});

// listen to port number for requests
app.listen(4000, () => {
    console.log("listening on port 4000");
});
