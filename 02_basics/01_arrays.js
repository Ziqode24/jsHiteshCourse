// _________________________________________ ARRAYS ___________________________________________

const myArr = [1, 1, 2, 3, 4, 6, 9, true, "ziQode"]; // A mixed array
const myHeroes = ["spiderMan", "captainAmerica", ""]; // Array of strings

// Another way to create an array using the Array constructor
const myArr2 = new Array(1, 5, 9, false, "ayushi"); 
// console.log(myArr2); 
// Output: [1, 5, 9, false, "ayushi"]

// console.log(myArr[8]); 
// Accessing elements by index | Output: ziQode

/*
===========================
    Array Copying Types
===========================
    - Deep Copy: Copies array by value (does not share reference)
    - Shallow Copy: Copies array by reference (shares reference)
*/

// .push() - Adds new elements to the end of an array.
myArr.push(6); 
myArr.push("hazrat");
// console.log(myArr); 
// Output: [1, 1, 2, 3, 4, 6, 9, true, "ziQode", 6, "hazrat"]

// .pop() - Removes the last element from an array.
myArr.pop();
// console.log(myArr); 
// Output: [1, 1, 2, 3, 4, 6, 9, true, "ziQode", 6]

// .unshift() - Adds elements to the beginning of an array.
myArr.unshift('loser');
// console.log(myArr); 
// Output: ["loser", 1, 1, 2, 3, 4, 6, 9, true, "ziQode", 6]

// .shift() - Removes the first element from an array.
myArr.shift();
// console.log(myArr); 
// Output: [1, 1, 2, 3, 4, 6, 9, true, "ziQode", 6]

/*
==========================
    Array Search Methods
==========================
*/

// .includes() - Checks if a value is present in the array.
// console.log(myArr.includes(10)); 
// Output: false (10 is not in the array)

// console.log(myArr.includes(6));  
// Output: true (6 is in the array)

// .indexOf() - Returns the index of the first occurrence of a value, or -1 if not found.
// console.log(myArr.indexOf(10));    
// Output: -1 (not found)

// console.log(myArr.indexOf("ziQode")); 
// Output: 7

/*
=========================
    Array Modification
=========================
*/

// .join() - Joins all elements of the array into a string, separated by commas.
const newArr = myArr.join(); 
// console.log(newArr); 
// Output: "1,1,2,3,4,6,9,true,ziQode,6"

// .slice() - Returns a shallow copy of a portion of an array, without modifying the original.
// console.log("A ", myArr);
const myn1 = myArr.slice(1, 3); // Slice from index 1 to index 3 (not inclusive)
// console.log(myn1); 
// Output: [1, 2]

// console.log("B ", myArr); 
// Original array remains unchanged

// .splice() - Adds/removes items to/from an array and returns the removed items.
const myn2 = myArr.splice(1, 3); // Remove elements starting at index 1, remove 3 items
// console.log(myn2); 
// Output: [1, 2, 3]

// console.log("C ", myArr); 
// Original array after modification | Output: [4, 6, 9, true, "ziQode", 6]

/*
=========================
     Array Methods
=========================
*/


// .reverse() - Reverses the order of the array's elements.
myArr.reverse();
// console.log(myArr); 
// Output: Array in reverse order

// .sort() - Sorts the array's elements (by default, alphabetically).
myArr2.sort();
// console.log(myArr2); 
// Output: Sorted array | Caution: modifies the original array

// .map() - Creates a new array with the result of calling a function{*, +, /,.. } on every element.
const squaredArr = [1, 2, 3, 4].map(num => num * num);
// console.log(squaredArr); 
// Output: [1, 4, 9, 16]
const sumArr = [1, 2, 3, 4, 5].map(num => num + num);
// console.log(sumArr);
//Output: [2, 4, 6, 8, 10]

// .filter() - Creates a new array with all elements that pass the test in the provided function.
const evenNumbers = [1, 2, 3, 4, 5, 6].filter(num => num % 2 === 0);
// console.log(evenNumbers); 
// Output: [2, 4, 6]

// .find() - Returns the first element that satisfies the test function.
const firstLargeNum = [1, 2, 3, 10, 20].find(num => num > 5);
// console.log(firstLargeNum); 
// Output: 10

// .fill() - Fills all elements of the array with a static value.
const filledArr = new Array(5).fill(0);
// console.log(filledArr); 
// Output: [0, 0, 0, 0, 0]

// .every() - Tests whether all elements in the array pass the provided function.
const allEven = [2, 4, 6, 8].every(num => num % 2 === 0);
// console.log(allEven); 
// Output: true

// .some() - Tests whether at least one element passes the provided function.
const hasOdd = [2, 4, 5, 8].some(num => num % 2 !== 0);
// console.log(hasOdd); 
// Output: true

// .findIndex() - Returns the index of the first element that passes the test function.
const largeNumIndex = [1, 2, 3, 10, 20].findIndex(num => num > 5);
// console.log(largeNumIndex); 
// Output: 3

// Destructuring - Allows unpacking of values from arrays.
const [first, second, ...rest] = myArr;
// console.log(first); 
// Output: First element
// console.log(rest);  
// Output: The rest of the elements except 1st & 2nd element


/*
==========================
    Array Length Property
==========================
*/

console.log(myArr.length); 
// Output: The length of the array

