var wins = 0;
var guessesRemaining = 10;
var lettersGuessed = [];

var superheroNames = ["Superman", "Batman", "Deadpool", "Spiderman", "Thor", "Hulk"];
var chosenWord = [];

//---------------ON PAGE LOAD---------------//

function beginGame() {
    alert("Press a key to guess the word!");


//Computer auto picks a random word from array
var randomInt = Math.floor(Math.random() * superheroNames.length);
var chosenWord = superheroNames[randomInt];
    console.log(chosenWord);

//Display chosenWord on "current-word-text"



//Replace each string element of chosenWord with underscores 
for (var i = 0; i <= chosenWord.length; i++) {
    
}


};
//---------------GAME BEGINS HERE---------------//

// The user presses a key to make a guess
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);

};
//If key pressed matches string element of chosenWord, replace underscore with word

//If key pressed doesn't match, decrease number of guesses by -1

    //Add letter to "letters-guessed-text" 


//---------------LOSE GAME---------------//

//When guessesRemaining = 0, display alert message "You Lose!" 

    //Reset guesses-remaining-text and letters-guessed-text

    //Computer chooses new word from array


//---------------WIN GAME---------------//

//If chosenWord is fully typed, display alert message "You Win!"

    //Add 1 point to wins counter

    //Reset guesses-remaining-text and letters-guessed-text

    //Computer chooses new word from array