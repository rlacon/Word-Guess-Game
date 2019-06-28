var superheroNames = ["Suoerman", "Batman", "Deadpool", "Spiderman", "Thor", "Hulk"];
var win = 0;
var currentWord = [];
var guessesRemaining = 0;
var lettersGuessed = [];

// The user presses any key to get started
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);
    var computerGuess = Math.floor(Math.random() * superheroNames.length);
    console.log(computerGuess);
    var chosen = computerGuess[superheroNames];
    console.log(chosen);
    
}



//The computer auto generates a random word from an array

//If a letter typed matches, it will appear on the line

//If a letter guessed doesn't match, the number of guesses remaining decreases by 1

//If the letter guessed doesn't match, it will appear under "letters already guessed"
userGuess.push(userGuess);
var guessesSoFarElement = document.getElementById("letters-guessed-text");
guessesSoFarElement.innerText += " " + userGuess;
//If the number of guesses hits 0, an alert message will display saying "You lose" and reset

//If the complete word is typed, an alert message will display saying "You win" and reset