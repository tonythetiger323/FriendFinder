//Load data
const friends = require("../data/friends.js");

//Routing
module.exports = (app) => {
    //API get requests
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });

    app.post("/api/friends", (req, res) => {

    });

};