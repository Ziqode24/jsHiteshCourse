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
console.log(Object.keys(tinderUser));   // Output: ["id", "name", "isLoggedIn"]

// Access object values
console.log(Object.values(tinderUser)); // Output: ["123abc", "Rumi", false]

// Access key-value pairs as arrays
console.log(Object.entries(tinderUser)); // Output: [["id", "123abc"], ["name", "Rumi"], ["isLoggedIn", false]]

// Check if a key exists in the object
console.log(tinderUser.hasOwnProperty('id')); // Output: true
