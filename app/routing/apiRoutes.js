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
        const postFriend = req.body;
        let difference = 40;
        let matchedName = "";
        let matchedPhoto = "";
        friends.forEach((friend) => {
            console.log('Comparing to:');
            console.log(friend.name);

            let matchScoreArray = [];
            for (let i = 0; i < friend.scores.length; i++) {
                matchScoreArray.push(Math.abs((postFriend.scores[i]) - (friend.scores[i])));
            }

            console.log('MatchScoreArray: ' + matchScoreArray);

            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            let totalDifference = matchScoreArray.reduce(reducer);

            console.log('The Total Difference Is: ' + totalDifference);

            if (totalDifference < difference) {
                difference = totalDifference;
                matchedName = friend.name;
                matchedPhoto = friend.photo;
            }
            console.log('Matched Friend Name:' + matchedName);
        });
        res.json({
            name: matchedName,
            photo: matchedPhoto
        });

        friends.push(postFriend);
        console.log('Contents of Friends Array: ')
        console.log(friends);
    });

};