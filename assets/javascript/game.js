// Global variables

var targetNumber;
var userTotal = 0;
var wins = 0;
var losses = 0;

// Functions

function reset() {
    for(var i = 0; i < crystals.length; i++) {
        crystals[i].setAttribute("score", Math.floor(Math.random() * 11 + 1))
    }
    targetNumber = Math.floor(Math.random() * 101 + 19);
    userTotal = 0;
    $(".scoreFromGems").text(userTotal);
    $(".randomNumber").text(targetNumber);
}

function initialize() {
    crystals = document.getElementsByTagName("img")
    for(var i = 0; i < crystals.length; i++) {
        crystals[i].setAttribute("score", Math.floor(Math.random() * 11 + 1))
        crystals[i].addEventListener("click", (args) => {
            value = Math.round(args.target.getAttribute("score"))
            userTotal = userTotal + value;
            $(".scoreFromGems").text(userTotal);
            console.log(userTotal);
            logic();
        })
    }
    targetNumber = Math.floor(Math.random() * 101 + 19);
    $(".randomNumber").text(targetNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $(".scoreFromGems").text(userTotal);
}
function logic() {
    if (userTotal === targetNumber) {
        alert("You Win!");
        reset();
        wins++;
        $("#wins").text(+ wins);
    }
    else if (userTotal > targetNumber) {
        alert("You lose!");
        reset();
        losses++;
        $("#losses").text(+ losses);
    }
}

initialize();
