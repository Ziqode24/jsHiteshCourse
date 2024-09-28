// ==========================================================
//                        Chaining Methods
// ==========================================================

/*
    JavaScript array methods like `map()`, `filter()`, and `reduce()` can be chained together.
    This makes the code more concise and expressive by performing multiple transformations in a single chain.
*/

// Example: Chaining `map()` and `filter()`
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums
  .map((num) => num * 10)  // Multiply each number by 10
  .map((num) => num + 5)   // Add 5 to each number from the previous result
  .filter((num) => num % 3 !== 0); // Keep only numbers that are not divisible by 3

console.log(newNums); // Output: [15, 25, 35, 55, 65, 85, 95]

/*
    Explanation:
    1. First, we use `map()` to multiply each element by 10: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].
    2. Then, we chain another `map()` to add 5 to each result: [15, 25, 35, 45, 55, 65, 75, 85, 95, 105].
    3. Finally, we use `filter()` to keep only the numbers that are not divisible by 3: [15, 25, 35, 55, 65, 85, 95].
    
    By chaining these methods together, you can process arrays in a clean and functional way without the need for intermediate variables.
*/

// ==========================================================
//                      Benefits of Chaining
// ==========================================================

/*
    - Readability: Chaining methods can make the code more readable as each method represents a step in a process.
    - Immutability: Methods like `map()` and `filter()` return new arrays without modifying the original array, keeping the data immutable.
    - Efficiency: Chaining allows you to express complex operations in fewer lines of code.
*/
