// JavaScript Numbers and Methods

/* 
===================
    Basic Example
===================
*/
const score = 180;
console.log(score); // Output: 180
score; // In browser console: Output shows 400 (reassigned value by some operation)

/* 
===================
    Using new Number()
===================
    - new Number() converts any value to a Number type.
    - It's usually better to use primitive types unless you need a Number object.
*/
const balance = new Number(100);
console.log(balance); // Output: [Number: 100]

/* 
===================
    .toString()
===================
    - Converts the number to a string.
    - You can then use string methods on the result.
*/
console.log(balance.toString()); // Output: "100"
console.log(balance.toString().length); // Output: 3 (length of "100")

/* 
===================
    .toFixed(n)
===================
    - Used to format a number using fixed-point notation.
    - n represents the number of decimal places you want to show.
    - This is especially useful on e-commerce websites for showing prices.
*/
console.log(balance.toFixed(2)); // Output: "100.00" (fixed to 2 decimal places)

/* 
===================
    .toPrecision(n)
===================
    - Formats the number to a specific precision (total number of digits).
*/
const otherNumber = 23.398770;
console.log(otherNumber.toPrecision(3)); // Output: "23.4" (total 3 significant digits)

/* 
===================
    .toLocaleString(locale)
===================
    - Formats the number according to the locale.
    - Example: Indian number formatting (en-IN) for large numbers.
*/
const hundreds = 1000000000;
console.log(hundreds.toLocaleString('en-IN')); // Output: "1,00,00,00,000" (Indian number format)

/* 
===================
    .isNaN()
===================
    - Determines whether the passed value is NaN (Not-a-Number).
*/
console.log(Number.isNaN(balance)); // Output: false (since balance is a valid number)
console.log(Number.isNaN("Hello" * 10)); // Output: true (this produces NaN)

/* 
===================
    .isInteger()
===================
    - Checks if the value is an integer.
*/
console.log(Number.isInteger(balance)); // Output: true (100 is an integer)
console.log(Number.isInteger(23.5)); // Output: false (23.5 is not an integer)

/* 
===================
    .parseInt() & .parseFloat()
===================
    - parseInt(): Parses a string and returns an integer.
    - parseFloat(): Parses a string and returns a floating-point number.
*/
console.log(Number.parseInt("123.45")); // Output: 123 (parses up to the decimal point)
console.log(Number.parseFloat("123.45")); // Output: 123.45 (parses the entire number)

/* 
===================
    .MAX_VALUE and .MIN_VALUE
===================
    - These constants represent the largest and smallest possible numeric values.
*/
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308 (maximum positive number)
console.log(Number.MIN_VALUE); // Output: 5e-324 (smallest positive number close to 0)

/* 
===================
    .EPSILON
===================
    - The smallest interval between two representable numbers.
    - Useful for comparing floating-point numbers.
*/
console.log(Number.EPSILON); // Output: 2.220446049250313e-16 (very tiny value)

/* 
===================
    .isFinite()
===================
    - Checks whether the value is a finite number (not Infinity or NaN).
*/
console.log(Number.isFinite(100)); // Output: true (100 is a finite number)
console.log(Number.isFinite(Infinity)); // Output: false (Infinity is not finite)


// _________________________________________ MATHS ___________________________________________

console.log(Math); // In JavaScript, the Math library is built-in and globally accessible.

/*
======================
    Common Math Methods
======================
*/

// Math.abs() - Returns the absolute (positive) value of a number.
console.log(Math.abs(-4)); // Output: 4

// Math.round() - Rounds to the nearest integer.
console.log(Math.round(75.45)); // Output: 75

// Math.ceil() - Rounds up to the nearest integer.
console.log(Math.ceil(4.2)); // Output: 5

// Math.floor() - Rounds down to the nearest integer.
console.log(Math.floor(4.9)); // Output: 4

// Math.min() - Returns the smallest value among the arguments.
console.log(Math.min(4, 3, 6, 8)); // Output: 3

// Math.max() - Returns the largest value among the arguments.
console.log(Math.max(4, 3, 6, 8)); // Output: 8

// Math.pow() - Raises a number to a certain power (exponentiation).
console.log(Math.pow(2, 3)); // Output: 8 (2^3)

// Math.sqrt() - Returns the square root of a number.
console.log(Math.sqrt(16)); // Output: 4

// Math.cbrt() - Returns the cube root of a number.
console.log(Math.cbrt(27)); // Output: 3

// Math.log() - Returns the natural logarithm (base e) of a number.
console.log(Math.log(1)); // Output: 0

// Math.exp() - Returns Euler's number (e) raised to the power of the argument.
console.log(Math.exp(1)); // Output: 2.718281828459045 (approx. e^1)

// Math.sin() - Returns the sine of an angle (in radians).
console.log(Math.sin(Math.PI / 2)); // Output: 1 (sin(90 degrees) = 1)

// Math.cos() - Returns the cosine of an angle (in radians).
console.log(Math.cos(Math.PI)); // Output: -1 (cos(180 degrees) = -1)

// Math.tan() - Returns the tangent of an angle (in radians).
console.log(Math.tan(Math.PI / 4)); // Output: 1 (tan(45 degrees) = 1)

// Math.PI - The value of Pi (π).
console.log(Math.PI); // Output: 3.141592653589793

// Math.E - Euler's number (e), the base of the natural logarithm.
console.log(Math.E); // Output: 2.718281828459045

/*
====================
    Math.random() Example
====================
*/

console.log(Math.random()); // Output: A random decimal number between 0 (inclusive) and 1 (exclusive)

console.log((Math.random() * 10) + 1); // Output: A random number between 1 and 11

console.log(Math.floor(Math.random() * 10) + 1); // Output: A random integer between 1 and 10

/*
===============================
    Random Number Trick Explained
===============================
*/

// Generate a random integer between a given range (min and max inclusive)
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: A random number between 10 and 20

// Step-by-step explanation:
// 1. Math.random() generates a random decimal number between 0 and 1.
// 2. (max - min + 1) calculates the range size. In this case, it's (20 - 10 + 1) = 11.
// 3. Math.random() * 11 generates a decimal between 0 and 11 (exclusive).
// 4. Math.floor() rounds the decimal down to the nearest integer.
// 5. Adding min (10) shifts the range, so the final output is between 10 and 20 (inclusive).

// Generate a random decimal number with specific decimal places:
const randomDecimal = (Math.random() * (max - min) + min).toFixed(2);
console.log(randomDecimal); // Output: A random number between 10 and 20 with 2 decimal places.

console.log(getRandomEven(2, 10)); // Output: A random even number between 2 and 10

/*
====================
    Additional Math Methods
====================
*/

// Math.trunc() - Removes the decimal part and returns the integer part.
console.log(Math.trunc(4.9)); // Output: 4

// Math.sign() - Returns the sign of a number (positive, negative, or zero).
console.log(Math.sign(-5)); // Output: -1
console.log(Math.sign(0)); // Output: 0
console.log(Math.sign(5)); // Output: 1

// Math.hypot() - Returns the square root of the sum of squares of its arguments.
console.log(Math.hypot(3, 4)); // Output: 5 (Pythagorean theorem: sqrt(3^2 + 4^2))

// Math.clz32() - Returns the number of leading zeroes in a 32-bit binary representation of a number.
console.log(Math.clz32(1)); // Output: 31

// Math.fround() - Returns the nearest 32-bit single-precision float representation of a number.
console.log(Math.fround(5.5)); // Output: 5.5

// Math.imul() - Returns the result of the 32-bit integer multiplication of two numbers.
console.log(Math.imul(2, 3)); // Output: 6

// Math.log10() - Returns the base-10 logarithm of a number.
console.log(Math.log10(100)); // Output: 2 (log base 10 of 100 is 2)

// Math.log2() - Returns the base-2 logarithm of a number.
console.log(Math.log2(8)); // Output: 3 (log base 2 of 8 is 3)

// Math.log1p() - Returns the natural logarithm (base e) of 1 + a number.
console.log(Math.log1p(0)); // Output: 0 (log(1 + 0))

// Math.expm1() - Returns e^x - 1, where x is the argument.
console.log(Math.expm1(1)); // Output: 1.718281828459045 (e^1 - 1)
