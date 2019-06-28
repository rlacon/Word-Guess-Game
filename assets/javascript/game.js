
//For array, nest secondary arrays inside of superheroNames array for each name. Separate each word by string element. e.g.: var firstWord = ["S", "U","P","E","R","M","A","N",];

var superheroNames = ["Superman", "Batman", "Deadpool", "Spiderman", "Thor", "Hulk"];
var win = 0;
var currentWord = [];
var guessesRemaining = 0;
var lettersGuessed = [];

// The user presses any key to get started
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);
    var chosenWord = Math.floor(Math.random() * superheroNames.length);
    console.log(chosenWord);
}

// When key pressed...

//Computer auto picks a random word from array

//Generate underscores in place of chosen word and display on screen

//When key pressed matches a string element, show word in place of underscore








//If a letter guessed doesn't match, the number of guesses remaining decreases by 1

//If the letter guessed doesn't match, it will appear under "letters already guessed"

//If the number of guesses hits 0, an alert message will display saying "You lose" and reset

//If the complete word is typed, an alert message will display saying "You win" and reset