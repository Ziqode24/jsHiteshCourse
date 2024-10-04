/*
===============================================================
   JavaScript Concepts: Detailed Notes
===============================================================
*/

/*
===============================================================
   1. Synchronous & Single-Threaded JavaScript
===============================================================
- Synchronous Execution:
  - JavaScript executes code line by line.
  - Each line waits for the previous one to finish before executing.
  - Analogy: A single-track road where each car (line of code) waits for the one ahead to move.

- Single-threaded:
  - JavaScript can handle only one task at a time.
  - No multitasking or parallel processing is performed.

- Real-life Example:
  Think of waiting in a coffee shop queue: each customer (task) is served one at a time, and no one is served until the previous customer has completed their order.
*/

/*
===============================================================
   2. Execution Context
===============================================================
- Execution Context:
  - The environment where JavaScript code runs, encompassing variables, functions, and scope.

- How it Works:
  - Only one line of code executes at a time.
  - Each function call is pushed onto the Call Stack.
  - The Memory Heap stores objects and variables.
  - Follows synchronous order: one task at a time.

- Real-life Example:
  A chef's workspace: they can only work on one dish at a time, completing it before starting the next.
*/

/*
===============================================================
   3. Call Stack & Memory Heap
===============================================================
- Call Stack:
  - A stack structure where function calls are placed.
  - Follows Last In, First Out (LIFO) principle: the last function called is the first to be executed.

- Memory Heap:
  - A memory space where variables and objects are stored.

- Real-life Example:
  - Call Stack: Stacking plates; the last plate added is the first to be removed.
  - Memory Heap: A warehouse storage area for boxes (objects/variables).
*/

/*
===============================================================
   4. Blocking vs Non-blocking Code
===============================================================
- Blocking Code:
  - Stops program execution until a task completes.
  - The next line of code must wait.

Example: Reading a file synchronously
*/
//const fs = require("fs");

//const data = fs.readFileSync("file.txt");
//console.log(data);

/*
- Non-blocking Code:
  - Allows the program to continue executing other tasks while waiting for a task to complete.
  - Utilizes callbacks or promises.

Example: Reading a file asynchronously
*/
//fs.readFile("file.txt", (err, data) => {
  //  if (err) throw err;
    //console.log(data);
//});
//console.log("This runs immediately");

/*
- Real-life Example:
  - Blocking: Imagine you're hosting a dinner party and you need to bake a cake. You put the cake in the oven and stand there watching it bake. You can't do anything else until the timer goes off, which means you're wasting time instead of preparing other dishes.

  - Non-blocking: Now imagine you put the cake in the oven, set the timer, and while it's baking, you start chopping vegetables for a salad. This way, you're using your time efficiently by multitasking while waiting for the cake to finish.
*/

/*
===============================================================
   5. JavaScript Engine & Event Loop
===============================================================
- JavaScript Engine:
  - Responsible for executing JavaScript code.
  - Comprises the Memory Heap (for data storage) and the Call Stack (for function execution).

- Web API:
  - Handles asynchronous tasks like setTimeout, DOM events, and fetch.

- Event Loop:
  - Monitors the Call Stack and the Task Queue, moving tasks from the queue to the stack when it's empty.

- How it Works:
  - When an async operation (like setTimeout) is called, it's passed to the Web API.
  - The Web API registers a callback function for later execution.
  - Once the Call Stack is empty, the Event Loop moves callbacks from the Task Queue to the Call Stack for execution.

- Real-life Example:
  A restaurant scenario: The kitchen (Call Stack) prepares one order at a time. The waiter (Web API) takes orders and passes them to the kitchen. The manager (Event Loop) ensures orders are prepared in sequence without delays.
*/

/*
===============================================================
   Diagram: JavaScript Engine & Event Loop Flow
===============================================================

+---------------------+        +---------------------+
|   Memory Heap       |        |   Web API (Browser) |
|   (Variables/Objects)| ----> |   (Handles Async)   |
+---------------------+        +---------------------+
   |                                   |
   v                                   v
+---------------------+       +---------------------+
|   Call Stack        | <---- |   Callback Queue    |
|   (Executes Code)   |       |   (Stores Callbacks)|
+---------------------+       +---------------------+
   |
   v
+---------------------+
|   Event Loop        |
|   (Monitors Stack)  |
+---------------------+

Flow:
1. Code enters the Call Stack for execution.
2. Asynchronous tasks are handed off to Web APIs, which handle them outside the main thread.
3. Once async tasks complete, their callbacks are placed in the Callback Queue.
4. The Event Loop continuously checks if the Call Stack is empty. If it is, it moves the first callback from the Callback Queue to the Call Stack for execution.
===============================================================
*/

/*
Detailed Explanation:

1. Memory Heap:
   - This is where all objects and variables are stored in memory. It allows for dynamic memory allocation, meaning that memory can be allocated as needed during execution.

2. Web API:
   - The browser provides various APIs (like `setTimeout`, `fetch`, and DOM event handlers) that enable asynchronous operations. When an async operation is initiated, control is passed to these APIs, allowing JavaScript to continue executing other code without waiting for the operation to complete.

3. Call Stack:
   - The Call Stack is a Last In, First Out (LIFO) data structure that keeps track of function calls. Each time a function is invoked, it is added to the stack, and when it completes, it is removed from the stack. Only one function can be executed at a time in this stack.

4. Callback Queue:
   - This queue holds callbacks from asynchronous operations that are ready to be executed once the Call Stack is empty. It ensures that these callbacks are executed in the order they were added.

5. Event Loop:
   - The Event Loop is a mechanism that monitors both the Call Stack and the Callback Queue. Its primary function is to check if the Call Stack is empty; if it is, it dequeues the next callback from the Callback Queue and pushes it onto the Call Stack for execution. This allows JavaScript to handle multiple asynchronous operations efficiently without blocking execution.

### Example Flow:

Consider this simple code snippet:

```javascript
console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

console.log('End');
*/

// Explained with a Analogy

// 1. Call Stack: The boy calls his girlfriend to ask her out.
console.log("Boy: Hey, would you like to go out with me?");

// 2. Waiting for Response: She needs to check her schedule (asynchronous task).
setTimeout(() => {
    // 3. Callback Queue: After checking her schedule, she sends him a text saying she's free.
    console.log("Girlfriend: Yes, I'm free on Saturday!");
}, 120000); // Simulating the time it takes to check her schedule (2 min)

// 4. Event Loop: While waiting, the boy goes back to playing video games.
console.log("Boy: I'm going to play video games while I wait...");

// 5. Responding: When the boy finishes playing, he checks his phone for messages.
setTimeout(() => {
    // This simulates the boy checking his phone after finishing his game
    console.log("Boy checks his phone.");
    console.log("Boy: Great! Let's meet at 5 PM."); // Responding to her message
}, 180000); // Simulating the time spent playing video games (3 min)

// Summary:
// - Call Stack: Asking her out.
// - Web API: Waiting for her to check her schedule.
// - Callback Queue: Her text message.
// - Event Loop: Checking for new messages.
