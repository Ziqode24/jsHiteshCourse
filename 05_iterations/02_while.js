// ==================================
//        While and Do-While Loops in JavaScript
// ==================================

// =======================
//        While Loop Syntax
// =======================
/*
    A while loop repeatedly executes a block of code as long as the specified condition is true.

    Syntax:
    while (condition) {
        // code to execute
    }
*/

// =======================
//        How While Loop Works
// =======================
/*
    Here's how a while loop works step by step:
    
    1. Check the condition before executing the code.
    2. If the condition is true, execute the code block inside the loop.
    3. After the code block, check the condition again.
    4. Repeat steps 2-3 until the condition becomes false.
*/

// Example: Incrementing index by 5 until it reaches 20
let index = 0;
while (index <= 20) {
  // console.log(`Value of index is ${index}`);
  index = index + 5; // Increases index by 5 each time.
}

// Example: Looping through an array with a step of 2
let myArray = ["Flash", "Batman", "Superman"];
let arr = 0;
while (arr < myArray.length) {
  // console.log(`Are you ${myArray[arr]}?`);
  arr = arr + 2; // Skips every other superhero.
}

// =======================
//       Do-While Loop Syntax
// =======================
/*
    A do-while loop is similar to a while loop, but it guarantees that the code block will run at least once, 
    even if the condition is false.

    Syntax:
    do {
        // code to execute
    } while (condition);
*/

// =======================
//        How Do-While Loop Works
// =======================
/*
    Here's how a do-while loop works step by step:
    
    1. Execute the code block inside the loop at least once.
    2. Check the condition after executing the code block.
    3. If the condition is true, repeat steps 1-2.
    4. If the condition is false, exit the loop.
*/

// Example: Displaying score and incrementing it
let score = 15;
do {
  console.log(`Score is ${score}`); // This will run at least once.
  score++; // Increments score by 1.
} while (score <= 10); // Condition is false, so loop stops after one iteration.

// Output: 15
// Explanation: The do-while loop executes the code block first, printing `score is 15`. 
// Then it checks the condition (score <= 10), which is false, so it exits the loop. 

// ====================
// Key Concepts Summarized:
// ====================

/*
1. While Loop:
   - Repeats a block of code as long as the condition is true.
   - Good for scenarios where the number of iterations is not known beforehand.

2. Do-While Loop:
   - Executes the code block at least once, regardless of the condition.
   - Useful when you need the loop to run at least once before checking a condition.
*/
