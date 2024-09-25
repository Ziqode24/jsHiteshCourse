// _________________________________________ ARRAY METHODS ___________________________________________

const marvelHeroes = ["thor", "ironMan", "spider"];
const dcHeroes = ["flash", "superMan", "batman"];

// Push method adds an entire array as an element
// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes); 
// Output: ["thor", "ironMan", "spider", ["flash", "superMan", "batman"]] 
// `dcHeroes` array is now a nested element in `marvelHeroes`

// console.log(marvelHeroes[3]); // Output: ["flash", "superMan", "batman"]
// console.log(marvelHeroes[3][1]); // Output: superMan

// .concat() - Combines two arrays into one
const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes); 
// Output: ["thor", "ironMan", "spider", "flash", "superMan", "batman"]

// Spread Operator to combine arrays
const all_heroes = [...marvelHeroes, ...dcHeroes];
// console.log(all_heroes); 
// Output: ["thor", "ironMan", "spider", ["flash", "superMan", "batman"], "flash", "superMan", "batman"]

const numArray = [1, 2, 4, [3, 4, 5], 7, 7, 9, 2, [2, 4, [2, 7, 0, [4, 5, 6], 78, 9, 0]], 100];
const readableArray = numArray.flat(Infinity); // Flattening the array completely
// console.log(readableArray); 
// Output: [1, 2, 4, 3, 4, 5, 7, 7, 9, 2, 2, 4, 2, 7, 0, 4, 5, 6, 78, 9, 0, 100]

/*
=========================
    Array Utility Methods
=========================
*/

// Array.isArray() - Checks if a value is an array
// console.log(Array.isArray("ayushi")); // Output: false (not an array)
// console.log(Array.isArray(marvelHeroes)); // Output: true (it is an array)

// Array.from() - Converts array-like or iterable objects into an array
// console.log(Array.from("ayushi")); 
// Output: ['a', 'y', 'u', 's', 'h', 'i'] | Converts a string into an array of characters

// console.log(Array.from({ name: "ayushi" })); 
// Output: [] | Cannot convert an object directly. Must specify how to create an array.

// Array.of() - Creates a new array from a set of arguments
let score1 = 100;
let score2 = 500;
let score3 = -1;
// console.log(Array.of(score1, score2, score3)); 
// Output: [100, 500, -1]

/*
======================================
    Understanding Array Utility Methods
======================================
*/

// Explanation:

// 1. Array.isArray(value):
//    This method checks whether the provided value is an array or not. It returns a boolean value.
//    - For arrays, it returns `true`.
//    - For non-arrays (such as strings, numbers, objects, etc.), it returns `false`.

// 2. Array.from(arrayLikeObject):
//    - Converts array-like objects (such as NodeList, string, or arguments) into an array.
//    - If the object is not iterable or does not have a length property, it cannot be converted.

//    Example:
//    Array.from("hello") -> ['h', 'e', 'l', 'l', 'o']
//    If you try converting an object without specifying how to turn it into an array, it will return an empty array.

// 3. Array.of(...elements):
//    - Creates an array with the provided arguments, regardless of their type or quantity.
//    - It ensures that the arguments are treated as array elements, even if there's only one argument.

//    Example:
//    Array.of(1, 2, 3) -> [1, 2, 3]
//    Array.of(7) -> [7] (It’s treated as a single element array, unlike Array(7), which creates an empty array of length 7.)