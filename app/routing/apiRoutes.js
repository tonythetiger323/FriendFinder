//Load data
const friends = require("../data/friends.js");

//Routing
module.exports = (app) => {
    //API get request to send friend's array from friends.js file as json data
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });

    //API post requests
    app.post("/api/friends", (req, res) => {
        //store newFriend data colleted from survey into a variable
        const postFriend = req.body;

        //declare variables needed for post route
        let difference = 40;
        let matchedName = "";
        let matchedPhoto = "";

        //forEach function to compare scored of newFriend with all others already in friendsArray to determine a match
        friends.forEach((friend) => {
            //create an empty array to push the difference of score values to
            let matchScoreArray = [];

            //loop through the array of newFriend scores and find the difference of the value in the equivalent index of each frined being compared to and push that to the matchScoreArray
            for (let i = 0; i < friend.scores.length; i++) {
                matchScoreArray.push(Math.abs((postFriend.scores[i]) - (friend.scores[i])));
            }

            //function to assist in reducing the matchScareArray to the totalDifference
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            let totalDifference = matchScoreArray.reduce(reducer);

            //If statements that sets difference to totalDifference, if the totalDifference is less than the difference, this is how we find the friend that has the lowest difference, we then set that friend's data to the corrseponding "matched" variables so we can send the json response that will update the data in the modal.
            if (totalDifference < difference) {
                difference = totalDifference;
                matchedName = friend.name;
                matchedPhoto = friend.photo;
            }
        });

        //json response to send matched friend data back to survey.html to update the friend modal with the matched friend data
        res.json({
            name: matchedName,
            photo: matchedPhoto
        });

        //push the newFriend data obtained from the survey to the friendsArray in friends.js
        friends.push(postFriend);
    });

};