//=======================================================================================================
// Memory Types in JavaScript
//=======================================================================================================


// 1. Stack Memory
// - Used for primitive data types: numbers, strings, booleans, null, undefined.
// - Stores values directly.

let fakeScore = 32
let originalScore = fakeScore;
originalScore= 68;

console.log(fakeScore);
console.log(originalScore);


// 2. Heap Memory
// - Used for non-primitive data types: objects, arrays, functions.
// - Stores references to the actual data.

let userOne = {
    email: "abc@gmail.com",
    upi: "abc@fam"
}

let userTwo = userOne
userTwo.email = "abc2@gmail.com"
// we changed the email but out of both will be only this . as in heap all the data stored in          
//   reference . so if one value change other will also change

console.log(userOne.email);
console.log(userTwo.email);
//-------------------------------------------------------------------------------------------------------

// stack memory example___________________
function stackExample() {
    let x = 10;            // 'x' is stored in stack.
    let name = "Alice";   // 'name' is also stored in stack.
    console.log(x, name);
}
stackExample();
// Stack memory is automatically cleaned up when the function scope ends.




// heap memory example____
function heapExample() {
    let myArray = [1, 2, 3]; // 'myArray' holds a reference to an object in the heap.
    let myObject = { name: "Alice", age: 30 }; // 'myObject' also references a heap object.
    console.log(myArray, myObject);
}
heapExample();
// Heap memory must be managed manually, using garbage collection to clean up when no longer needed.
