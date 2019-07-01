var wins = 0;
var guessesRemaining = 10;
var successfulGuesses = 0;
const startingGuessCount = 10;
var lettersGuessed = [];

var superheroNames = ["Superman", "Batman", "Deadpool", "Spiderman", "Thor", "Hulk"];

//String is also an array of characters (e.g. chosenWord[1] will be "h")
var chosenWord = ""; 

//We need to know that this element is going to be a number for when it generates an ID from a string element later on.
var chosenWordLength = 0; 
var chosenWordUnderscores = [];

//---------------ON PAGE LOAD---------------//

function beginGame() {
    console.log("Starting a new game!");

    // Generate guesses remaining html element  
    document.getElementById("guesses-remaining-text").textContent = startingGuessCount;
    document.getElementById("wins-text").textContent = wins;

    // Reset success count
    successfulGuesses = 0;
    // Reset Guesses Remaining
    guessesRemaining = startingGuessCount;

    // Reset letterGuessed 
    lettersGuessed = [];
    // Reset chosenWordUnderscores both in javascript and HTML
    chosenWordUnderscores = [];
    document.getElementById("letters-guessed-text").textContent = chosenWordUnderscores;

    //Computer auto picks a random word from array
    var randomInt = Math.floor(Math.random() * superheroNames.length);
    chosenWord = superheroNames[randomInt].toLowerCase();
    console.log("Chosen word " + chosenWord);

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

    // lettersGuessed holds onto all letters guessed in the game.
    lettersGuessed.push(userGuess);
    if(!lettersGuessed.includes(userGuess)){
        lettersGuessed.push(userGuess);
      }
    // The empty parantheses makes it so that the code before the equal sign fills in the space of the string that's chosen from lettersGuessed.
    document.getElementById("letters-guessed-text").textContent = lettersGuessed.join(" ");

    // The letter the user has pressed doesnt exist in the word we've chosen.
    var letterExists = false;

    // Iterates over chosenWord letter by letter
    for (var i = 0; i < chosenWordLength; i++) {
        if (chosenWord[i] === userGuess) {
            // What needs to happen when a letter is guessed correctly?
            // Set letterExists
            letterExists = true;
            console.log(letterExists);

            // Change the appropriate underscore character to the userGuess letter
            chosenWordUnderscores[i] = userGuess; // (e.g. If the word has 5 letters, then chosenWord[0] is the same as chosendWordUnderScores[0], because that's the first thing it understands in the word)
        } document.getElementById("current-word-text").textContent = chosenWordUnderscores.join(" ");
    }

    //---------------LOSE GAME---------------//

    // Check if we found the letter 
    // If we did not, update guessesRemaining variable
    // (! is another way of saying "Not true")
    if (!letterExists) {
        guessesRemaining--;
        console.log(guessesRemaining);
        document.getElementById("guesses-remaining-text").textContent = guessesRemaining;
        // Check if user lost
        if (guessesRemaining === 0) {
            beginGame();
        }

    //---------------WIN GAME---------------//

    } else {
        // Letter found!
        // Increase success count
        successfulGuesses++;
        // Check if they won the game
        if (successfulGuesses === chosenWordLength) {
            // Increase win count and reset
            wins++;
            alert("You win!");
            beginGame();
        }
    }
};

    //---------------IF ELSE CONDITION RULES---------------//

    // if (condition){
    //     // Gets run only if condition is true
    // }
    // // This runs no matter what

    // if (condition){
    //     // Only runs if condition is true
    // }else {
    //     // Runs only when condition is false
    // } 
    // // This runs no matter what

    // if (condition){
    //     // Only runs if condition is true
    // }else if (condition){
    //     // Only runs if else condition is true
    // } else if (condition){
    //     // Only runs if else condition is true
    // }
    // // This runs no matter what