var psychic = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; 


document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
    var computerGuess = psychic[Math.floor(Math.random()*psychic.length)]; 
        guessesSoFar.push(userGuess); 
        
        if (userGuess == computerGuess) {
            wins++;
            guessesLeft = 9; 
            guessesSoFar.length = 0; 
}
        else if (guessesLeft == 0){
            losses++;
            guessesLeft = 9;
            guessesSoFar.length = 0;
}
        else if (userGuess !== computerGuess){
            guessesLeft--; 
}  

        var html = "<h1>The Psychic Game</h1>" + "<hr>" +
             "<p>Guess what letter I'm thinking of!</p>" +
             "<p>Total Wins: " + 
             wins + 
             "</p>" +
             "<p>Total Losses: " + 
             losses + 
             "</p>" +
             "<p>Guesses Left: " + 
             guessesLeft + 
             "</p>" +
             "<p>I wouldn't guess this letter again: " +
             guessesSoFar +
             "</p>";
        
        document.querySelector('#game').innerHTML = html;
}