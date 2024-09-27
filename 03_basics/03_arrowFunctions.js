// =======================================
//              Arrow Functions & Context
// =======================================

const user = {
    username: "Hazrat",
    price: "$9.99",
  
    welcomeMessage: function () {
      /*
        In regular functions, `this` refers to the object that is calling the function.
        Here, `this` refers to the current object (`user`), so `this.username` means user.username.
      */
      console.log(`${this.username}, Welcome To Website`); // Output depends on the current value of user.username
      console.log(this); // This shows the current context (the `user` object).
    },
  };
  
  // user.welcomeMessage() // Output: "Hazrat, Welcome To Website" and shows the user object
  
  user.username = "Moon"; // We are changing the username property
//   user.welcomeMessage(); // Output: "Moon, Welcome To Website" and shows the updated user object
  
  /*
    `this` behaves differently in Node.js and browsers.
    - In Node.js, calling `console.log(this)` outside of any object prints an empty object `{}` because it's in the module context.
    - In a browser, `this` refers to the global `window` object when called outside of any object or function.
  */
  
  // -------------------
  // Understanding `this` in Regular Functions
  // -------------------
  
  function node() {
    console.log(this); // In Node.js, this will log the global object ({} in strict mode).
  }
  // node(); // Uncomment to see the global object in Node.js or window object in the browser.
  
  function chai() {
    let username = "Hazrat";
    console.log(this.username); // Output: undefined because `this` in regular functions refers to the global context.
  }
  // chai(); // Uncomment to see undefined because `this` is not the `chai` function's scope but the global one.
  
  // -------------------
  // Arrow Function and `this`
  // -------------------
  
  /*
    Arrow functions do not have their own `this`. 
    Instead, they inherit `this` from the surrounding (lexical) context where the arrow function is defined.
  */
  
  const chaiArrow = () => {
    let username = "Hazrat";
    console.log(this); // Output: {} (In Node.js it would be {}, in the browser it would be the window object)
  };
  // chaiArrow(); // Uncomment to see that arrow functions don't have their own `this`.
  
  // -------------------
  // Interview Perspective: Regular Function vs Arrow Function
  // -------------------
  
  /*
    1. Regular functions (function keyword):
       - `this` refers to the object that called the function (or global object in strict mode).
  
    2. Arrow functions:
       - Arrow functions don’t have their own `this`. Instead, they inherit `this` from their lexical environment (where they were defined).
  */
  
  // ARROW FUNCTION SYNTAX
  // Syntax:
  //  - () => {}
  //  - const variableName = () => {}
  
  // Example with explicit return:
  const addTwo = (num1, num2) => {
    return num1 + num2;
  };
  
  // Example with implicit return (no need for `return` keyword):
  const addTwoSimple = (num1, num2) => num1 + num2;
  
  // Example of returning an object:
  const addTwoWithObject = (num1, num2) => ({ username: "Hazrat" });
  // You need to wrap the object inside parentheses `()` to return an object in an arrow function. Without parentheses, JavaScript would think it's a block of code instead of an object.
  
  console.log(addTwo(83, 72));           // Output: 155
  console.log(addTwoWithObject(83, 72)); // Output: { username: "Hazrat" }



// ====================
// Key Concepts Summarized:
// ====================

/*
1. Arrow Functions:
  - Do not have their own this. They take this from their surrounding context.
  - Use parentheses around objects if you are returning an object directly from an arrow function.
  - Syntax: const functionName = () => {}.

2.Regular Functions:
  - this in regular functions refers to the object that called the function (or global context if   not inside any object).
*/