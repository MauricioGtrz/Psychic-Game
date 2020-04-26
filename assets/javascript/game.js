
// VARIABLES
// ==========================================================================
console.log("test");
// The array of letters for the game
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var randomLetter;

// variables used for the game
var wins = 0;
var loses = 0;
var guessesLeft = 9;
var userGuesses = '';

// FUNCTIONS
// ==============================================================================

// Function that creates a new letter
function renderLetter() {
    // If there are still more questions, render the next one.
        randomLetter = letters[Math.floor(letters.length * Math.random())];
  }

function resetGuesses() {
    guessesLeft = 9;
    guessesLeft = '';
}
  
// Function that updates the score and other variables
function updateScore() {
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("loses").innerHTML = "Loses: " + loses;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("userGuesses").innerHTML = "Your guesses so far: " + userGuesses;
}

// MAIN PROCESS
// ==============================================================================

// Calling functions to start the game.
updateScore();
renderLetter();

// When the user presses a key, it will run the following function...
document.onkeyup = function (event) {

    var userInput = event.key.toLowerCase();
    userGuesses = userGuesses + ' ' + userInput;

    // If they guess the correct answer, increase and update score, alert them they got it right.
    if (userInput === randomLetter) {
        alert("Correct!");
        wins++;
        resetGuesses();
        updateScore();
        renderLetter();
        // return and restart if win set guess = 9
      }
    // If wrong, update guesses left.
    else {
        guessesLeft = guessesLeft - 1;
        updateScore();
    }

    // If there are no more guesses left, reset the game.
    if (guessesLeft == 0) {
        loses++;
        updateScore();
        alert("You Lost! >:)");
        resetGuesses();
        updateScore();
        renderLetter();
    }
}