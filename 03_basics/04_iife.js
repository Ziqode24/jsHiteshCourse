// =======================================
//     Immediately Invoked Function Expressions (IIFE)
// =======================================

// An IIFE is a function that runs as soon as it is defined. 
// The primary purpose is to avoid polluting the global scope.
// Pronunciation: e-fe

(function lightningBolt() {
    console.log(`DB CONNECTED`); // Output: DB CONNECTED
  })(); // This is the syntax for an IIFE : ()() | (function)(callingfunction)
  
  /*
    Why use IIFE?
    1. Encapsulation: Variables and functions defined inside the IIFE are not accessible from the outside, preventing global scope pollution.
    2. Avoid conflicts: Helps to avoid naming collisions with other variables or functions in the global scope.
    3. Initialization: Useful for setting up configurations or executing code without exposing it to the global scope.
  */
  
  // Uncommenting the line below will result in an error because we cannot call lightningBolt directly.
  lightningBolt(); // Error: lightningBolt is not defined
  
  // Named IIFE example
  (function flash() {
    console.log(`DB CONNECTED TWO`); // Output: DB CONNECTED TWO
  })(); // This is a named IIFE
  
  /*
    The following line will result in an error if uncommented.
    Why does this happen?
    - In a named IIFE, the function name is not accessible outside the function scope.
    - The function is immediately invoked, so there's no reference to call it again.
    - To avoid this error, we don't call the function directly since it's already invoked.
  */
  
  // Uncommenting the line below will result in an error.
  // flash(); // Error: flash is not defined
  
  // IIFE with a parameter
  ((name) => {
    // This is an unnamed IIFE using an arrow function
    console.log(`DB CONNECTED TWO ${name}`); // Output: DB CONNECTED TWO MOON
  })('MOON'); // We can pass an argument to the IIFE
  