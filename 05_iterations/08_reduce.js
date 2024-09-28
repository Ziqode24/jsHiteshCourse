// ==========================================================
//                          Reduce Method
// ==========================================================

/*
    The `reduce()` method in JavaScript is used to execute a reducer function (that you provide) on each element of the array, resulting in a single output value.
    
    Syntax:
    array.reduce((accumulator, currentValue) => {
        // return updated accumulator
    }, initialValue);
    
    - Accumulator: It accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or `initialValue`, if supplied (e.g., `0` in the example below).
    - Current Value: The current element being processed in the array.
    - Initial Value: A value to use as the first argument to the first call of the callback.

    Let's break this down with a simple example:
*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8];

// Using reduce to calculate the total sum of the array
const myTotal = myNums.reduce(function (acc, curval) {
    console.log(`acc: ${acc}, curval: ${curval}`); // Logging accumulator and current value for understanding
    return acc + curval; // Return the updated accumulator
}, 0); // The initial value is 0

console.log(myTotal); // Output: 36

/*
    Step-by-step explanation of how `reduce` works in the above code:

    1. Initialization: The accumulator (`acc`) is initialized to 0 (the initial value provided).
    2. Iteration: 
       - On the first iteration, `curval` is 1. The accumulator is 0, so the function returns 0 + 1 = 1.
       - On the second iteration, `curval` is 2. The accumulator is now 1, so the function returns 1 + 2 = 3.
       - On the third iteration, `curval` is 3. The accumulator is now 3, so the function returns 3 + 3 = 6.
       - This continues until the end of the array.
    3. Final Value: After processing all elements, the final value of the accumulator (36) is returned.

    The result is the total sum of all elements in the array.

    Now let's see another example where we calculate the total price of items in a shopping cart:

*/

const shoppingCart = [
    {
        itemName: "js Course",
        price: 1999
    },
    {
        itemName: "py Course",
        price: 6999
    },
    {
        itemName: "js Course",
        price: 19999
    }
];

// Using reduce to calculate the total price of the shopping cart
const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(`You have to pay: ${totalPrice}`); // Output: You have to pay: 28997

/*
    In this example, the `reduce()` method calculates the total price of all items in the shopping cart array:

    1. Initialization: The accumulator starts at 0.
    2. Iteration: 
       - On the first iteration, the item is {itemName: "js Course", price: 1999}. The accumulator is 0, so it becomes 0 + 1999 = 1999.
       - On the second iteration, the item is {itemName: "py Course", price: 6999}. The accumulator is 1999, so it becomes 1999 + 6999 = 8998.
       - On the third iteration, the item is {itemName: "js Course", price: 19999}. The accumulator is 8998, so it becomes 8998 + 19999 = 28997.
    3. Final Value: The final output is the total price of all items in the shopping cart.

    Overall, the `reduce()` method is a powerful tool for transforming arrays into a single value, whether you're summing numbers, concatenating strings, or calculating totals in objects.
*/

// ==========================================================
//                    Benefits of Using Reduce
// ==========================================================

/*
    - Versatility: `reduce()` can be used for a variety of operations, not just summation. It can also concatenate strings, flatten arrays, or even create new objects.
    - Functional Programming: It promotes a functional programming style by encouraging the use of pure functions, making code more predictable and easier to test.
    - Immutability: Like `map()` and `filter()`, `reduce()` does not modify the original array, preserving immutability.
*/
