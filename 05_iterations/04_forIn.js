// =========================================
//          For-In Loop in JavaScript
// =========================================

// =======================
//        Syntax
// =======================
/*
    The for-in loop allows you to iterate over the *enumerable properties* of an object.
    Syntax:
    for (const key in object) {
        // code to execute for each key
    }
*/

// =======================
//     For-In with Objects
// =======================
const myLanguage = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
  };
  
  for (const key in myLanguage) {
    // console.log(`${key} shortcut is for ${myLanguage[key]}`); // Accesses the key and its corresponding value.
  }
  
  // =======================
  //    For-In with Arrays
  // =======================
  /*
      The for-in loop works with arrays, but instead of iterating over values, it will give you the *index* of each element.
      It's better to use *for-of* for arrays to access values directly.
  */
  const programming = ['js', 'rb', 'cpp', 'java'];
  
  for (const key in programming) {
    // console.log(key); // Outputs the index (0, 1, 2, 3)
    // console.log(programming[key]); // Access the value using the index (programming[key])
  }
  
  // =======================
  //  For-In with Maps (Doesn't Work)
  // =======================
  /*
      The for-in loop does not work with *maps* because maps are not enumerable objects.
      Use the for-of loop instead when working with maps.
  */
  
  /*
  const map = new Map();
  map.set("IN", "India");
  map.set("US", "United States of America");
  map.set("FR", "France");
  
  // This will not output anything because maps are not enumerable with for-in
  for (const key in map) {
    console.log(key);
  }
  */
  
  // ====================
  // Key Concepts Summarized:
  // ====================
  
  /*
  1. For-In Loop:
     - Iterates over the *enumerable properties* of objects.
     - Use for objects, but it's not ideal for arrays (use for-of for arrays instead).
  
  2. Accessing Object Properties:
     - You can access both the key and value of an object using the for-in loop.
  
  3. For-In with Arrays:
     - For-in loops provide the *index* when used with arrays, not the value.
     - It's better to use for-of when working with arrays to directly access values.
  
  4. Maps and Sets:
     - For-in loops do not work with maps or sets.
     - Use for-of for iterable data structures like maps.
  */
  