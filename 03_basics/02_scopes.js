// =======================================
//          Scopes, Closures & Hoisting
// =======================================

// -------------------
// Why let and const if var exists?
// -------------------

/*
  var has been around in JavaScript for a long time, but it has some issues related to hoisting and scoping.
  let and const were introduced in ES6 to provide block scope and fix issues related to var.
*/

let a = 399; // let is block-scoped and can be reassigned

if (true) {
  let a = 10; // This a is scoped to the if block
  const b = 20; // const is also block-scoped but cannot be reassigned.
  // console.log("Inner: ", a); // Output: 10 (inner scoped a)
}

// Outside the block, a is still 399, and b doesn't exist in this scope
// console.log(a); // Output: 399
// console.log(b); // Error: b is not defined outside the block (block scope)
// console.log(c); // Error: c is not defined

// -------------------
// Nested Scope and Closures
// -------------------

/*
  A closure happens when a function "remembers" its outer variables even after the outer function has returned.
*/

function one() {
  const username = "Hazrat"; // Defined in the outer function

  function two() {
    const website = "Youtube"; // Defined in the inner function
    console.log(username); // two() can access username because of closure
  }

  // console.log(website); // Error: website is not accessible here (it's scoped to two())
  two(); // This calls two(), which accesses username
}
one(); // Uncomment to run and see the closure in action

// -------------------
// More on Block Scoping
// -------------------

if (true) {
  const username = "Hazrat"; // Scoped to the if block
  if (username === "Hazrat") {
    const website = "github"; // Scoped to the inner if block
    // console.log(username + website); // Output: "Hazrat github"
  }

  // console.log(website); // Error: website is not accessible here (block scope)
}

// console.log(username); // Error: username is not accessible outside the if block

// =======================================
//              Function Hoisting
// =======================================

console.log(addone(83)); // Output: 84 (Function is hoisted)
/*
  In JavaScript, function declarations are hoisted to the top, 
  so you can call them before they are defined.
*/
function addone(num) {
  return num + 1;
}

// Another way of defining functions is through function expressions.
// Function expressions are not hoisted. This means you cannot use them before defining them.

// console.log(addTwo(83)); // ReferenceError: Cannot access 'addTwo' before initialization
// This gives an error because function expressions are not hoisted like function declarations.
const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(83)); // Output: 85 (Now it's declared, so it works)

// ====================
// Key Concepts Summarized:
// ====================

/*
1. var vs let and const:
   - var is function-scoped or globally scoped if declared outside a function.
   - let and const are block-scoped, which means they are limited to the block where they are defined.
   - const cannot be reassigned after it's declared, while let can be.

2. Closures:
   - A closure allows a function to access variables from its outer scope, even after the outer function has returned.
   - In the example of one(), the two() function "remembers" and can access the username variable from its outer function one().

3. Hoisting:
   - Function declarations are hoisted, meaning they can be called before they are defined in the code.
   - Function expressions (where the function is assigned to a variable) are not hoisted, so they cannot be used before their definition.

4. Block Scope:
   - Variables declared with let or const inside blocks (like if, for, while) are only accessible within those blocks.
*/
