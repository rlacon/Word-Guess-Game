var wins = 0;
var guessesRemaining = 10;
var lettersGuessed = [];

var superheroNames = ["Superman", "Batman", "Deadpool", "Spiderman", "Thor", "Hulk"];
var chosenWord = "";

//---------------ON PAGE LOAD---------------//
var chosenWordLength = 0; //We need to know that this element is going to be a number for when it generates an ID from a string element later on.
var chosenWordUnderscores = [];

function beginGame() {

    //Computer auto picks a random word from array
    var randomInt = Math.floor(Math.random() * superheroNames.length);
    chosenWord = superheroNames[randomInt].toLowerCase();
    console.log(chosenWord);

    // When there is only one string in an array, each letter is counted as a string element.
    chosenWordLength = chosenWord.length;

    //For each string element in chosenWord, add and replace with underscores.
    for (var i = 0; i < chosenWordLength; i++) {
        chosenWordUnderscores.push("_");
    }

    //Log results and combine new elements to display on the screen. 
    console.log(chosenWordUnderscores);
    document.getElementById("current-word-text").textContent = chosenWordUnderscores.join(" "); // Takes the string elements in the array and show each one as an individual value, removes the spaces, and pushes everything in the array to make it one word.
};

//---------------GAME BEGINS HERE---------------//

// Press a key to make a guess
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);
    lettersGuessed.push(userGuess); // lettersGuessed will be the array that holds onto everything in the game.
    // The empty parantheses makes it so that the code before the equal sign fills in the space of the string that's chosen from lettersGuessed.
    document.getElementById("letters-guessed-text").textContent = lettersGuessed.join(" ");

    // The letter the user has pressed doesnt exist in the word we've chosen.
    var letterExists = false; 
    for (var i = 0; i < chosenWordLength; i++) {
        if (chosenWord[i] === userGuess) {
            letterExists = true;
            console.log(letterExists);
        }
    }

    // Change underscores back to the correct word.
    if (letterExists) {
        for (var j = 0; j < chosenWordLength; j++) { // We use j so that JS understands this is a different loop from the one before it.
            if (chosenWord[j] === userGuess) {
                chosenWordUnderscores[j] = userGuess; // (e.g. If the word has 5 letters, then chosenWord[0] is the same as chosendWordUnderScores[0], because that's the first thing it understands in the word.
            }
        } document.getElementById("current-word-text").textContent = chosenWordUnderscores.join(" ");
    }

}; //tahek this letter, check it against our word, and ask if this letter exist (will be an if else statement, with a for loop nested inside of it. Or a for, with an if inside the for (like RPS))



//If key pressed doesn't match, decrease number of guesses by -1

    //Add letter to "letters-guessed-text" 


//---------------LOSE GAME---------------//

//If key pressed doesn't match, decrease number of guesses by -1

    //Add letter to "letters-guessed-text" 

//When guessesRemaining = 0, display alert message "You Lose!" 

    //Reset guesses-remaining-text and letters-guessed-text

    //Computer chooses new word from array


//---------------WIN GAME---------------//

//If chosenWord is fully typed, display alert message "You Win!"

    //Add 1 point to wins counter

    //Reset guesses-remaining-text and letters-guessed-text

    //Computer chooses new word from array