"use strict"; // Treat all JS code as the newer version of JavaScript

// Dynamic language: JavaScript doesn't require mentioning the data type of variables

// console.log() instead of alert() since we're using Node.js, not a browser

console.log(3 + 3); // This is readable and clean

// Declaring variables
let name = "ziQode";
let age = 18;
let isLoggedIn = false;
let state;
let location = null;

// ====================================================================
//                 TYPES OF DATATYPES
// ====================================================================

// PRIMITIVE DATA TYPES (7 Types):
// -------------------------------
// - String       => e.g., "anything"
// - Number       => e.g., 100
// - Boolean      => e.g., true or false
// - Null         => Represents the intentional absence of a value
// - Undefined    => When a variable is declared but not assigned a value
// - Symbol       => For unique values (new in ES6)
// - BigInt       => For very large integers

// REFERENCE (NON-PRIMITIVE) DATA TYPES:
// --------------------------------------
// - Array        => e.g., ["item1", "item2"]
// - Object       => e.g., {key: "value"}
// - Function     => e.g., function myFunc() {...}

// ====================================================================
//                 EXAMPLES OF PRIMITIVE TYPES
// ====================================================================

// typeof is used to identify the type of a variable

console.log(typeof undefined); // output: undefined
console.log(typeof null);      // ❗output: object (this is a well-known JS quirk)

console.log(typeof age);       // output: number
console.log(typeof isLoggedIn);// output: boolean

// Symbol example: 
const id = Symbol('123');
const anotherId = Symbol('123');
// Even though the value looks the same, each Symbol is unique
console.log(id === anotherId);  // output: false

// BigInt example:
const bigNumber = 3983907852n;  // Adding 'n' makes it a BigInt
console.log(typeof bigNumber);  // output: bigInt

// ====================================================================
//                 EXAMPLES OF NON-PRIMITIVE TYPES
// ====================================================================

// Array example:
const heroes = ["Shaktiman", "Chhota Bheem", "Shiva"];

// Object example:
let myObject = {
    stageName: "ziQode",
    duration: 22            // [TODO: REMEMBER the syntax]
};

// Function example:
const myFunction = function() {
    console.log("Hello World!");
};

// Remember: Everything inside {.....} is an object in JavaScript

/*________________________________________________SUMMARY_____________________________________________________
|=================|====================|==============================|======================|=================|
|      Type       |      Category      |           Example            |        VALUE         |     TYPEOF      |
|=================|====================|==============================|======================|=================|
|     String      |      Primitive     |        "anything"            |       "hello"        |     string      |
|-----------------|--------------------|------------------------------|----------------------|-----------------|
|     Number      |      Primitive     |          100                 |          100         |     number      |
|-----------------|--------------------|------------------------------|----------------------|-----------------|
|    Boolean      |      Primitive     |       true / false           |    true / false      |     boolean     |
|-----------------|--------------------|------------------------------|----------------------|-----------------|
|     Null        |      Primitive     | null (intentional absence)   |         null         |     object      |  
|                 |                    |                              |                      | ❗(known quirk) |
|-----------------|--------------------|------------------------------|----------------------|-----------------|
|   Undefined     |      Primitive     |        undefined             |     undefined        |   undefined     |
|-----------------|--------------------|------------------------------|----------------------|-----------------|
|     Symbol      |      Primitive     |    Symbol("unique")          |    Symbol("id")      |     symbol      |
|-----------------|--------------------|------------------------------|----------------------|-----------------|
|     BigInt      |      Primitive     |       3983907852n            |       3983907852n    |     bigint      |
|-----------------|--------------------|------------------------------|----------------------|-----------------|
|     Array       |    Non-Primitive   |    ["item1", "item2"]        |        [1, 2, 3]     |     object      |
|-----------------|--------------------|------------------------------|----------------------|-----------------|
|     Object      |    Non-Primitive   |    { key: "value" }          |   { key: "value" }   |     object      |
|-----------------|--------------------|------------------------------|----------------------|-----------------|
|    Function     |    Non-Primitive   | function myFunc() {...}      |     function() {}     |     function   |
|=================|====================|==============================|======================|=================|
*/