# Async / Sync

## Synchronous Programming
**Definition:**
...

## Asynchronous Programming
- **Definition:** Asynchronous programming is a process that allows an application to run a second set of instructions while focusing on its primary or basic process.
- **Benefits:**
  - Improved application performance
  - Wide application to different coding languages
  - Better user experiences
- **Use Cases:**
  - Reduces inefficiencies in an application
  - Efficient data collection

## Callback
**Explanation:**
In the following code, we give a callback as an argument to ensure that the next task starts only after the current task is completed.

```javascript
function task1(callback) {
  setTimeout(() => {
    console.log("Step 1: Boil some water.");
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Step 2: Add tea leaves or a tea bag to your cup.");
    callback();
  }, 1500);
}
```
## Callback Hell
**Example:** The following code demonstrates callback hell, where multiple nested callbacks make the code difficult to read and maintain.

```javascript
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        task5(() => {
          task6(() => {
            task7(() => {});
          });
        });
      });
    });
  });
});
```

# Promises

## Definition
A promise is an assurance or guarantee that something will happen in the future. A person can promise another person a specific outcome/result. In programming, a promise is an object that holds the future value of an asynchronous operation.

**Example:** Requesting some data from a server. The promise assures us that we will get the data, which we can use in the future.

**Three States of a Promise:**
1. **Pending:** The initial state, neither fulfilled nor rejected.
2. **Fulfilled:** The operation completed successfully.
3. **Rejected:** The operation failed.


## Promise Syntax
In JavaScript, the `Promise` object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Here’s a breakdown of the syntax:

```javascript
const promise = new Promise((resolve, reject) => {
  // Code to execute asynchronously
});
```

- **`new`**: This keyword is used to create a new instance of the `Promise` object. It initializes a new promise, which can be in one of three states: pending, fulfilled, or rejected.

- **`Promise`**: This is a built-in constructor function for creating promise objects. It takes a single argument, which is a function known as the executor. The executor function is executed immediately by the Promise implementation.

- **`(resolve, reject) => { ... }`**: This is the executor function, which receives two parameters:
  - **`resolve`**: A function that you call with the result of the asynchronous operation when it completes successfully.
  - **`reject`**: A function that you call with an error or reason for failure when the operation fails.

## Resolve and Reject
In the following example, the promise checks a condition and either resolves or rejects based on that condition:

```javascript
const promise = new Promise((resolve, reject) => {
  const allWhite = false; // Condition to check
  
  if (!allWhite) {
    resolve("All things are white"); // Called if the condition is true
  } else {
    reject("Not all things are white"); // Called if the condition is false
  }
});

console.log(promise);
```

- **`const allWhite = false;`**: This line sets a boolean variable that determines the outcome of the promise.

- **`if (!allWhite)`**: This condition checks if `allWhite` is false. Since `allWhite` is false, the condition evaluates to true.

- **`resolve("All things are white");`**: If the condition is true (which it is), this line calls the `resolve` function, transitioning the promise from the pending state to the fulfilled state with the message "All things are white".

- **`reject("Not all things are white");`**: This line is executed if the condition were false (which it isn't in this case). It would transition the promise to the rejected state with the error message "Not all things are white".

- **`console.log(promise);`**: This logs the promise object to the console. At this point, it will show the state of the promise, which will be fulfilled if resolved, or pending if the executor has not completed yet.

This structure allows you to handle asynchronous operations in a more manageable way, enabling better error handling and chaining of operations.

## States of a Promise
```javascript 
const promise = new Promise((resolve, reject) => {
  const randomNum = Math.floor(Math.random() * 10);

  setTimeout(() => {
    if (randomNum > 4) {
      resolve("Your guess is right!");
      // This will show the fulfilled state
    } else {
      reject("Oops! You are wrong!");
      // This will show the rejected state
    }

    // Now the promise is in the pending state and will complete after 2 seconds
  }, 2000);
});

console.log(promise);
```

## then & catch

In this section, we create a promise that resolves or rejects based on a randomly generated number after a delay of 2 seconds. We utilize `.then` and `.catch` methods to handle the resolved and rejected states of the promise.

```javascript
const promise = new Promise((resolve, reject) => {
  const randomNum = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9

  setTimeout(() => {
    if (randomNum > 4) {
      resolve("Your guess is right!"); // Resolve if the number is greater than 4
    } else {
      reject("Oops! Your guess is wrong!"); // Reject if the number is 4 or less
    }
  }, 2000); // Delay of 2 seconds
});

// Let's learn how to consume the promise
// New methods: then & catch || They are used to handle the promise results

/* 
'then' takes a callback that is executed when the promise is resolved and receives 
the resolved value as an argument. 
Similarly, 'catch' takes a callback that is executed when the promise is rejected 
and receives the error as an argument.
*/
promise
  .then((value) => {
    console.log(value); // value is 'Your guess is right!' if resolved
  })
  .catch((error) => {
    console.log(error); // error is 'Oops! Your guess is wrong!' if rejected
  });
```

## Chaining

Chaining allows you to execute multiple promises in sequence, where each subsequent promise waits for the previous one to complete. This example demonstrates how to chain promises and handle errors effectively:

```javascript
const promise = new Promise((resolve, reject) => {
  resolve("Well done! Promise one is done!"); // Resolving the first promise
});

const promiseTwo = new Promise((resolve, reject) => {
  resolve("Well done! Promise two is done!"); // Resolving the second promise
});

const promiseThree = new Promise((resolve, reject) => {
  reject("Sorry! Promise three is rejected. Unlucky!!"); // Rejecting the third promise
});

promise
  .then((value) => {
    console.log(value); // Log the value of the first promise
    return promiseTwo; // Return promiseTwo to trigger its execution
  })
  .then((value) => {
    console.log(value); // Log the value of the second promise
    return promiseThree; // Return promiseThree to trigger its execution
  })
  .catch((error) => {
    console.log(error); // Log the error if any promise is rejected
  });

// Callback Hell Example: Avoid this pattern for better readability
/* 
promise
  .then((value) => {
    console.log(value);
    promiseTwo.then((data) => {
      console.log(data);
      promiseThree.then((data) => {
        console.log(data);
      }).catch((error) => {
        console.log(error);
      });
    });
  })
  .catch((error) => {
    // Handle any errors here
  });
*/
```

## Grouping Promises

Grouping multiple promises can be accomplished using `Promise.all()`, which allows you to wait for all promises to either resolve or for one to reject. This is useful when you want to perform actions based on the results of multiple asynchronous operations.

```javascript
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise one solved"); // Resolving after 1 second
  }, 1000);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise two rejected"); // Rejecting after 1.5 seconds
  }, 1500);
});

// Grouping all promises using Promise.all
Promise // This 'Promise' is a constructor, not a variable like above
  .all([promiseOne, promiseTwo])
  // Consuming both promises at once
  .then((data) => console.log(data[0], data[1])) // Log results if both resolve
  .catch((error) => console.log(error)); // Log error if any promise rejects

// Benefits of using Promise.all
/* 
You should use this method when you want to know if all the promises 
are resolved successfully or if any one of them has failed.
*/
```

# Async-Await

## Definition
**Async-Await** is a syntax in JavaScript that allows you to handle asynchronous operations in a more straightforward manner. It enables you to write asynchronous code that looks and behaves like synchronous code, enhancing readability and maintainability.

## How It Works
- **Async Function:** By declaring a function with the `async` keyword, you can use the `await` keyword inside it. An async function always returns a promise.
- **Await:** The `await` keyword pauses the execution of the `async` function until the promise is either resolved or rejected. This allows for a more linear flow of control in your code.

## Benefits
- Simplifies the structure of asynchronous code.
- Makes the code more readable and maintainable.
- Reduces the complexity associated with chaining `.then()` and `.catch()` methods.

## Async Function Syntax
```javascript
const asyncFunction = async () => {
  // Your code here
};
```

## Try & Catch Syntax
The `try` block is used to test a block of code for errors, while the `catch` block lets you handle those errors gracefully.

### Example: Baking Cookies with Async-Await

In this example, we create several asynchronous functions that simulate baking tasks. Each function returns a promise that resolves or rejects based on specific conditions.

```javascript
const preHeatOven = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const preHeatOven = true; // Simulate preheating success

      if (preHeatOven) {
        resolve('Preheat the oven to 180°C');
      } else {
        reject('Failed to preheat the oven');
      }
    }, 1000);
  });
};

const addSugarAndChocoChips = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addChoco = false; // Simulate failure to add chocolate

      if (addChoco) {
        resolve('Place sugar and choco chips, stir until melted and smooth');
      } else {
        reject('Failed to add sugar and chocolate chips');
      }
    }, 1500);
  });
};

const mixFlour = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mix = true; // Simulate mixing success

      if (mix) {
        resolve('Add flour and mix until fully combined');
      } else {
        reject('Failed to mix flour');
      }
    }, 2000);
  });
};

const addEggs = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const eggsAdded = true; // Simulate egg addition success

      if (eggsAdded) {
        resolve('Crack in the eggs and mix well');
      } else {
        reject('Failed to add eggs');
      }
    }, 2500);
  });
};

const bakeCookies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bake = true; // Simulate baking success

      if (bake) {
        resolve('Place in the oven and bake for 15 minutes');
      } else {
        reject('Failed to bake cookies');
      }
    }, 3000);
  });
};

// Async function to manage the cookie-making process
const makeCookies = async () => {
  // Remember, await is only valid inside async functions
  try {
    const taskOne = await preHeatOven();
    console.log(taskOne); // Log the result of the first task
    const taskTwo = await addSugarAndChocoChips();
    console.log(taskTwo); // Log the result of the second task
    const taskThree = await mixFlour();
    console.log(taskThree); // Log the result of the third task
    const taskFour = await addEggs();
    console.log(taskFour); // Log the result of the fourth task
    const taskFive = await bakeCookies();
    console.log(taskFive); // Log the result of the fifth task

    console.log('Enjoy your Cookies :p');
  } catch (error) {
    console.log(error); // Handle and log any errors that occur
    // If an error is caught, subsequent promises will not execute
  }
};

// Initiate the cookie-making process
makeCookies();
```

### Explanation of Steps
1. **Function Declaration:** The `makeCookies` function is declared as an async function.
2. **Awaiting Promises:** Within a try block, each baking task is called using `await`, which pauses execution until the promise resolves.
3. **Error Handling:** If any promise is rejected, control jumps to the catch block, logging the error and preventing further execution of subsequent promises.
4. **Sequential Execution:** Each baking step runs in order, ensuring the tasks are completed one after another, which mirrors the way you would bake cookies in real life.
