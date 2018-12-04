//Dependencies
const path = require("path");

//Routing
//Connecting file to server.js
module.exports = (app) => {
    //HTML GET requests

    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    app.get("/home", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};

