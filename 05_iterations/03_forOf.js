// =========================================
//          For-Of Loop in JavaScript
// =========================================

// =======================
//        Syntax
// =======================
/*
    The for-of loop allows you to iterate over *iterable* objects like arrays, strings, maps, and sets.
    Syntax:
    for (const element of iterable) {
        // code to execute for each element
    }
*/

// =======================
//   Why is For-Of Beneficial?
// =======================
/*
    1. Clean and concise syntax to iterate over arrays, strings, and other iterable objects.
    2. Automatically gives you each element in the iterable (no need to manually access by index).
    3. Can be used with new data structures like Map and Set.
    4. It's perfect for reading through each *value* in an iterable (vs. for-in, which gives keys).
*/

// =======================
//        Array Example
// =======================
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num); // Iterates through each number in the array.
}

// =======================
//       String Example
// =======================
const greeting = "hello world!";
for (const greet of greeting) {
  // console.log(`Each char is ${greet}`); // Iterates through each character in the string.
}

// =======================
//       Map Example
// =======================
/*
    The for-of loop is especially useful when iterating over *maps*.
    Maps are collections of key-value pairs, and using for-of makes it easy to loop over them.
*/

// Creating a Map
const map = new Map();
map.set("IN", "India");
map.set("US", "United States of America");
map.set("FR", "France"); // Note: Keys in a map must be unique.
map.set("IN", "India"); // This won't add a new entry, as "IN" is already used as a key.

// Iterating over the Map
for (const [key, value] of map) {
  console.log(key, ":-", value); // Outputs: IN :- India, US :- United States of America, FR :- France
}

// =======================
//        Non-Iterable Objects Example
// =======================
/*
    Note: For-of only works on *iterable* objects like arrays, strings, maps, and sets.
    Regular objects (e.g., {} literals) are not iterable, so the for-of loop will not work with them.
*/

// This will throw an error because objects are not iterable
/*
const myObject = {
    'game1': 'NFS',
    'game2': 'Free Fire'
};

for (const [key, value] of myObject) {
    console.log(key, ':-', value); // Error: myObject is not iterable
}
*/

// ====================
// Key Concepts Summarized:
// ====================

/*
1. For-Of Loop:
   - Iterates over values of iterable objects (arrays, strings, maps, sets).
   - Cleaner syntax for iterating compared to for and for-in loops.

2. Iterable Objects:
   - Arrays, strings, maps, and sets are iterable (can be looped through with for-of).
   - Regular objects ({} literals) are not iterable and require for-in or Object methods.

3. Map Iteration:
   - Maps are collections of key-value pairs.
   - The for-of loop can be used with maps to directly access both key and value pairs.
*/
