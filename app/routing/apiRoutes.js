var famousMovieStars = require("../data/friends.js");


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(famousMovieStars);
    });

    app.post("/api/friends", function (req, res) {
       var newApplicant = req.body.scores;
        var applicantScores = [];
        var newMatch= 0;
        var pairedActor = 0;

 for(var i=0; i < famousMovieStars.length; i++){
    var diffInScores = 0;

    for(var p = 0; p < newApplicant.length; p++){
      diffInScores += (Math.abs(parseInt(famousMovieStars[i].scores[p]) - parseInt(newApplicant[p])));
    }
    applicantScores.push(diffInScores);
  }

  for(var i = 0; i < applicantScores.length; i++){
    if(applicantScores[i] <= applicantScores[pairedActor]){
      pairedActor = i;
    }
  }


  var popularPair = famousMovieStars[pairedActor];
  res.json(popularPair);

  
  famousMovieStars.push(req.body);
});
};
    