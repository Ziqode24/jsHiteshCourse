// =======================================
//          JavaScript Object Manipulation
// =======================================

// -------------------
// Singleton Object
// -------------------
// Creating a singleton object (though object literal {} is preferred)
// const tinderUser = new Object();
const tinderUser = {};

// Adding properties to the object
tinderUser.id = "123abc";
tinderUser.name = "Rumi";
tinderUser.isLoggedIn = false;

// Checking object properties
// console.log(tinderUser);

// -------------------
// Regular Object with Nested Properties
// -------------------
const regularUser = {
  email: "someone@gmail.com",
  fullname: {
    username: {
      firstname: "Hazrat",
      middlename: "Mosaddique",
      lastname: "Ali",
    },
  },
  location: "Kota",
};

// Safe access to deeply nested properties using optional chaining (?.)
// console.log(regularUser.fullname?.username.middlename); // Output: "Mosaddique"

// -------------------
// Object Merging (Spread & Object.assign)
// -------------------

// Two simple objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "e", 6: "f" };

// Merging using Object.assign()
// The first argument {} is the target object that will receive properties
// const obj3 = Object.assign({}, obj1, obj2);

// Merging using spread syntax (modern approach)
const obj3 = { ...obj1, ...obj2, ...obj4 };

// console.log(obj3); // Output: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f" }

// -------------------
// Working with Arrays of Objects
// -------------------
const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2, // Ensured uniqueness
    email: "m@gmail.com",
  },
  {
    id: 3, // Ensured uniqueness
    email: "a@gmail.com",
  },
];

// Accessing specific data in an array of objects
// console.log(users[0].email); // Output: "h@gmail.com"

// -------------------
// Object Utility Methods
// -------------------

// Access object keys
// console.log(Object.keys(tinderUser));   // Output: ["id", "name", "isLoggedIn"]

// Access object values
// console.log(Object.values(tinderUser)); // Output: ["123abc", "Rumi", false]

// Access key-value pairs as arrays
// console.log(Object.entries(tinderUser)); // Output: [["id", "123abc"], ["name", "Rumi"], ["isLoggedIn", false]]

// Check if a key exists in the object
// console.log(tinderUser.hasOwnProperty('id')); // Output: true

// ================================
//   JavaScript Object Destructuring
// ================================

// Example Object
const course = {
  coursename: "JS in Hindi",
  price: "$9.99",
  courseInstructor: "Hitesh Choudhary",
};

// Accessing properties directly using dot notation
// console.log(course.courseInstructor); // Output: "Hitesh Choudhary"

// --------------------------------------
// Object Destructuring Syntax
// --------------------------------------

// Destructuring 'courseInstructor' from the 'course' object
// The syntax {courseInstructor: instructor} does the following:
// - Extracts the 'courseInstructor' property from the 'course' object
// - Renames it to 'instructor' for use within the scope of this block
const { courseInstructor: instructor } = course;

// Now, 'instructor' holds the value of 'courseInstructor'
// console.log(instructor); // Output: "Hitesh Choudhary"

// Explanation:
// When you use object destructuring like this:
// const { courseInstructor: instructor } = course;
// It creates a new variable `instructor` that stores the value of `course.courseInstructor`.
// This allows you to refer to the instructor by the variable `instructor` instead of `course.courseInstructor`.

// Why would this give an error,after the destruction?
// console.log(courseInstructor);
// Uncaught ReferenceError: courseInstructor is not defined
// Reason: When destructuring, you're renaming 'courseInstructor' to 'instructor'.
// The original property name (`courseInstructor`) no longer exists in the current scope;
// only `instructor` is available in this scope. Hence, attempting to log `courseInstructor` causes an error.

console.log(instructor); // Correct variable, outputs: "Hitesh Choudhary"

// ================================
//   JSON Example (API Response)
// ================================

// This is an example of how data is structured in JSON format, often used in APIs.
// JSON objects are written in key-value pairs where keys are strings, and values can be strings, numbers, arrays, etc.

/*
  {
    "username": "Ziqode24",   // JSON keys are always strings
    "id": 12345,
    "url": "https://api.github.com/users/Ziqode24",
    "public_repos": 10,
  };
  */

// JSON responses can also return arrays of objects.
// For example:
/*
   [
    {},
    {},
    {}
  ];
  */

// Each object inside the array represents a user with its own properties like 'id', 'username', and 'email'.
