var wins = 0;
var guessesRemaining = 10;
var lettersGuessed = [];

var superheroNames = ["Superman", "Batman", "Deadpool", "Spiderman", "Thor", "Hulk"];
var chosenWord = "";

//---------------ON PAGE LOAD---------------//
var chosenWordLength = 0;//we need to know that this is going to be a number for when it pulls a string element later on 
var chosenWordUnderscores = [];

function beginGame() {

    //Computer auto picks a random word from array
    var randomInt = Math.floor(Math.random() * superheroNames.length);
    chosenWord = superheroNames[randomInt].toLowerCase();
    console.log(chosenWord);

    //Display chosenWord on "current-word-text"
    //document.getElementById("current-word-text").innerHTML = chosenWord;

    // When there is only one string, it counts each letter as a string element
    chosenWordLength = chosenWord.length;




    //Replace each string element of chosenWord with Underscores 
    //chosenWord = document.body.innerHTML.replace('_');

    for (var i = 0; i < chosenWordLength; i++) {
        chosenWordUnderscores.push("_");

    }
    console.log(chosenWordUnderscores);
    document.getElementById("current-word-text").textContent = chosenWordUnderscores.join(" "); //join is a function that literally takes the string elements in the array to show each element in the array as an individual, remove the spaces and push everything in the array to make it one thing.
};
//---------------GAME BEGINS HERE---------------//

// The user presses a key to make a guess
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);
    lettersGuessed.push(userGuess);
    //Lettersgguessed will be the array that holds onto everything
    //The empty parantheses makes it so that the content before the equal sign becomes filled in that space, which then displays on the screen without quotes on it
    document.getElementById("letters-guessed-text").textContent = lettersGuessed.join(" "); //join is a function that literally takes the string elements in the array to show each element in the array as an individual, remove the spaces and push everything in the array to make it one thing.
    var letterExists = false; //we are assuming that the letter the user presses doesnt exist in the word we've chosen.
    for (var i = 0; i < chosenWordLength; i++) {
        if (chosenWord[i] === userGuess) {
            letterExists = true;
            console.log(letterExists);
        }
    }

    //change underscores to the correct chosen word 
    // use j so that javasript understands that this is a different loop from the one before it
    if (letterExists) {
        for (var j = 0; j < chosenWordLength; j++) {
            if (chosenWord[j] === userGuess) {
                chosenWordUnderscores[j] = userGuess; //If the word has 5 letters, then chosenword[0] is the same thing as chosendWordUnderScore[0] because that's the first thing it understands in the word
            }
        } document.getElementById("current-word-text").textContent = chosenWordUnderscores.join(" ");
    }

}; //tahek this letter, check it against our word, and ask if this letter exist (will be an if else statement, with a for loop nested inside of it. Or a for, with an if inside the for (like RPS))


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