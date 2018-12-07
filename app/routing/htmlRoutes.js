//Dependencies
const path = require("path");

//Routing
//Connecting file to server.js
module.exports = (app) => {
    //HTML GET requests

    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    //route to home
    app.get("/home", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //set route to home if user just enters /
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //route to home no matter what user enters
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};

