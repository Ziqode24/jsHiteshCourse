# Project related to DOM

[Click for Template](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## project2 [ *BMI_CALCULATOR* ]:

```javascript
const form = document.querySelector('form');

//this will give empty | it gets value after pageload
// const weight = parseInt(document.querySelector("#weight").value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = ' please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = ' please give a valid weight';
  } else {
    const bmi = (weight / (height ** 2 / 10000)).toFixed(2);
    //to show the reult
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```




## project 3 [ *CLOCK* ]
```javascript
const time = document.getElementById('clock');

//setInterval
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## project 4 [ *Guess The Number* ]
```javascript
// ==============================
// Random Number Guessing Game
// ==============================

/*
  This game generates a random number between 1 and 100. The player has
  up to 10 attempts to guess the number. After each guess, feedback is
  provided to indicate whether the guess was too high, too low, or correct.
  If the player exhausts all attempts or guesses the number correctly, 
  the game ends, with an option to start a new game.
*/

// ==============================
// 1. Random Number Generation
// ==============================

/*
  Generates a random integer between 1 and 100. 
  This is the number the player needs to guess.
*/
let randomNum = parseInt(Math.random() * 100 + 1);

// ==============================
// 2. DOM Selection
// ==============================

/*
  Selecting key elements from the DOM that we will manipulate throughout the game:
  - submit: The submit button.
  - userInput: The input field where the player enters their guess.
  - guessSlot: The area where previous guesses are displayed.
  - remaining: Displays how many attempts the player has left.
  - lowOrHi: Displays feedback if the guess is too high or too low.
  - startOver: A container for the new game button after the game ends.
*/
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// ==============================
// 3. Game Control Variables
// ==============================

/*
  - prevGuess: Stores all previous guesses to display them.
  - numGuess: Keeps track of the number of guesses the player has made.
  - playGame: A flag to control whether the game is active or not.
*/
let prevGuess = [];
let numGuess = 2;
let playGame = true;

// ==============================
// 4. Event Listener: Submit Button
// ==============================

/*
  Listening for the 'click' event on the submit button. When clicked,
  it prevents the default form behavior and triggers the guess validation process.
*/
if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent default form submission
    const guess = parseInt(userInput.value);  // Get the user's guess
    validateGame(guess);  // Validate the guess
  });
}

// ==============================
// 5. Game Functions
// ==============================

// ==============================
// 5.1 Validate the Guess
// ==============================

/*
  This function checks if the user's guess is valid:
  - Is it a number?
  - Is it between 1 and 100?
  If valid, the guess is added to the list of previous guesses,
  and the game checks if it's correct or if more attempts are needed.
*/
function validateGame(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a Valid Number');  // Check if guess is a number
  } else if (guess < 1) {
    alert('Please Enter a Number Greater Than 0');  // Ensure guess is positive
  } else if (guess > 100) {
    alert('Please Enter a Number Less Than 101');  // Ensure guess is within range
  } else {
    prevGuess.push(guess);  // Add guess to previous guesses array
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. The Random Number was ${randomNum}`);
      endGame();  // End the game if 10 attempts are used
    } else {
      displayGuess(guess);  // Display the guess
      checkGuess(guess);    // Check if the guess is correct, too high, or too low
    }
  }
}

// ==============================
// 5.2 Check the Guess
// ==============================

/*
  This function checks whether the guess is correct, too low, or too high:
  - If the guess matches the random number, the player wins.
  - Otherwise, feedback is provided on whether the guess is too low or too high.
*/
function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage('Congratulations! You guessed it right!');
    endGame();  // End the game if the guess is correct
  } else if (guess < randomNum) {
    displayMessage('Your guess is too low!');  // Feedback for low guess
  } else if (guess > randomNum) {
    displayMessage('Your guess is too high!');  // Feedback for high guess
  }
}

// ==============================
// 5.3 Display the Guess
// ==============================

/*
  This function handles the display of the player's guess in the DOM:
  - It clears the input field after each guess.
  - It appends the guess to the list of previous guesses.
  - It updates the remaining number of attempts.
*/
function displayGuess(guess) {
  userInput.value = '';  // Clear the input field after guess
  guessSlot.innerHTML += `${guess}, `;  // Display the guess in the DOM
  numGuess++;  // Increment the number of guesses
  remaining.innerHTML = `${12 - numGuess}`;  // Update remaining attempts
}

// ==============================
// 5.4 Display Feedback Message
// ==============================

/*
  This function updates the feedback area with a message indicating
  whether the guess was correct, too low, or too high.
*/
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;  // Display the message in the DOM
}

// ==============================
// 5.5 End the Game
// ==============================

/*
  Once the game is over (either through guessing the number or using all attempts),
  this function disables the input field, displays a message, and provides a button
  to start a new game.
*/
function endGame() {
  userInput.value = '';  // Clear the input field
  userInput.setAttribute('disabled', '');  // Disable the input field
  const p = document.createElement('p');  // Create a new element for the new game button
  p.classList.add('button');  // Add class for styling
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;  // Add text to the button
  startOver.appendChild(p);  // Append the button to the DOM
  playGame = false;  // Set the play flag to false, preventing further guesses
  newGame();  // Initialize the new game functionality
}

// ==============================
// 5.6 Start a New Game
// ==============================

/*
  This function resets the game state when the player chooses to start a new game.
  It generates a new random number, clears previous guesses, resets attempts,
  and re-enables the input field for the next game.
*/
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function () {
    randomNum = parseInt(Math.random() * 100 + 1);  // Generate a new random number
    prevGuess = [];  // Clear previous guesses
    numGuess = 1;  // Reset the guess count
    guessSlot.innerHTML = '';  // Clear previous guesses from the display
    remaining.innerHTML = `${12 - numGuess}`;  // Reset remaining attempts display
    userInput.removeAttribute('disabled');  // Re-enable the input field
    startOver.removeChild(newGameButton.parentElement);  // Remove the 'Start New Game' button
    playGame = true;  // Set the play flag to true, allowing a new game
  });
}
```



