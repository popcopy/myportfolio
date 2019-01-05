$(document).ready(function(){

$("#start-button").on("click", startGame.startTimer);

});


var startGame = {

//  time set at 90 sec

timeRemaining : 90,

// starts the game
startTimer: function() {
  $("#timer").text("Time remaining: " + startGame.timeRemaining);
  setInterval(startGame.countdown, 1000);
  $("#start-page").hide();
  trivia.displayQuestions();
},


countdown: function() {
  startGame.timeRemaining--;
  $("#timer").text("Time remaining: " + startGame.timeRemaining);
  if (startGame.timeRemaining === 0) {     //stops at 0
    startGame.stopTimer();
    $("#timer").empty();
  }
},


stopTimer: function() {
  clearInterval();
  trivia.checkAnswers();
},

showEndPage: function(numCorrect, numIncorrect, numUnanswered) {
  $("#endPage").show();
  $("#questionBox").empty();
  $("#timer").empty();
  $("#timer").hide();
  $("#results").append(`<h1> Results:</h1>`);
  $("#correctAnswer").text("Correct answers: " + numCorrect);
  $("#incorrectAnswer").text("Incorrect answers: " + numIncorrect);
  $("#unanswered").text("Zoned Out? : " + numUnanswered);
}
}

var trivia = {


displayQuestions: function() {
  var divContainer = $("#questionBox");
  var answerGroup = $(".form-check");
  divContainer.append('<h2>Answer the following questions:</h2>');
          
  for (var i = 0; i < questionBank.length; i++) {

    divContainer.append('<div id="question">' + questionBank[i].question + '</div>');

    var answer1 = questionBank[i].answers[0];
    var answer2 = questionBank[i].answers[1];
    var answer3 = questionBank[i].answers[2];

    divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
    divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
    divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
  }

 
  var doneButton = '<button class="btn btn-primary" id="doneButton" type="submit">Done</button>';
  divContainer.append(doneButton);
  $("#doneButton").on("click", startGame.stopTimer);
},

checkAnswers: function() {
  var correctAnswer;
  var userAnswer;
  var numCorrect = 0;
  var numIncorrect = 0;
  var numUnanswered = 0;


  for (var i = 0; i < questionBank.length; i++) {
    correctAnswer = questionBank[i].correct;
    userAnswer = $('input[id=radio'+i+']:checked + label').text();

    if (userAnswer === correctAnswer) {
      numCorrect++;
    } else if (userAnswer === "") {
      numUnanswered++;
    } else if (userAnswer !== correctAnswer) {
      {
        numIncorrect++;
      }
    }
  }


  startGame.showEndPage(numCorrect, numIncorrect, numUnanswered);
},
}


var questionBank =
[
  {
    question: "1)  Which 80s movie was the highest grossing film of the decade?",
    answers: ["E.T. The Extraterrestrial", "Gone With the Wind", "Mad Max"],
    correct: "E.T. The Extraterrestrial"
  },
  {
    question: "2)  Which 80s movie spawned 6 sequels and a T.V. series?",
    answers: ["Superman", "Back to the Future", "Police Academy"],
     correct: "Police Academy"
  },
  {
    question: "3)  Which 1980s theme song was inspired by a commercial jingle?",
    answers: ["Forrest Gump", "Ghostbusters", "The Longest Yard"],
    correct: "Ghostbusters"
  },
  {
    question: "4)  Which film was Disney’s first animated film to use computer graphics in the 80`s?",
    answers: ["The Secret of NIMH", "The Fox and the Hound", "The Longest Yard"],
    correct: "The Fox and the Hound"
  },
  {
    question: "5)  In The Blues Brothers, what does SCMODS stand for?",
    answers: ["State County Municipal Offender Data Systems", "Sound Control Manual Override Deliver Systemy", "Slow Calm Mellow Over Dark souls "],
    correct: "State County Municipal Offender Data Systems"
  },
  {
    question: "6)  Which 80s animated movie’s tagline was “Beyond good. Beyond evil. Beyond your wildest imagination.”?",
    answers: ["The Secret of NIMH", "The Transformers: The Movie", "The Longest Yard"],
    correct: "The Transformers: The Movie"
  },
  {
    question: "7)  How many Nightmare On Elm Street movies were made in the 80's?",
    answers: ["2", "5", "6"],
    correct: "5"
  },
  {
    question: "8)  In 'Dirty Dancing' what was Baby's real name?",
    answers: ["Mary", "Half Pint", "Frances"],
    correct: "Frances"
  }
]