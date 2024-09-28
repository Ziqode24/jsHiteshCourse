// ==================================
//          Switch Statement in JavaScript
// ==================================

// =======================
//     switch Syntax and Use
// =======================
/*
    The switch statement is used when you have multiple conditions to check, and you want 
    a cleaner and more organized way to handle them compared to multiple if-else statements.
    
    Syntax:
    
    switch (key) {
        case value1:
            // Code to execute if key === value1
            break; // Break is necessary to prevent fall-through
        case value2:
            // Code to execute if key === value2
            break;
        default:
            // Code to execute if no matching case is found
            break;
    }
*/

// Example:
const month = 9;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  default:
    console.log("Invalid month"); // Default case runs if no matching case is found
    break;
}


// ====================
// Key Concepts Summarized:
// ====================

/*
1. Switch Statement:
   - It compares the value of a variable (key) against several possible values   (cases).
   - Useful when there are multiple potential values for a variable.
   - Prevents writing repetitive if-else blocks.
   - `break` prevents "fall-through," where code in subsequent cases would execute after a match.
   - The `default` block runs if none of the cases match.
   - The `default` case is optional, but it’s a good practice to handle unexpected values.

2. When to Use:
   - Use switch statements when you have a known set of values to compare, such as days of the week, months, etc.
   - If your conditions involve complex comparisons, stick with if-else statements.
*/

// Shortcut Tip: 
// Use Ctrl + Shift + Alt + Down Arrow to copy the current line and paste it directly below in your code editor.
