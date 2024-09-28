// ===========================
// String Prototype Methods in JavaScript 
// ===========================

// 1. String Declaration
const name = "Ziqode";  // Example of a string using double quotes
const repoCount = 4;

// 2. String Interpolation (Preferred over concatenation)
/*
    -   Template literals use backticks (``) for string creation.
    -   `${expression}` allows embedding variables or expressions inside strings.
    -   More readable and clean than using `+` for concatenation.
*/
console.log(`I'm ${name}, my repo count is ${repoCount}`);

// Example string for demonstration:
const str = "Hello, JavaScript";

// ~~~~~~~~~~~~ 1. at() ~~~~~~~~~~~~
// Returns the character at the specified position (index). You can use both positive and negative indices.
console.log(str.at(1)); // Output: e (1st character)
console.log(str.at(-1)); // Output: t (last character)

// ~~~~~~~~~~~~ 2. charAt() ~~~~~~~~~~~~
// Returns the character at the given index in the string.
console.log(str.charAt(0)); // Output: H

// ~~~~~~~~~~~~ 3. charCodeAt() ~~~~~~~~~~~~
// Returns the Unicode (ASCII) value of the character at a specified index.
console.log(str.charCodeAt(0)); // Output: 72 (Unicode of 'H')

// ~~~~~~~~~~~~ 4. codePointAt() ~~~~~~~~~~~~
// Returns the code point of the character at a given index (better for handling emojis).
console.log(str.codePointAt(0)); // Output: 72

// ~~~~~~~~~~~~ 5. endsWith() ~~~~~~~~~~~~
// Checks if the string ends with the specified substring or character.
console.log(str.endsWith("JavaScript")); // Output: true

// ~~~~~~~~~~~~ 6. includes() ~~~~~~~~~~~~
// Determines whether a string contains another string. Returns true or false.
console.log(str.includes("Java")); // Output: true

// ~~~~~~~~~~~~ 7. indexOf() ~~~~~~~~~~~~
// Finds the first occurrence of a specified substring in the string.
console.log(str.indexOf("Java")); // Output: 7

// ~~~~~~~~~~~~ 8. lastIndexOf() ~~~~~~~~~~~~
// Similar to `indexOf()` but searches from the end of the string.
console.log(str.lastIndexOf("l")); // Output: 3

// ~~~~~~~~~~~~ 9. localeCompare() ~~~~~~~~~~~~
// Compares two strings in a specific locale (language).
console.log(str.localeCompare("Hello, TypeScript")); // Output: -1

// ~~~~~~~~~~~~ 10. match() ~~~~~~~~~~~~
// Retrieves the matches of a regular expression in the string.
console.log(str.match(/Java/)); // Output: [ 'Java', index: 7, ... ]

// ~~~~~~~~~~~~ 11. padEnd() ~~~~~~~~~~~~
// Adds padding characters to the end of the string until it reaches a specified length.
console.log(str.padEnd(20, '!')); // Output: Hello, JavaScript!!!

// ~~~~~~~~~~~~ 12. padStart() ~~~~~~~~~~~~
// Adds padding to the start of the string until it reaches a specified length.
console.log(str.padStart(20, '*')); // Output: *Hello, JavaScript

// ~~~~~~~~~~~~ 13. repeat() ~~~~~~~~~~~~
// Repeats the string a given number of times.
console.log(str.repeat(2)); // Output: Hello, JavaScriptHello, JavaScript

// ~~~~~~~~~~~~ 14. replace() ~~~~~~~~~~~~
// Replaces the first occurrence of a substring with a new substring.
console.log(str.replace("JavaScript", "World")); // Output: Hello, World

// ~~~~~~~~~~~~ 15. replaceAll() ~~~~~~~~~~~~
// Replaces all occurrences of a substring with a new one.
console.log(str.replaceAll("l", "L")); // Output: HeLLo, JavaScript

// ~~~~~~~~~~~~ 16. search() ~~~~~~~~~~~~
// Searches the string for a match against a regular expression.
console.log(str.search(/Java/)); // Output: 7

// ~~~~~~~~~~~~ 17. slice() ~~~~~~~~~~~~
// Extracts part of the string and returns it as a new string.
console.log(str.slice(0, 5)); // Output: Hello

// ~~~~~~~~~~~~ 18. split() ~~~~~~~~~~~~
// Splits the string into an array of substrings based on a separator.
console.log(str.split(" ")); // Output: [ 'Hello,', 'JavaScript' ]

// ~~~~~~~~~~~~ 19. startsWith() ~~~~~~~~~~~~
// Checks if the string starts with the specified substring.
console.log(str.startsWith("Hello")); // Output: true

// ~~~~~~~~~~~~ 20. substring() ~~~~~~~~~~~~
// Extracts characters between two indices.
console.log(str.substring(0, 5)); // Output: Hello

// ~~~~~~~~~~~~ 21. toLowerCase() ~~~~~~~~~~~~
// Converts the string to lowercase.
console.log(str.toLowerCase()); // Output: hello, javascript

// ~~~~~~~~~~~~ 22. toUpperCase() ~~~~~~~~~~~~
// Converts the string to uppercase.
console.log(str.toUpperCase()); // Output: HELLO, JAVASCRIPT

// ~~~~~~~~~~~~ 23. trim() ~~~~~~~~~~~~
// Removes whitespace from both ends of the string.
console.log(str.trim()); // Output: Hello, JavaScript

// ~~~~~~~~~~~~ 24. trimEnd() ~~~~~~~~~~~~
// Removes whitespace only from the end of the string.
console.log("  Hello  ".trimEnd()); // Output: "  Hello"

// ~~~~~~~~~~~~ 25. trimStart() ~~~~~~~~~~~~
// Removes whitespace from the start of the string.
console.log("  Hello  ".trimStart()); // Output: "Hello  "

// ~~~~~~~~~~~~ 26. toString() ~~~~~~~~~~~~
// Converts the value to a string (primarily used for non-string types).
console.log(repoCount.toString()); // Output: "4"

// ~~~~~~~~~~~~ 27. fromCharCode() ~~~~~~~~~~~~
// Returns a string created from the given sequence of UTF-16 code units.
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Output: Hello

// ~~~~~~~~~~~~ 28. fromCodePoint() ~~~~~~~~~~~~
// Creates a string from Unicode code points.
console.log(String.fromCodePoint(128514)); // Output: 😂

// ~~~~~~~~~~~~ 29. raw() ~~~~~~~~~~~~
// Returns a raw string from a template literal, treating escape sequences like `\n` as normal characters.
console.log(String.raw`New\nLine`); // Output: New\nLine

// ~~~~~~~~~~~~ 30. valueOf() ~~~~~~~~~~~~
// Returns the primitive value of a string object.
console.log(str.valueOf()); // Output: Hello, JavaScript