// let guess = prompt("Let's play a game! Guess a number between 1 and 10")
// Cache our Start Game Button
let startBtn = document.getElementById('start', )

// Add event listener to the button
startBtn.addEventListener('click', game.makeGuess)

// The Game
let game = {
  secretNumber: Math.floor(Math.random() * 10) + 1,
  maxGuesses: 3,
  currentGuesses: 0, 
  makeGuess: function (guess) {
    // checking to see if we have maxed out guesses
  if (this.currentGuesses >= this.maxGuesses) {
    return "No more guesses left! Game over.";
  }
  // Increment our currentGuesses
  this.currentGuesses++;

  // See if the guess matches the secretNumber
  if (guess === this.secretNumber) {
    return "Congratulations! You guessed the secret number.";
  } else if (guess > this.secretNumber) {
    return "Too high! Try again.";
  } else {
    return "Too low! Try again.";
  }
  }
};


function makeGuess(guess) {
    // checking to see if we have maxed out guesses
  if (game.currentGuesses >= game.maxGuesses) {
    return "No more guesses left! Game over.";
  }
  // Increment our currentGuesses
  game.currentGuesses++;

  // See if the guess matches the secretNumber
  if (guess === game.secretNumber) {
    return "Congratulations! You guessed the secret number.";
  } else if (guess > game.secretNumber) {
    return "Too high! Try again.";
  } else {
    return "Too low! Try again.";
  }
}