var movieStars = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(movieStars);
    });

    app.post("/api/friends", function (req, res) {
        movieStars.push(req.body);
        res.json(true);
    });
};
