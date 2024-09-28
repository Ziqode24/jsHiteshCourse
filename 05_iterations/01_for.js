// ==================================
//       For Loop in JavaScript
// ==================================

// =======================
//     For Loop Syntax
// =======================
/*
    A for loop lets you repeat a block of code a certain number of times. Let's break down the syntax step by step:

    1. Variable Initialization:
       - let i = 0; 
       - This creates a variable, usually named `i`, and sets its initial value to 0.

    2. Condition Check:
       - i < array.length; 
       - The loop will run as long as this condition is true. 
       - If it becomes false, the loop stops.

    3. Increment/Update:
       - i++;
       - After each iteration, `i` is increased by 1. Without this, the loop would run forever with the same value for `i`.

    Example Syntax:
    for (let i = 0; i < array.length; i++) {
        // code to execute on each iteration
    }
*/

// =======================
//     How Loops Work (Step by Step)
// =======================
/*
    Here's how a for loop works, step by step:

    1. Initialize `i` (e.g., let i = 0)
    2. Check if the condition is true (e.g., i <= 10)
    3. If true, execute the code block inside the loop.
    4. After the code runs, increment `i` (i.e., i++)
    5. Repeat steps 2-4 until the condition becomes false.
*/

for (let i = 0; i <= 10; i++) {
  const element = i;

  if (element == 5) {
    console.log("5 is the best number"); // This runs when element is 5.
  }

  console.log(element); // Logs every value of `i` from 0 to 10.
}

// =======================
//     Nested Loops
// =======================
/*
      You can also have loops inside loops, which are called "nested loops." 
      Each loop runs independently of the other, but they are connected.
  */

for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop value: ${i}`);

  // Inner loop
  for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop value: ${j}, Outer loop value: ${i}`);
    console.log(`${i} * ${j} = ${i * j}`); // Prints multiplication table
  }
}

// =======================
//     Looping Through Arrays
// =======================
/*
      Loops are very useful for going through all the elements in an array.
  */

let myArray = ["Flash", "Batman", "Superman"];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element); // Prints each superhero in the array.
}

// =======================
//     Break and Continue
// =======================
/*
      - `break`: Exits the loop completely when a certain condition is met.
      - `continue`: Skips the current iteration and moves to the next one.
  
      Example:
  */

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Detected 5");
    break; // Stops the loop when `index` is 5.
  }
  console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Detected 5");
    continue; // Skips the iteration when `index` is 5, but continues the loop.
  }
  console.log(`Value of i is ${index}`);
}

// ====================
// Key Concepts Summarized:
// ====================

/*
  1. For Loop:
     - Repeats a block of code a certain number of times.
     - Has three parts: initialization, condition check, and increment.
  
  2. Nested Loops:
     - A loop inside another loop.
     - Often used for complex tasks like printing tables or working with multi-dimensional arrays.
  
  3. Break and Continue:
     - `break` stops the loop entirely.
     - `continue` skips the current iteration and moves to the next one.
  */
