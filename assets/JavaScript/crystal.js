$(document).ready(function () {

    var randomNumber = 0;
    var greenGemNum = 0;
    var blueGemNum = 0;
    var goldGemNum = 0;
    var purpleGemNum = 0;

    function randomNumGen() {

        randomNumber = Math.floor(Math.random() * 101) + 19;
        $("#randomNum").html(randomNumber);
    }
    function randomGemGen() {
        greenGemNum = Math.floor(Math.random() * 11) + 1;
        blueGemNum = Math.floor(Math.random() * 11) + 1; 
        goldGemNum = Math.floor(Math.random() * 11) + 1;
        purpleGemNum = Math.floor(Math.random() * 11) + 1;
    }
    randomNumGen();
    randomGemGen();

    var yourScoreIs = 0;
    var wins = 0;
    var losses = 0;

$("#greenGem").on("click", function () {
    yourScoreIs = yourScoreIs + greenGemNum;
    $("#yourScore").html(yourScoreIs);
        if (yourScoreIs === randomNumber) {
            wins = wins + 1;
            $("#wins").html("Wins:" + wins);
            $("#message").html("YOU WIN!"); 
        randomNumGen();
        randomGemGen();
        yourScoreIs = 0;
        $("#yourScore").html(yourScoreIs);
    }
        if (yourScoreIs > randomNumber) {
            losses = losses + 1;
            $("#losses").html("Losses:" + losses);
            $("#message").html("YOU LOSE!");
        randomNumGen();
        randomGemGen();
        yourScoreIs = 0;
        $("#yourScore").html(yourScoreIs);
    }
});
$("#blueGem").on("click", function () {
        yourScoreIs = yourScoreIs + blueGemNum;
        $("#yourScore").html(yourScoreIs);
        if (yourScoreIs === randomNumber) {
            wins = wins + 1;
            $("#wins").html("Wins:" + wins);
            $("#message").html("YOU WIN!"); 
        randomNumGen();
        randomGemGen();
        yourScoreIs = 0;
        $("#yourScore").html(yourScoreIs);
    }
        if (yourScoreIs > randomNumber) {
            losses = losses + 1;
            $("#losses").html("Losses:" + losses);
            $("#message").html("YOU LOSE!");
        randomNumGen();
        randomGemGen();
        yourScoreIs = 0;
        $("#yourScore").html(yourScoreIs);
    }
});
$("#goldGem").on("click", function () {
        yourScoreIs = yourScoreIs + goldGemNum;
        $("#yourScore").html(yourScoreIs);
        if (yourScoreIs === randomNumber) {
            wins = wins + 1;
            $("#wins").html("Wins:" + wins);
            $("#message").html("YOU WIN!");
        randomNumGen();
        randomGemGen();
        yourScoreIs = 0;
        $("#yourScore").html(yourScoreIs);
    }
        if (yourScoreIs > randomNumber) {
            losses = losses + 1;
            $("#losses").html("Losses:" + losses);
            $("#message").html("YOU LOSE!");
        randomNumGen();
        randomGemGen();
        yourScoreIs = 0;
        $("#yourScore").html(yourScoreIs);
    }
});
$("#purpleGem").on("click", function () {
        yourScoreIs = yourScoreIs + purpleGemNum;
        $("#yourScore").html(yourScoreIs);
        if (yourScoreIs === randomNumber) {
            wins = wins + 1;
            $("#wins").html("Wins:" + wins);
            $("#message").html("YOU WIN!");
        randomNumGen();
        randomGemGen();
        yourScoreIs = 0;
        $("#yourScore").html(yourScoreIs);
    }
        if (yourScoreIs > randomNumber) {
            losses = losses + 1;
            $("#losses").html("Losses:" + losses);
            $("#message").html("YOU LOSE!");
        randomNumGen();
        randomGemGen();
        yourScoreIs = 0;
        $("#yourScore").html(yourScoreIs);
    }
});
$("#reset").on("click", function () {
        wins = 0;
        losses = 0;
        yourScoreIs = 0;
        $("#wins").html("Wins:" + 0);
        $("#losses").html("Losses:" + 0);
        $("#yourScore").html(yourScoreIs);
        $("#message").html("");
        randomNumGen();
        randomGemGen();
    });
});