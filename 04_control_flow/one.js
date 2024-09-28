// =======================================
//          Control Flow in JavaScript
// =======================================

// =======================
//     if-else Statement
// =======================
// Syntax: if (condition) { ... }
// The if block runs when the condition is true, else the code in the else block runs.

const isUserLoggedIn = true;
const temperature = 41;

if (temperature >= 41) {
  console.log("Temperature is less than 50"); // This will run if the condition is true.
} else {
  console.log("Temperature is more than 50"); // This runs if the condition is false.
}

// console.log("I am free"); // This runs regardless of the above conditions.


// =======================
//     Comparison Operators
// =======================
/*
    Here's a breakdown of common comparison operators:
    
    <   : Less than
    >   : Greater than
    <=  : Less than or equal to
    >=  : Greater than or equal to
    ==  : Equality check (compares only value, not type)
    !=  : Not equal
    === : Strict equality check (compares both value and type)
    !== : Strict inequality check (compares both value and type)
    
    Examples:
    - 10 == '10' // true (because it checks value only)
    - 10 === '10' // false (because the types are different: number vs string)
    - 10 !== '10' // true (because types are different)
*/

// =======================
//     Block Scope
// =======================
/*
    Variables declared inside a block (within {}) have block scope.
    This means they cannot be accessed outside of that block.
*/

const score = 200;

if (score > 100) {
  const power = "speed increase"; // This variable is only accessible inside this block.
  console.log(`Player power: ${power}`);
}

// The line below would throw an error because 'power' is not defined outside the block.
// console.log(`Player power: ${power}`); // Uncaught ReferenceError: power is not defined


// =======================
//     Shorthand Notation (One-line if)
// =======================
const balance = 2300;

/*
    If you have a simple if condition with one statement, you can skip the curly braces.
    But it's good practice to always use curly braces for readability and future-proofing your code.
*/

if (balance > 500) console.log("Rich"); // Recommended shorthand for single-line statements

// NOT RECOMMENDED: Avoid this syntax, especially when using multiple lines without curly braces.
if (balance > 500) console.log("Rich"), console.log("Ameer"); // This will execute both statements.

// =======================
//     else if Statement
// =======================
// An else if chain is useful when you have multiple conditions to check.

if (balance < 500) {
  console.log("Balance is less than 500");
} else if (balance < 750) {
  console.log("Balance is less than 750");
} else if (balance > 2500) {
  console.log("You have enough money to buy an earbud");
} else {
  console.log("Start saving money");
}

// =======================
//     Logical Operators in Conditions
// =======================
/*
    Logical operators:
    - && : AND (Both conditions must be true)
    - || : OR (At least one condition must be true)
    - !  : NOT (Inverts the truth value)
*/

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = false; // Typo fixed from "flase" to "false"

// Both conditions must be true for this block to run
if (userLoggedIn && debitCard && 15 == 15) {
  console.log("Allow to buy the course");
}

// At least one condition must be true for this block to run
if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User logged in");
}

// ====================
// Key Concepts Summarized:
// ====================

/*
1. if-else Statement:
  - Controls the flow of code execution based on conditions.
  - The block under if runs only if the condition is true; otherwise, the else block runs.

2. Comparison Operators:
  - == checks only value, while === checks both value and type.
  - Always prefer === for strict comparison to avoid unexpected behavior.

3. Block Scope:
  - Variables defined with let or const inside a block ({}) are only available within that block.
  - They cannot be accessed outside of it.

4. Shorthand Notation:
  - For very short conditions, you can skip curly braces {}.
  - But for clarity and maintainability, always use braces, especially for multiple lines.

5. Logical Operators:
  - && ensures that both conditions must be true.
  - || allows the block to execute if at least one condition is true.
*/
