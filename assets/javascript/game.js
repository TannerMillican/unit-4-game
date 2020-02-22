var numbersToGuess = [];

for (var i = 19; i <= 120; i++) {
    numbersToGuess.push(i);
}

var computersRandomNumber = numbersToGuess[Math.floor(Math.random() * numbersToGuess.length)];
console.log(computersRandomNumber);

$(".randomNumber").append(computersRandomNumber);

var gemNumbers = [];

for (var i = 1; i <= 12; i++) {
    gemNumbers.push(i);
}

var numbersForGemsOne = gemNumbers[Math.floor(Math.random() * gemNumbers.length)];
console.log(numbersForGemsOne);

$(".gemOne").append(numbersForGemsOne);

$(".gemOne").click(addScore);

var numbersForGemsTwo = gemNumbers[Math.floor(Math.random() * gemNumbers.length)];
console.log(numbersForGemsTwo);

$(".gemTwo").append(numbersForGemsTwo);

$(".gemTwo").click(addScore);

var numbersForGemsThree = gemNumbers[Math.floor(Math.random() * gemNumbers.length)];
console.log(numbersForGemsThree);

$(".gemThree").append(numbersForGemsThree);

$(".gemThree").click(addScore);

var numbersForGemsFour = gemNumbers[Math.floor(Math.random() * gemNumbers.length)];
console.log(numbersForGemsFour);

$(".gemFour").append(numbersForGemsFour);

$(".gemFour").click(addScore);


function addScore() {
    var total;
    total = parseInt(numbersForGemsOne) + parseInt(numbersForGemsTwo) + parseInt(numbersForGemsThree) + parseInt(numbersForGemsFour);
    $(".scoreFromGems").append(total);
}