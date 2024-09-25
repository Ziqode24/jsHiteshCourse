// ===========================
// String Prototype Methods in JavaScript (Beginner-Friendly)
// ===========================
// Author: Hazrat Mosaddique Ali

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

// 3. Creating a String Object
/*
    - Strings can also be created as objects using `new String()`.
    - String objects have access to additional methods and properties.
    - But it's recommended to use primitive strings unless there's a specific need.
*/
const gameName = new String('live-Or-Die');  // String Object Example

// Example string for demonstration:
const str = "Hello, JavaScript";

// ~~~~~~~~~~~~ 1. anchor() ~~~~~~~~~~~~
// Creates an HTML anchor element (<a>) using the string as the anchor text.
// Usage: Good for creating links in HTML from a string.
// ----------------
console.log(str.anchor("myAnchor"));
// Output: <a name="myAnchor">Hello, JavaScript</a>

// ~~~~~~~~~~~~ 2. at() ~~~~~~~~~~~~
// Returns the character at the specified position (index). You can use both positive and negative indices.
// - Negative index starts from the end of the string.
// ----------------
console.log(str.at(1)); // Output: e (1st character)
console.log(str.at(-1)); // Output: t (last character)

// ~~~~~~~~~~~~ 3. big() ~~~~~~~~~~~~
// Wraps the string with HTML <big> tags to make it appear bigger (Deprecated).
// ----------------
console.log(str.big()); // Output: <big>Hello, JavaScript</big>

// ~~~~~~~~~~~~ 4. blink() ~~~~~~~~~~~~
// Displays the string with a blinking effect using HTML <blink> tag (Deprecated).
// ----------------
console.log(str.blink()); // Output: <blink>Hello, JavaScript</blink>

// ~~~~~~~~~~~~ 5. bold() ~~~~~~~~~~~~
// Makes the string bold by adding <b> tags around it (Deprecated).
// ----------------
console.log(str.bold()); // Output: <b>Hello, JavaScript</b>

// ~~~~~~~~~~~~ 6. charAt() ~~~~~~~~~~~~
// Returns the character at the given index in the string (starts from 0).
// ----------------
console.log(str.charAt(0)); // Output: H

// ~~~~~~~~~~~~ 7. charCodeAt() ~~~~~~~~~~~~
// Returns the Unicode (ASCII) value of the character at a specified index.
// - Every character has a Unicode value (e.g., 'H' = 72).
// ----------------
console.log(str.charCodeAt(0)); // Output: 72 (Unicode of 'H')

// ~~~~~~~~~~~~ 8. codePointAt() ~~~~~~~~~~~~
// Returns the code point of the character at a given index.
// - Similar to charCodeAt but better for handling emojis and characters beyond Unicode Basic Multilingual Plane (BMP).
// ----------------
console.log(str.codePointAt(0)); // Output: 72

// ~~~~~~~~~~~~ 9. concat() ~~~~~~~~~~~~
// Joins two or more strings and returns the result as a new string.
// - Preferred method: String interpolation (using `${}`).
// ----------------
console.log(str.concat(" is amazing!")); // Output: Hello, JavaScript is amazing!

// ~~~~~~~~~~~~ 10. endsWith() ~~~~~~~~~~~~
// Checks if the string ends with the specified substring or character.
// ----------------
console.log(str.endsWith("JavaScript")); // Output: true

// ~~~~~~~~~~~~ 11. includes() ~~~~~~~~~~~~
// Determines whether a string contains another string. Returns true or false.
// ----------------
console.log(str.includes("Java")); // Output: true

// ~~~~~~~~~~~~ 12. indexOf() ~~~~~~~~~~~~
// Finds the first occurrence of a specified substring in the string.
// Returns the index of where it starts or -1 if not found.
// ----------------
console.log(str.indexOf("Java")); // Output: 7

// ~~~~~~~~~~~~ 13. isWellFormed() ~~~~~~~~~~~~
// Checks if the string is well-formed UTF-16 (introduced in ES2024).
// - Ensures the string is valid and doesn't have broken characters.
// ----------------
console.log(str.isWellFormed()); // Output: true

// ~~~~~~~~~~~~ 14. italics() ~~~~~~~~~~~~
// Wraps the string with <i> tags to italicize it (Deprecated).
// ----------------
console.log(str.italics()); // Output: <i>Hello, JavaScript</i>

// ~~~~~~~~~~~~ 15. lastIndexOf() ~~~~~~~~~~~~
// Similar to `indexOf()` but searches from the end of the string.
// ----------------
console.log(str.lastIndexOf("l")); // Output: 3

// ~~~~~~~~~~~~ 16. localeCompare() ~~~~~~~~~~~~
// Compares two strings in a specific locale (language).
// - Useful for sorting words alphabetically in different languages.
// ----------------
console.log(str.localeCompare("Hello, TypeScript")); // Output: -1 (because 'J' comes after 'T')

// ~~~~~~~~~~~~ 17. match() ~~~~~~~~~~~~
// Retrieves the matches of a regular expression in the string.
// - Returns an array or null if no match is found.
// ----------------
console.log(str.match(/Java/)); // Output: [ 'Java', index: 7, ... ]

// ~~~~~~~~~~~~ 18. matchAll() ~~~~~~~~~~~~
// Returns an iterator with all matches of a regular expression.
// - Use a loop to access all matches.
// ----------------
for (let match of str.matchAll(/a/g)) {
    console.log(match); // Output: [ 'a', index: 1 ] (all 'a' matches)
}

// ~~~~~~~~~~~~ 19. normalize() ~~~~~~~~~~~~
// Normalizes the string to a standard form (useful for working with special characters in Unicode).
// ----------------
console.log(str.normalize()); // Output: Hello, JavaScript

// ~~~~~~~~~~~~ 20. padEnd() ~~~~~~~~~~~~
// Adds padding characters to the end of the string until it reaches a specified length.
// ----------------
console.log(str.padEnd(20, '!')); // Output: Hello, JavaScript!!!

// ~~~~~~~~~~~~ 21. padStart() ~~~~~~~~~~~~
// Adds padding to the start of the string until it reaches a specified length.
// ----------------
console.log(str.padStart(20, '*')); // Output: *****Hello, JavaScript

// ~~~~~~~~~~~~ 22. repeat() ~~~~~~~~~~~~
// Repeats the string a given number of times.
// ----------------
console.log(str.repeat(2)); // Output: Hello, JavaScriptHello, JavaScript

// ~~~~~~~~~~~~ 23. replace() ~~~~~~~~~~~~
// Replaces the first occurrence of a substring with a new substring.
// ----------------
console.log(str.replace("JavaScript", "World")); // Output: Hello, World

// ~~~~~~~~~~~~ 24. replaceAll() ~~~~~~~~~~~~
// Replaces all occurrences of a substring with a new one.
// ----------------
console.log(str.replaceAll("l", "L")); // Output: HeLLo, JavaScript

// ~~~~~~~~~~~~ 25. search() ~~~~~~~~~~~~
// Searches the string for a match against a regular expression.
// - Returns the index of the first match or -1 if none.
// ----------------
console.log(str.search(/Java/)); // Output: 7

// ~~~~~~~~~~~~ 26. slice() ~~~~~~~~~~~~
// Extracts part of the string and returns it as a new string.
// - You can specify start and end indices (end index is not included).
// ----------------
console.log(str.slice(0, 5)); // Output: Hello

// ~~~~~~~~~~~~ 27. split() ~~~~~~~~~~~~
// Splits the string into an array of substrings based on a separator.
// ----------------
console.log(str.split(" ")); // Output: [ 'Hello,', 'JavaScript' ]

// ~~~~~~~~~~~~ 28. startsWith() ~~~~~~~~~~~~
// Checks if the string starts with the specified substring.
// ----------------
console.log(str.startsWith("Hello")); // Output: true

// ~~~~~~~~~~~~ 29. substr() ~~~~~~~~~~~~
// Extracts a substring starting from a specific index and of a certain length.
// - Deprecated. Use slice() or substring() instead.
// ----------------
console.log(str.substr(7, 4)); // Output: Java

// ~~~~~~~~~~~~ 30. substring() ~~~~~~~~~~~~
// Extracts characters between two indices (end index is not included).
// ----------------
console.log(str.substring(0, 5)); // Output: Hello

// ~~~~~~~~~~~~ 31. toLowerCase() ~~~~~~~~~~~~
// Converts the string to lowercase.
// ----------------
console.log(str.toLowerCase()); // Output: hello, javascript

// ~~~~~~~~~~~~ 32. toUpperCase() ~~~~~~~~~~~~
// Converts the string to uppercase.
// ----------------
console.log(str.toUpperCase()); // Output: HELLO, JAVASCRIPT

// ~~~~~~~~~~~~ 33. trim() ~~~~~~~~~~~~
// Removes whitespace from both ends of the string.
// ----------------
console.log(str.trim()); // Output: Hello, JavaScript

// ~~~~~~~~~~~~ 34. valueOf() ~~~~~~~~~~~~
// Returns the primitive value of a string object.
// - Use this when you want the basic string value from an object string.
// ----------------
console.log(str.valueOf()); // Output: Hello, JavaScript

// ~~~~~~~~~~~~ 35. fontcolor() ~~~~~~~~~~~~
// Sets the color of the text (Deprecated).
// ----------------
console.log(str.fontcolor("red")); // Output: <font color="red">Hello, JavaScript</font>

// ~~~~~~~~~~~~ 36. fontsize() ~~~~~~~~~~~~
// Changes the font size of the string using <font> tag (Deprecated).
// ----------------
console.log(str.fontsize(4)); // Output: <font size="4">Hello, JavaScript</font>

// ~~~~~~~~~~~~ 37. small() ~~~~~~~~~~~~
// Wraps the string in <small> tags (Deprecated).
// ----------------
console.log(str.small()); // Output: <small>Hello, JavaScript</small>

// ~~~~~~~~~~~~ 38. strike() ~~~~~~~~~~~~
// Adds a strike-through effect using <strike> tags (Deprecated).
// ----------------
console.log(str.strike()); // Output: <strike>Hello, JavaScript</strike>

// ~~~~~~~~~~~~ 39. sub() ~~~~~~~~~~~~
// Wraps the string in <sub> tags for subscript text (Deprecated).
// ----------------
console.log(str.sub()); // Output: <sub>Hello, JavaScript</sub>

// ~~~~~~~~~~~~ 40. sup() ~~~~~~~~~~~~
// Wraps the string in <sup> tags for superscript text (Deprecated).
// ----------------
console.log(str.sup()); // Output: <sup>Hello, JavaScript</sup>

// ~~~~~~~~~~~~ 41. trimEnd() ~~~~~~~~~~~~
// Removes whitespace only from the end of the string.
// ----------------
console.log("  Hello  ".trimEnd()); // Output: "  Hello"

// ~~~~~~~~~~~~ 42. trimStart() ~~~~~~~~~~~~
// Removes whitespace from the start of the string.
// ----------------
console.log("  Hello  ".trimStart()); // Output: "Hello  "

// ~~~~~~~~~~~~ 43. toLocaleLowerCase() ~~~~~~~~~~~~
// Converts the string to lowercase based on the current locale.
// - Similar to `toLowerCase()` but considers the user's language settings.
// ----------------
console.log(str.toLocaleLowerCase()); // Output: hello, javascript

// ~~~~~~~~~~~~ 44. toLocaleUpperCase() ~~~~~~~~~~~~
// Converts the string to uppercase based on the current locale.
// ----------------
console.log(str.toLocaleUpperCase()); // Output: HELLO, JAVASCRIPT

// ~~~~~~~~~~~~ 45. toString() ~~~~~~~~~~~~
// Converts the value to a string (primarily used for non-string types).
// ----------------
console.log(repoCount.toString()); // Output: "4"

// ~~~~~~~~~~~~ 46. fromCharCode() ~~~~~~~~~~~~
// Returns a string created from the given sequence of UTF-16 code units (characters).
// - Static method, not called on a string instance but on `String` itself.
// ----------------
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Output: Hello

// ~~~~~~~~~~~~ 47. fromCodePoint() ~~~~~~~~~~~~
// Creates a string from Unicode code points (better for handling emojis or characters beyond BMP).
// ----------------
console.log(String.fromCodePoint(128514)); // Output: 😂

// ~~~~~~~~~~~~ 48. raw() ~~~~~~~~~~~~
// Returns a raw string from a template literal, treating escape sequences like `\n` as normal characters.
// - Called on the `String` constructor, not an instance.
// ----------------
console.log(String.raw`New\nLine`); // Output: New\nLine

// ~~~~~~~~~~~~ 49. isAscii() ~~~~~~~~~~~~
// Checks if all characters in a string are ASCII (introduced in ES2024).
// ----------------
console.log(str.isAscii()); // Output: true

// ~~~~~~~~~~~~ 50. trimRight() (Alias for trimEnd) ~~~~~~~~~~~~
// Same as `trimEnd()`. Removes whitespace from the end of the string.
// ----------------
console.log("  Goodbye  ".trimRight()); // Output: "  Goodbye"

// ~~~~~~~~~~~~ 51. trimLeft() (Alias for trimStart) ~~~~~~~~~~~~
// Same as `trimStart()`. Removes whitespace from the start of the string.
// ----------------
console.log("  Hello  ".trimLeft()); // Output: "Hello  "

// ~~~~~~~~~~~~ 52. matchCase() ~~~~~~~~~~~~
// Matches the case (uppercase or lowercase) of the original string with another.
// ----------------
console.log(str.matchCase("HELLO")); // Output: HELLO, JAVASCRIPT

// ~~~~~~~~~~~~ 53. hasOwnProperty() (Inherited) ~~~~~~~~~~~~
// Checks if the object has a property (not typically used directly on strings).
// ----------------
console.log(str.hasOwnProperty("length")); // Output: true

// ~~~~~~~~~~~~ 54. toFixed() ~~~~~~~~~~~~
// Converts a number to a string with a specified number of decimal places.
// - Not really a string method but often used to format numbers as strings.
// ----------------
console.log((123.456).toFixed(2)); // Output: "123.46"



// ============================
//      String Methods Summary
// ============================

/*
| **Method**              | **Description**                                                  | **Example**                            |
|-------------------------|------------------------------------------------------------------|----------------------------------------|
| `anchor()`              | Creates an anchor `<a>` tag.                                     | `"hello".anchor("test")` → `<a name="test">hello</a>` |
| `at()`                  | Returns character at a specific index (supports negative index). | `"hello".at(1)` → `e`                  |
| `big()`                 | Wraps string in `<big>` tags. ⚠️                                | `"hello".big()` → `<big>hello</big>`   |
| `blink()`               | Adds a blinking effect to text using `<blink>` tags. ⚠️         | `"hello".blink()` → `<blink>hello</blink>` |
| `bold()`                | Wraps the string in `<b>` tags. ⚠️                              | `"hello".bold()` → `<b>hello</b>`      |
| `charAt()`              | Returns the character at a given index.                          | `"hello".charAt(1)` → `e`              |
| `charCodeAt()`          | Returns the UTF-16 code for the character at an index.           | `"hello".charCodeAt(1)` → `101`        |
| `codePointAt()`         | Returns the Unicode code point at an index.  ⭐                   | `"😀".codePointAt(0)` → `128512`       |
| `concat()`              | Concatenates two or more strings.                                | `"Hello".concat(" World")` → `Hello World` |
| `endsWith()`            | Checks if the string ends with a specified substring.  ⭐        | `"hello".endsWith("lo")` → `true`      |
| `includes()`            | Checks if the string contains another substring. ⭐               | `"hello".includes("ell")` → `true`     |
| `indexOf()`             | Returns the index of the first match of the substring.           | `"hello".indexOf("l")` → `2`           |
| `isWellFormed()`        | Checks if a string is well-formed UTF-16. ⭐                     | `"hello".isWellFormed()` → `true`      |
| `italics()`             | Wraps the string in `<i>` tags. ⚠️                               | `"hello".italics()` → `<i>hello</i>`   |
| `lastIndexOf()`         | Returns the last occurrence of a substring.                      | `"hello".lastIndexOf("l")` → `3`       |
| `localeCompare()`       | Compares strings in a specific locale.                           | `"a".localeCompare("b")` → `-1`        |
| `match()`               | Returns matches for a regex pattern.                             | `"hello".match(/l/g)` → `["l", "l"]`   |
| `matchAll()`            | Returns all matches of a regex as an iterator.  ⭐               | `for (match of "hello".matchAll(/l/g))` |
| `normalize()`           | Normalizes Unicode characters. ⭐                                | `"café".normalize()` → `café`          |
| `padEnd()`              | Pads the end of the string with specified characters.            | `"hello".padEnd(10, "!")` → `hello!!!!!` |
| `padStart()`            | Pads the start of the string with specified characters.          | `"hello".padStart(10, "*")` → `*****hello` |
| `repeat()`              | Repeats the string a given number of times. ⭐                   | `"ha".repeat(3)` → `hahaha`            |
| `replace()`             | Replaces the first match of a string with a new substring. ⭐     | `"hello".replace("l", "y")` → `heylo`  |
| `replaceAll()`          | Replaces all matches of a string with a new substring. ⭐         | `"hello".replaceAll("l", "y")` → `heyyo` |
| `search()`              | Searches for a match using regex and returns the index.          | `"hello".search(/l/)` → `2`            |
| `slice()`               | Extracts a section of a string. ⭐                               | `"hello".slice(0, 3)` → `hel`          |
| `split()`               | Splits a string into an array of substrings.                     | `"a,b,c".split(",")` → `["a", "b", "c"]` |
| `startsWith()`          | Checks if the string starts with the specified substring. ⭐     | `"hello".startsWith("he")` → `true`    |
| `substr()`              | Returns part of the string from a start index and length.        | `"hello".substr(1, 3)` → `ell`         |
| `substring()`           | Returns part of the string between two indexes.                  | `"hello".substring(1, 3)` → `el`       |
| `toLowerCase()`         | Converts the string to lowercase.                                | `"Hello".toLowerCase()` → `hello`      |
| `toUpperCase()`         | Converts the string to uppercase.                                | `"hello".toUpperCase()` → `HELLO`      |
| `trim()`                | Removes whitespace from both ends of the string. ⭐              | `" hello ".trim()` → `hello`           |
| `valueOf()`             | Returns the primitive value of a string object. ⭐               | `new String("hello").valueOf()` → `hello` |
| `fontcolor()`           | Sets the font color of the string (Deprecated). ⚠️              | `"hello".fontcolor("red")` → `<font color="red">hello</font>` |
| `fontsize()`            | Sets the font size of the string (Deprecated). ⚠️                | `"hello".fontsize(5)` → `<font size="5">hello</font>` |
| `small()`               | Wraps the string in `<small>` tags (Deprecated). ⚠️             | `"hello".small()` → `<small>hello</small>` |
| `strike()`              | Wraps the string in `<strike>` tags (Deprecated). ⚠️            | `"hello".strike()` → `<strike>hello</strike>` |
| `sub()`                 | Wraps the string in `<sub>` tags (Deprecated). ⚠️               | `"hello".sub()` → `<sub>hello</sub>`   |
| `sup()`                 | Wraps the string in `<sup>` tags (Deprecated). ⚠️               | `"hello".sup()` → `<sup>hello</sup>`   |
| `trimEnd()`             | Removes trailing whitespace from the string.                     | `" hello ".trimEnd()` → `" hello"`     |
| `trimStart()`           | Removes leading whitespace from the string.                      | `" hello ".trimStart()` → `"hello "`   |
| `toLocaleLowerCase()`   | Converts the string to lowercase based on locale.                | `"İstanbul".toLocaleLowerCase("tr")` → `istanbul` |
| `toLocaleUpperCase()`   | Converts the string to uppercase based on locale.                | `"istanbul".toLocaleUpperCase("tr")` → `İSTANBUL` |
| `toString()`            | Converts an object to a string.                                  | `(123).toString()` → `"123"`           |
| `fromCharCode()`        | Converts Unicode values to characters. ⭐                        | `String.fromCharCode(72, 101)` → `He`  |
| `fromCodePoint()`       | Converts Unicode code points to characters. ⭐                   | `String.fromCodePoint(128512)` → 😂   |
| `raw()`                 | Returns raw string from template literals. ⭐                    | `String.raw` → ``New\nLine`` → `New\nLine` |
| `isAscii()`             | Checks if all characters are ASCII (introduced in ES2024). ⭐     | `"hello".isAscii()` → `true`           |
| `trimRight()`           | Alias for `trimEnd()`.                                           | `" hello ".trimRight()` → `" hello"`   |
| `trimLeft()`            | Alias for `trimStart()`.                                         | `" hello ".trimLeft()` → `"hello "`    |
| `matchCase()`           | Matches case with another string. ⭐                             | `"HELLO".matchCase("hello")` → `hello` |
| `hasOwnProperty()`      | Checks if the string has a specific property (Inherited). ⭐     | `"hello".hasOwnProperty("length")` → `true` |
| `toFixed()`             | Converts a number to a string with fixed decimal points. ⭐      | `(123.456).toFixed(2)` → `"123.46"`    |
*/