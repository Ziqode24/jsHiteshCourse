// ==========================================================
//                Continuing with the ForEach Loop
// ==========================================================

// ==========================
// ForEach vs. Return
// ==========================

/*
    Unlike some array methods like `map()` or `filter()`, the `forEach()` method does not return anything.
    It always returns `undefined`. 
    This is because its purpose is to perform side effects, not to produce a transformed array.
*/

// Example: ForEach does not return values
const coding = ['js', 'rb', 'cpp', 'java'];

const values = coding.forEach((item) => {
  console.log(item);
  return item; // This return has no effect; `forEach` always returns `undefined`.
});

console.log(values); // Output: undefined

// ==========================
// Using Filter to Return New Array
// ==========================

/*
    The `filter()` method creates a new array containing only the elements that pass a specific condition (true).
    In contrast to `forEach`, `filter()` actually returns a new array.
*/

// Example: Using `filter()` to get values greater than 5
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => {
  return num > 5; // Returning numbers greater than 5
});

console.log(newNums); // Output: [6, 7, 8, 9, 10]

// ==========================
// Simulating Filter with ForEach
// ==========================

/*
    You can simulate the behavior of `filter()` using `forEach()`, but this requires manually pushing items to a new array.
    `forEach()` does not inherently create a new array, so you have to define and fill it yourself.
*/

// Example: Using `forEach()` to filter items
const filteredNums = [];

myNums.forEach((num) => {
  if (num > 5) {
    filteredNums.push(num); // Manually pushing numbers greater than 5
  }
});

console.log(filteredNums); // Output: [6, 7, 8, 9, 10]

// ==========================
// Filtering Data from Objects
// ==========================

/*
    In real-world applications, data often comes in complex structures like objects and arrays of objects.
    You can use `filter()` to extract specific objects based on certain criteria.
*/

// Example: Filtering books by genre and publish year
const books = [
  { title: "To Kill a Mockingbird", genre: "Fiction", publish: 1960, edition: 2010 },
  { title: "Sapiens: A Brief History of Humankind", genre: "Non-Fiction", publish: 2011, edition: 2015 },
  { title: "1984", genre: "Dystopian", publish: 1949, edition: 2009 },
  { title: "The Great Gatsby", genre: "Fiction", publish: 1925, edition: 2004 },
  { title: "The Immortal Life of Henrietta Lacks", genre: "Biography", publish: 2010, edition: 2011 },
  { title: "Thinking, Fast and Slow", genre: "Non-Fiction", publish: 2011, edition: 2013 },
  { title: "The Catcher in the Rye", genre: "Fiction", publish: 1951, edition: 2019 },
  { title: "The Selfish Gene", genre: "Science", publish: 1976, edition: 2016 },
  { title: "Educated", genre: "Memoir", publish: 2018, edition: 2020 },
  { title: "Becoming", genre: "Biography", publish: 2018, edition: 2019 },
  { title: "The Power of Habit", genre: "Self-Help", publish: 2012, edition: 2014 },
  { title: "The Road", genre: "Post-Apocalyptic", publish: 2006, edition: 2010 },
  { title: "A Brief History of Time", genre: "Science", publish: 1988, edition: 2005 },
  { title: "The Alchemist", genre: "Fiction", publish: 1988, edition: 2014 },
  { title: "Brave New World", genre: "Dystopian", publish: 1932, edition: 2006 },
];

// Filtering books based on genre and publish year
let userBooks = books.filter((bk) => {
  return bk.publish <= 2010 && bk.genre === "Science";
});

console.log(userBooks); // Output: [{ title: "The Selfish Gene", genre: "Science", publish: 1976, edition: 2016 }, ...]

/*
    The `filter()` method allows us to extract books from the database that match certain conditions, 
    such as books published before 2010 and belonging to the 'Science' genre.
*/

// ==================================
// Key Differences Between ForEach and Filter:
// ==================================
/*
1. ForEach:
   - Executes a function for each array element.
   - Returns `undefined`.
   - Used for side effects (logging, modifying external variables, etc.).

2. Filter:
   - Executes a function for each array element and returns a new array containing elements that pass a given test.
   - Used to create a new array based on conditions.
*/
