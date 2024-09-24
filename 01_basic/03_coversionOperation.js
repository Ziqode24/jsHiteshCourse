let score = "33abc";

//output : string
// console.log(typeof score); 
// console.log(typeof (score));

/*=========================================================
                JavaScript Type Conversion            
 ==========================================================

  1. Boolean Conversion                                   
     - Use `Boolean(value)` to convert to true/false.     
     - Falsy values: 0, null, undefined, NaN, "", false.  
     - Truthy values: Everything else (non-falsy).        
 ----------------------------------------------------------
 
  2. Number Conversion                                    
     - Use `Number(value)` to convert to a number.        
     - Example: `Number("123")` ➝ 123 (from string to    
       number).                                           
 ----------------------------------------------------------

  3. String Conversion                                    
     - Use `value.toString()` or `String(value)` to       
       convert to a string.                               
     - Example: `(123).toString()` ➝ "123" (from number   
       to string).                                        
 ==========================================================*/

let valueInNumber = Number(score)  //this will convert any data types into number
//console.log(typeof valueInNumber); //output : number

// console.log(valueInNumber);//output : NaN as 33abc isnot a number but
                           // in typeof it shows output: number 'cause we forced it
                           
/**
 * console.log(valueInNumber);
 * 
 * Outputs wrt dataTypes
 * "33" ==> 33
 * "33abx" ==> 33abc
 * true ==> 1; false ==> 0
 * null ==> 0
 * undefined ==> NaN
 * 
  */                           


let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 ==> true; 0 ==> false
// "" ==> false
// "ziQode" ==> true

//- Falsy values: 0, null, undefined, NaN, "", false.  


let someNumber = 333 //this is number

let stringNumber = String(someNumber) // this converted 333 to string

console.log(stringNumber);// output: 33 but its not a number
console.log(typeof stringNumber); // output : string





