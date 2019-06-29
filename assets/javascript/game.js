var wins = 0;
var guessesRemaining = 10;
const startingGuessCount = 10; 
var lettersGuessed = [];

var superheroNames = ["Superman", "Batman", "Deadpool", "Spiderman", "Thor", "Hulk"];
var chosenWord = ""; //String is also an array of character e.g. chosenWord[1]

//---------------ON PAGE LOAD---------------//
var chosenWordLength = 0; //We need to know that this element is going to be a number for when it generates an ID from a string element later on.
var chosenWordUnderscores = [];

function beginGame() {
    console.log("Starting a new game!");
    // Generate guesses remaining html element  
    document.getElementById("guesses-remaining-text").textContent = startingGuessCount;
    document.getElementById("wins-text").textContent = wins;

    // Reset letterGuessed 
    lettersGuessed = [];
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
    lettersGuessed.push(userGuess);
    // lettersGuessed is the array that holds onto all letters guessed in the game.
    // The empty parantheses makes it so that the code before the equal sign fills in the space of the string that's chosen from lettersGuessed.
    document.getElementById("letters-guessed-text").textContent = lettersGuessed.join(" ");

    // The letter the user has pressed doesnt exist in the word we've chosen.
    var letterExists = false;
    // Iterates over chosenWord letter by letter
    // chosenWord = Batman
    // guess = m
    // Run 1
    // Check if b == m 
    // If not then
    // guessRemaining--
    // Run 2
    // Check if a == m
    // If not then
    // guessRemaing

    for (var i = 0; i < chosenWordLength; i++) {
        if (chosenWord[i] === userGuess) {
            // What needs to happen when a letter is guessed correctly?
            // Set letterExists
            letterExists = true;
            console.log(letterExists);
            // Change the appropriate underscore character to the userGuess letter
            chosenWordUnderscores[i] = userGuess; // (e.g. If the word has 5 letters, then chosenWord[0] is the same as chosendWordUnderScores[0], because that's the first thing it understands in the word.
        }
        document.getElementById("current-word-text").textContent = chosenWordUnderscores.join(" ");
    } // End of for loop
    // Check if we found the letter 
    // If we did not update guessesRemaining variable
    //! is another way of saying "Not true"
    if (!letterExists) {
        guessesRemaining--; // guessesRemaining = guessesRemaining + 1
        console.log(guessesRemaining);
        document.getElementById("guesses-remaining-text").textContent = guessesRemaining;
        // Check if user lost
        if (guessesRemaining === 0) {
            beginGame();
        }
    }




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


}; 




//Take this letter, check it against our word, and ask if this letter exist (will be an if else statement, with a for loop nested inside of it. Or a for, with an if inside the for (like RPS))



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