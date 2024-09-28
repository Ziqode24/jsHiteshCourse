// ==================================
//       Truthy & Falsy Values in JavaScript
// ==================================

// =======================
//     Truthy & Falsy Overview
// =======================
/*
    In JavaScript, every value is inherently "truthy" or "falsy."
    
    - Falsy values are treated as false when evaluated in conditions.
    - Truthy values are treated as true when evaluated in conditions.
*/

// Example:
const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Please enter your email first"); // This will be logged because an empty array is truthy, but its length is 0.
}

/*
    Falsy Values:
    - false
    - 0
    - -0
    - BigInt 0n
    - ""
    - null
    - undefined
    - NaN

    Truthy Values:
    - "0" (string with zero)
    - "false" (string with false)
    - " " (space is truthy)
    - [] (empty array)
    - {} (empty object)
    - function(){} (empty function)
    - other all value except falsy values
    
    Even an empty array, object, or function is truthy.
*/

// ====================
//    Competitive Knowledge
// ====================

/*
    Some interesting comparisons:
    
    - false == 0         // true
    - false == ""        // true
    - 0 == ""            // true
*/

// =======================
//     Checking if an Array is Empty
// =======================
/*
    You can check if an array is empty by using `.length`.
*/

if (userEmail.length === 0) {
  console.log("Array is empty");
}

// =======================
//     Checking if an Object is Empty
// =======================
/*
    Objects don't have a `.length`, so you can use `Object.keys()` to convert the object keys to an array, and check if the array is empty.
*/

const emptyObj = {};

// Checking if object is empty
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// =======================
//    Nullish Coalescing Operator (??)
// =======================
/*
    The Nullish Coalescing Operator (??) is used to provide a fallback when a value is `null` or `undefined`.

    Syntax:
    - variable = value1 ?? value2

    - If `value1` is not `null` or `undefined`, it is returned.
    - Otherwise, `value2` is returned.
*/

let val1;

// Examples:
val1 = 5 ?? 10;      // Output: 5 (since 5 is neither null nor undefined)
val1 = null ?? 10;   // Output: 10 (since null triggers the fallback value)
val1 = undefined ?? 15; // Output: 15 (since undefined triggers the fallback value)

// Multiple ?? operators:
val1 = null ?? 10 ?? 100; // Output: 10 (first non-nullish value is returned)

console.log(val1); // 10

// =======================
//    Ternary Operator
// =======================
/*
    The ternary operator is a shorthand way to write if-else statements.
    
    Syntax:
    - condition ? trueExpression : falseExpression
*/

const iceTeaPrice = 100;

iceTeaPrice <= 80 
  ? console.log("Offer coming soon") 
  : console.log("Offer available"); // This will log "Offer available" as the condition is false

// ====================
// Key Concepts Summarized:
// ====================

/*
1. Truthy & Falsy:
   - Falsy values evaluate to false (false, 0, "", null, undefined, NaN).
   - Truthy values are all other values, even empty objects, arrays, and functions.

2. Nullish Coalescing (??):
   - Returns the right-hand value only if the left-hand value is `null` or `undefined`.

3. Ternary Operator:
   - A shorthand for if-else conditions, useful for simple expressions.
*/
