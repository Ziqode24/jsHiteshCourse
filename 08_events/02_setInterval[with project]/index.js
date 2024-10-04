// =========================================
//          Random Color Generator
// =========================================

// =======================
//      Random Color Function
// =======================
const randomColor = () => {
    let colorDigits = "0123456789ABCDEF"; // Hexadecimal characters for color codes.
    let color = "#"; // Starting a hex color with '#'.
    
    // Generating a 6-digit random color.
    for (let i = 0; i < 6; i++) {
        color += colorDigits[Math.floor(Math.random() * 16)]; // Randomly picks a character from colorDigits.
    }
    return color;
};

// =======================
//     Changing Background Color
// =======================
let intervalId; // Global variable to store interval ID.

const startChangingcolor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBackColor, 1000); // Starts interval if it's not already running.
    }

    // Function to change background color
    function changeBackColor() {
        document.body.style.backgroundColor = randomColor(); // Changes the background color to a random one.
        document.querySelector("#color-code").innerText = randomColor(); // Displays the random color code.
    }
};

// =======================
//     Stop Changing Color
// =======================
const stopChangingcolor = function () {
    clearInterval(intervalId); // Clears the interval, stopping the color change.
    intervalId = null; // Why reset intervalId to null after clearing the interval?

    /*
    After calling clearInterval, it's a good practice to reset intervalId to null because this 
    prevents the interval from being started again unless explicitly triggered. Without this 
    step, if the start button is clicked again without stopping the previous interval, a new 
    interval would begin, potentially leading to multiple intervals running in parallel.
    */
};

// Event listeners for start and stop buttons.
document.querySelector("#start").addEventListener("click", startChangingcolor);
document.querySelector("#stop").addEventListener("click", stopChangingcolor);

// ====================
// Key Concepts Summarized:
// ====================

/*
1. Random Color Generation:
   - A random hexadecimal color is generated using characters from "0123456789ABCDEF".
   - The color is built by appending 6 randomly selected hex digits to a '#'.

2. setInterval:
   - Repeatedly executes a function (in this case, `changeBackColor`) every specified number of milliseconds.
   - An interval ID is returned, which can be stored for future reference.

3. clearInterval:
   - Stops an interval from executing further by using the interval ID returned from `setInterval`.

4. Best Practices:
   - The check `if (!intervalId)` ensures that multiple intervals are not set up accidentally.
   - Setting `intervalId = null` after calling `clearInterval` is important because it helps avoid multiple intervals running in parallel, which can happen if the user clicks the start button repeatedly.

5. Edge Case:
   - If you click the start button multiple times without this check, multiple intervals could start, leading to unexpected behavior (e.g., colors changing too quickly or inconsistently).
*/
