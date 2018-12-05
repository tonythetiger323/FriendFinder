//Load data
const friends = require("../data/friends.js");

//Routing
module.exports = (app) => {
    //API get requests
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });

    //API post requests
    app.post("/api/friends", (req, res) => {

    });

};