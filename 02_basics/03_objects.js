// ____________________________________________ OBJECT _________________________________________________

// Singleton pattern (if you want to ensure only one instance of an object)
// Object.create used to make single ton

// Object literal

// _____Creating a Symbol_____
const mySym = Symbol("key1"); /* Step 1: Create a unique symbol */

const jsUser = {
    // [mySym]: "key1" assigns a value to the symbol key (correct way)
    [mySym]: "key1", /* Step 2: Use symbol as a key with proper syntax: [symbol] = value */

    name: "Ayushi",  //Default: "name" (type: string); value: any.
    "full Name": "Ayushi Choudhary", // Note: key with spaces must be in quotes
    age: 19,
    location: "Delhi",
    email: "aymodel@gmail.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Wednesday"], 
};

//~~~~~~~~~~Accessing Object Properties~~~~~~~~~~~~~~~~~~

// Accessing properties with dot notation (preferred for simple keys):
//console.log(jsUser.email);  // However, this won't work for "full Name" since it has a space.

// Correct way to access keys with spaces or special characters:
//console.log(jsUser["email"]);      // Accessing string-based keys
console.log(jsUser["full Name"]);  // Accessing key with space

// Accessing a symbol-based key:
//console.log(jsUser[mySym]); // Correct: symbols must be accessed with bracket notation

/*
Checking the type of keys:
~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log(typeof jsUser[mySym]); // Output: string (value type)
console.log(typeof mySym);         // Output: symbol (key type)
*/

// Overriding object values
jsUser.email = "aypainter@gmil.com"; // Change the email

// Freezing the object prevents any future changes to the properties:
//Object.freeze(jsUser);
jsUser.email = "aymodel@outlook.com"; // This won't if Object.freeze() uncommented
console.log(jsUser); // The email will still be "aypainter@gmil.com" if Object.freeze() uncommented

// Adding methods (functions) to the object:
jsUser.greeting = function() {
    console.log("Hello JS User!");
};

jsUser.greetingTwo = function() {
    // Using 'this' to reference the object's properties inside the method
    console.log(`Hello JS User, ${this.name}!`);
};

//~~~~~~~~~~Calling Function~~~~~~~~~~
//console.log(jsUser.greeting());      // Output: Hello JS User!
console.log(jsUser.greetingTwo());   // Output: Hello JS User, Ayushi!