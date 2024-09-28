// ===========================================
//          ForEach Loop in JavaScript
// ===========================================

// =======================
//        Syntax
// =======================
/*
    The forEach loop is a *higher-order function* that allows you to iterate over arrays.
    It takes a *callback function* that will be executed for each element in the array.
    Syntax:
    array.forEach(callback(currentValue, index, array))
*/

// =======================
//      Basic Usage
// =======================
const coding = ['js', 'rb', 'cpp', 'java'];

coding.forEach(function (item) {
  // console.log(item); // Outputs each item in the array (js, rb, cpp, java)
});

// =======================
//   Using Arrow Functions
// =======================
coding.forEach((item) => {
  // console.log(item); // Outputs each item, same as the above method but with arrow function
});

// =======================
//   Passing a Function Reference
// =======================
/*
    Instead of defining the callback function directly inside the forEach, you can pass a function reference.
    This can be useful when you want to reuse the same function in multiple places.
*/

function writeMe(item) {
  // console.log(item); // Outputs each item, passed through function reference
}
coding.forEach(writeMe); // You don't call the function, just pass its reference (writeMe)

// =======================
//  Accessing Index and Array
// =======================
/*
    The forEach loop provides not only the current *item* but also the *index* and the *array* itself.
    Syntax:
    array.forEach((item, index, array) => {
        // code to execute for each item
    })
*/

coding.forEach((item, index, arr) => {
  // console.log(item, index, arr); // Outputs the item, its index, and the entire array
});

// =======================
//  Looping Through Array of Objects
// =======================
/*
    When working with arrays of objects, forEach is very helpful for accessing properties inside each object.
    Example: [{}, {}, {}]
*/

const myCoding = [
  {
    languageName: 'JavaScript',
    languageFileName: 'js',
  },
  {
    languageName: 'Java',
    languageFileName: 'java',
  },
  {
    languageName: 'Python',
    languageFileName: 'py',
  },
];

// Using forEach to access properties of objects inside the array
myCoding.forEach((item) => {
  console.log(item.languageFileName); // Outputs the 'languageFileName' property for each object
});

// ====================
// Key Concepts Summarized:
// ====================

/*
1. ForEach Loop:
   - Iterates over arrays by executing a callback function for each element.
   - You can access the current item, its index, and the array itself.

2. Arrow Functions:
   - A shorthand way to define callback functions for forEach.

3. Function Reference:
   - Instead of defining the function inside forEach, you can pass a reference to an external function.

4. Arrays of Objects:
   - You can easily access object properties inside an array using forEach.

5. Important Notes:
   - forEach does not return anything (unlike map), and it cannot be stopped or broken out of (unlike a regular for loop).
*/
