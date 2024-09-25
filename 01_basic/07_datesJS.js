// _________________________________________ DATES ___________________________________________

let myDate = new Date(); // The Date object in JavaScript is used for working with dates and times.

console.log(myDate.toString()); // Converts the date to a human-readable string.
console.log(myDate.toDateString()); // Converts the date to a string, omitting the time.
console.log(myDate.toLocaleString()); // Converts the date to a string, using locale conventions.

/*
==========================
    Common Date Methods
==========================
*/

// .toString() - Converts the Date object to a string.
console.log(myDate.toString()); // Output: Full date and time as a string

// .toDateString() - Converts the Date object to a string, displaying only the date.
console.log(myDate.toDateString()); // Output: "Sat Sep 25 2024"

// .toLocaleString() - Converts the Date object to a string, formatted according to the current locale.
console.log(myDate.toLocaleString()); // Output: "9/25/2024, 11:57:28 AM" (based on your locale settings)

// .toISOString() - Converts the Date object to a string following the ISO 8601 format.
console.log(myDate.toISOString()); // Output: "2024-09-25T05:57:28.123Z"

// .toTimeString() - Converts the time part of the Date object to a string.
console.log(myDate.toTimeString()); // Output: "11:57:28 GMT-0500 (Central Daylight Time)"

// .toUTCString() - Converts the Date object to a string, using UTC (Coordinated Universal Time).
console.log(myDate.toUTCString()); // Output: "Wed, 25 Sep 2024 16:57:28 GMT"


/*
=============================
    Date Object Creation
=============================
*/

// Date can be created with different syntaxes:
let myCreatedDate1 = new Date(2024, 8, 25); // Month is 0-indexed (8 = September)
console.log(myCreatedDate1.toLocaleString()); // Output: "9/25/2024, 12:00:00 AM"

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3); // Specific date and time (23 Jan 2023, 5:03 AM)
console.log(myCreatedDate2.toLocaleString()); // Output: "1/23/2023, 5:03:00 AM"

let myCreatedDate3 = new Date("2023-01-14"); // ISO date string
console.log(myCreatedDate3.toLocaleString()); // Output: "1/14/2023, 12:00:00 AM"

/*
========================
    Timestamps and Time
========================
*/

// Date.now() - Returns the current timestamp in milliseconds since 1 January 1970 (Unix epoch).
let myTimeStamp = Date.now();
console.log(myTimeStamp); // Output: Current timestamp (milliseconds)

// Convert timestamp to seconds (useful in many applications, especially when comparing times).
console.log(Math.floor(Date.now() / 1000)); // Output: Current timestamp in seconds

// .getTime() - Returns the timestamp in milliseconds for a given date.
console.log(myCreatedDate3.getTime()); // Output: 1673654400000 (timestamp for 14 Jan 2023)

/*
===============================
    Getting Specific Date Parts
===============================
*/

let newDate = new Date(); // Current date and time
console.log(newDate); // Output: Full date and time

// .getDate() - Returns the day of the month (1-31).
console.log(newDate.getDate()); // Output: Current day of the month

// .getDay() - Returns the day of the week (0-6, where 0 is Sunday).
console.log(newDate.getDay()); // Output: Day of the week (0 = Sunday, 1 = Monday, etc.)

// .getMonth() - Returns the month (0-11, where 0 is January and 11 is December).
console.log(newDate.getMonth()); // Output: Current month (0-indexed)

// .getFullYear() - Returns the year.
console.log(newDate.getFullYear()); // Output: Current year

// .getHours(), .getMinutes(), .getSeconds(), .getMilliseconds() - Returns the specific time parts.
console.log(newDate.getHours()); // Output: Current hour (24-hour format)
console.log(newDate.getMinutes()); // Output: Current minute
console.log(newDate.getSeconds()); // Output: Current second
console.log(newDate.getMilliseconds()); // Output: Current milliseconds

/*
==============================
    Customizing Date Output
==============================
*/

// You can customize the output format of a date using .toLocaleString() with options.
let anotherNewDate = newDate.toLocaleString('default', {
  weekday: "short" // Display weekday in short format (Mon, Tue, etc.)
});
console.log(anotherNewDate); // Output: "Wed", for example

// You can customize other parts like the year, month, and day.
let customDate = newDate.toLocaleString('default', {
  weekday: "long", // Full weekday name
  year: "numeric", // Full year
  month: "long", // Full month name
  day: "numeric", // Day of the month
});
console.log(customDate); // Output: "Wednesday, September 25, 2024"

/*
=========================
    Setting Specific Date Parts
=========================
*/

// .setDate(), .setMonth(), .setFullYear(), etc. - Modify specific parts of a date.
let modifiedDate = new Date();
modifiedDate.setDate(1); // Set the day of the month to 1
modifiedDate.setMonth(0); // Set the month to January (0-indexed)
modifiedDate.setFullYear(2025); // Set the year to 2025
console.log(modifiedDate.toLocaleString()); // Output: Modified date

// .setHours(), .setMinutes(), .setSeconds(), .setMilliseconds() - Modify specific time parts.
modifiedDate.setHours(10); // Set the hour to 10 AM
modifiedDate.setMinutes(30); // Set the minute to 30
console.log(modifiedDate.toLocaleString()); // Output: Modified time and date
