// =======================================
//           JavaScript Functions
// =======================================

// -------------------
// Function Definition & Execution
// -------------------
// Function syntax: function name(params) {}
function sayMyName() {
  console.log("A");
  console.log("Y");
  console.log("U");
  console.log("S");
  console.log("H");
  console.log("I");
}

// Function execution
// sayMyName(); // Uncomment to execute the function and print the name

// -------------------
// Function with Parameters
// -------------------

// Defining a function with two parameters (number1, number2)
function addTwoNum(number1, number2) {
    // We're adding the two numbers and logging the result
    console.log(number1 + number2);
}

// Calling the function without arguments
// addTwoNum(); // Output: NaN (because parameters are undefined)

// Calling the function with arguments
addTwoNum(15, 35); // Output: 50

// -------------------
// Storing Function Result in a Variable
// -------------------
// We can store function output in a variable if the function returns a value

// const result = addTwoNum(15, 35); // This is different from using a return statement in the function
// console.log("result: ", result); // Output: undefined (because addTwoNum does not return anything)

// -------------------
// Returning Values from Functions
// -------------------

// Example with a return statement
function addTwoNumReturn(number1, number2) {
    return number1 + number2; // Return the sum
    // console.log("Ayushi"); // This line won't run because it's after the return statement (unreachable code)
}

// Using the returned value
const resultWithReturn = addTwoNumReturn(15, 35); // Output: 50
console.log("Result with return: ", resultWithReturn); // Output: Result with return: 50

// -------------------
// Handling Different Input Types
// -------------------
// Function behavior changes based on the input type

// Concatenating number and string
addTwoNumReturn(15, "35");      // Output: 1535 (string concatenation)
addTwoNumReturn(15, "a");       // Output: 15a  (string concatenation)
addTwoNumReturn(15, null);      // Output: 15   (null is treated as 0)
addTwoNumReturn(15, undefined); // Output: NaN  (undefined + number results in NaN)

// -------------------
// Functions with Conditional Logic
// -------------------

// Function to display a login message
function loginUserMessage(username) {
  // Check if the username is falsy (undefined, null, empty string, etc.)
  if (!username) { //similar: username === undefined
    console.log("Please Enter a Username"); // This message is shown if no username is provided
    return; // Prevent further execution if the username is missing
  }

  // If a username is provided, return a login message
  return `${username} just logged in`;  
}

// Testing the function with different inputs
console.log(loginUserMessage("Ayushi"));  // Output: Ayushi just logged in
// console.log(loginUserMessage(""));        // Output: Please Enter a Username
// console.log(loginUserMessage());          // Output: Please Enter a Username

// -------------------
// Rest Operator in Function Parameters
// -------------------
function calculateCartPrice(val1, val2, ...num1) {     
  // ...num1 is the rest operator, which collects remaining arguments into an array
  return num1;
}

// When calling this function, the first two values (200, 400) will be assigned to val1 and val2,
// and the rest (579, 999) will be collected into the num1 array
console.log(calculateCartPrice(200, 400, 579, 999)); 
// Output: [579, 999] because num1 collects all arguments after val1 and val2.

// -------------------
// Passing an Object as an Argument
// -------------------
const user = {
  username: "hazrat",
  price: "$1.10"
};

function handleObject(anyobject) {
  // Accessing object properties via template literals
  console.log(`${anyobject.username}, you bought items worth a total of ${anyobject.price}`);
}

// Passing an object variable
handleObject(user); 
// Output: "hazrat, you bought items worth a total of $1.10"

// Passing an object directly without storing it in a variable
handleObject({
  username: "Ayushi",
  price: "$99.99"
});
// Output: "Ayushi, you bought items worth a total of $99.99"

// Why does this work? 
// Because we're directly providing an object to the function, which expects an object.
// The function accesses the properties of the passed object just like it did with the user object.

// -------------------
// Array Example with Index Access
// -------------------
const myNewArray = [200, 499, 600, 339];

function returnSecondValue(getArray) {
  // Arrays are zero-indexed, so [1] accesses the second value
  return getArray[1]; // This will return the second element of the array
}

// When we pass `myNewArray`, it returns the second value (499)
console.log(returnSecondValue(myNewArray)); // Output: 499

// We can also pass another array directly
console.log(returnSecondValue([200, 599, 99, 10.9])); // Output: 599


