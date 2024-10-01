let randomNumber = parseInt(Math.random() * 100 + 1);
const userGuess = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const userMessages = document.getElementById("message");
const guessSlot = document.getElementById("previous-guess");
const tryRemain = document.getElementById("try-left");
const hiddenButton = document.getElementsByClassName("reset-game")[0];
const hiddenPara = document.getElementsByClassName("reset-para")[0]; 

let prevGuess = [];
let numAttempts = 0;
let playgame = true;

hiddenButton.style.display = "none";
hiddenPara.style.display = "none";

if (playgame) {
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userGuess.value);
    if (!isNaN(guess)) {
      validateGame(guess);  
    }
  });
}

function validateGame(guess) {
  if (guess < 1) {
    displayMessage("Oops, too low! Please enter a number between 1 and 100");
  } else if (guess > 100) {
    displayMessage("Whoa, too high! Please enter a number between 1 and 100");
  } else {
    prevGuess.push(guess);
    if (numAttempts === 10) {
      displayGuess(guess);
      displayMessage(`Out of tries! The secret number was ${randomNumber}. Better luck next time!`);
      endGame();
    } else {
      displayGuess(guess);  
      checkGuess(guess);    
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("Yes! You nailed it!");
    alert("Yes! You nailed it!");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Too low! Try higher");
  } else if (guess > randomNumber) {
    displayMessage("Too high! Lower it down");
  }
}

function displayGuess(guess) {
  // Clear the slot before adding new guesses
  if (numAttempts === 0) {
    guessSlot.innerText = "";  // Clear the "None yet" message on the first guess
  }
  guessSlot.innerText += `${guess}, `;  // Append the new guess
  numAttempts++;
  tryRemain.innerText = `Tries Left: ${10 - numAttempts}`;
  userGuess.value = "";  // Clear the input field after each guess
}

function displayMessage(message) {
  userMessages.innerText = `${message}`;
}

function endGame() {
  userGuess.value = "";  
  userGuess.setAttribute("disabled", "");  
  hiddenButton.style.display = "block";    
  hiddenPara.style.display = "block";      
  playgame = false;  
}

function resetGame() {
  hiddenButton.addEventListener("click", function () {
    randomNumber = parseInt(Math.random() * 100 + 1);  
    prevGuess = [];
    numAttempts = 0;
    tryRemain.innerText = "Still plenty of chances!";
    userMessages.innerText = "Start guessing!";
    guessSlot.innerText = "None yet. C'mon, take a guess!";
    userGuess.removeAttribute("disabled");  
    hiddenButton.style.display = "none";    
    hiddenPara.style.display = "none";      
    playgame = true;  
  });
}

resetGame();